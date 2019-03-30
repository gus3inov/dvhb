export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class ApiService {
	static baseUri = process.env.BASE_API_URL;

	static request<T>(
		method: Method,
		url: string,
		options: object = {}
	): Promise<T> {
		console.log(process.env);
		const fullOptions = Object.assign(
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				method,
			},
			options
		);

		return fetch(`${this.baseUri}${url}`, fullOptions).then(response => {
			if (response.status === 200) {
				return response.json();
			}

			if (!response.ok) {
				throw response;
			}

			return response;
		});
	}

	static get<T>(url: string, options?: object): Promise<T> {
		return this.request<T>('GET', url, options);
	}
}

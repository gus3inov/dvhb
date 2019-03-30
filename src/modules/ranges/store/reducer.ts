import { handleActions, Action } from 'redux-actions';

import { FETCH_FAILED, FETCH_SUCCEEDED, FETCH_PENDING } from './actions';

export type Payload = [] | object | null | undefined;

export type State = {
	pending: boolean;
	data: Payload;
	error: Payload;
};

const initialState: State = {
	pending: false,
	data: null,
	error: null,
};

export default handleActions<State>(
	{
		[FETCH_PENDING]: (state) => ({
			...state,
			pending: true,
		}),
		[FETCH_SUCCEEDED]: (state, action: Action<Payload>) => ({
			...state,
			pending: false,
			error: null,
			data: action.payload,
		}),
		[FETCH_FAILED]: (state, action: Action<Payload>) => ({
			...state,
			pending: false,
			error: action.payload,
		}),
	},
	initialState
);

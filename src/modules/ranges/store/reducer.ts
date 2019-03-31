import { handleActions, Action } from 'redux-actions';

import {
	FETCH_PENDING,
	FETCH_SUCCEEDED,
	FETCH_FAILED,
	SET_RANGES,
} from './actions';

export type Payload = TRange[] | object | undefined;

export type State = {
	pending: boolean;
	data: Payload;
	error: object | null | undefined;
};

const initialState: State = {
	pending: false,
	data: [],
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
		[SET_RANGES]: (state, action: Action<Payload>) => ({
			...state,
			data: action.payload,
		}),
		[FETCH_FAILED]: (state, action: Action<object>) => ({
			...state,
			pending: false,
			error: action.payload,
		}),
	},
	initialState
);

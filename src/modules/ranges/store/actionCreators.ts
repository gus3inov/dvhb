import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import {
	FETCH_PENDING,
	FETCH_SUCCEEDED,
	FETCH_FAILED,
} from './actions';

const fetchPending = createAction(FETCH_PENDING);
const fetchSucceeded = createAction(FETCH_SUCCEEDED);
const fetchFailed = createAction(FETCH_FAILED);

export const register = () => async (dispatch: Dispatch) => {
	await dispatch(fetchPending());
};

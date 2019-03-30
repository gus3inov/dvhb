import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { ApiService } from 'services/ApiService';
import {
	FETCH_PENDING,
	FETCH_SUCCEEDED,
	FETCH_FAILED,
} from './actions';

const fetchPendingAction = createAction(FETCH_PENDING);
const fetchSucceededAction = createAction(FETCH_SUCCEEDED);
const fetchFailedAction = createAction(FETCH_FAILED);

export const fetchRanges = () => async (dispatch: Dispatch) => {
	await dispatch(fetchPendingAction());

	try {
		const res = await ApiService.get('/ranges');

		await dispatch(fetchSucceededAction(res));
	} catch (e) {
		await dispatch(fetchFailedAction(e));
	}
};

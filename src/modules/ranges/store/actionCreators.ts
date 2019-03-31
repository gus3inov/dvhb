import { Dispatch } from 'redux';
import update from 'immutability-helper';
import { createAction } from 'redux-actions';
import { ApiService, RangeService } from 'services';
import { RootState } from 'store/reducers';
import {
	FETCH_PENDING,
	FETCH_SUCCEEDED,
	FETCH_FAILED,
	SET_RANGES,
} from './actions';
import { getData } from './selectors';

const fetchPendingAction = createAction(FETCH_PENDING);
const fetchSucceededAction = createAction(FETCH_SUCCEEDED);
const fetchFailedAction = createAction(FETCH_FAILED);
const setRangesAction = createAction(SET_RANGES);

type RangeBody = {
	id: number;
	data: TRange[];
};

export const fetchRanges = (count: number) => async (dispatch: Dispatch) => {
	await dispatch(fetchPendingAction());

	try {
		const res: RangeBody = await ApiService.get(`/ranges/${count}`);
		const { data } = res;
		const sum = data.reduce(
			(acc: number, range: TRange) => acc + range.Percent,
			0
		);
		let ranges: TRange[] = data;

		if (data.length !== 1 && sum < RangeService.MAX_VALUE) {
			ranges = update(ranges, {
				0: {
					$set: {
						...ranges[0],
						Percent: RangeService.MAX_VALUE,
					},
				},
			});
		}

		await dispatch(fetchSucceededAction(ranges));
	} catch (e) {
		await dispatch(fetchFailedAction(e));
	}
};

export const setRanges = (id: number, value: number) => (
	dispatch: Dispatch,
	getState: () => RootState
) => {
	const state = getState();
	const ranges = getData(state);

	if (ranges instanceof Array) {
		dispatch(
			setRangesAction(RangeService.computePercents(ranges, id, value))
		);
	}
};

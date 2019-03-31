import { Dispatch } from 'redux';
import update from 'immutability-helper';
import { createAction } from 'redux-actions';
import { ApiService } from 'services/ApiService';
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

const MIN_VALUE = 0;
const MAX_VALUE = 100;

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

		if (data.length !== 1 && sum < MAX_VALUE) {
			ranges = update(ranges, {
				0: {
					$set: {
						...ranges[0],
						Percent: MAX_VALUE,
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
		const sum = ranges.reduce((acc, item) => acc + item.Percent, 0);
		const delta = MAX_VALUE - sum;

		const updateRanges: TRange[] = ranges.map((item: TRange) => {
			if (item.Id !== id) {
				let newValue = item.Percent + delta / ranges.length;

				if (newValue < MIN_VALUE || value === MAX_VALUE) {
					newValue = MIN_VALUE;
				}
				if (newValue > MAX_VALUE) {
					newValue = MAX_VALUE;
				}

				return {
					...item,
					Percent: +newValue.toFixed(2),
				};
			}

			return {
				...item,
				Percent: value || 0,
			};
		});

		dispatch(setRangesAction(updateRanges));
	}
};

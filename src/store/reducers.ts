import { combineReducers, StoreCreator } from 'redux';
import { default as ranges, State as RangesState } from 'modules/ranges/store/reducer';

export type RootState = {
	ranges: RangesState;
};

export default combineReducers<StoreCreator>({
	ranges,
});

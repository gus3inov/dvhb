import { RootState } from 'store/reducers';
import { modelName } from './actions';

export const getPending = (state: RootState) => state[modelName].pending;
export const getData = (state: RootState) => state[modelName].data;
export const getError = (state: RootState) => state[modelName].error;

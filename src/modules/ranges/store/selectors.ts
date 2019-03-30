import { Store } from 'store/reducers';
import { modelName } from './actions';

export const getPending = (state: Store) => state[modelName].pending;
export const getData = (state: Store) => state[modelName].data;
export const getError = (state: Store) => state[modelName].error;

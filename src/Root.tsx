import React, { lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { suspenseEnhancer } from 'hocs';
import './global.css';

const Ranges = lazy(() => import('./modules/ranges/containers/Ranges'));
const SuspenseRanges = suspenseEnhancer(Ranges);

export default () => (
	<Provider store={store}>
		<SuspenseRanges />
	</Provider>
);

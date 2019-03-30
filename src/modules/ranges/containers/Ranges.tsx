import * as React from 'react';
import { connect } from 'store';
import { RootState } from 'store/reducers';
import { useMount } from 'hooks/useMount';
import { RangesTemplate } from '@templates/RangesTemplate';
import { fetchRanges, getData } from '../store';
import { Payload } from '../store/reducer';

type Props = {
	data: Payload;
	fetchRangesAction: () => Promise<void>;
};

const Ranges: React.FC<Props> = ({
	data,
	fetchRangesAction,
}) => {
	useMount(() => {
		fetchRangesAction();
	});

	return data instanceof Array ? (
		<RangesTemplate data={data} />
	) : <h3>'Something went wrong'</h3>;
};

const mapStateToProps = (state: RootState) => ({
	data: getData(state),
});

const mapDispatchToProps = {
	fetchRangesAction: fetchRanges,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Ranges);

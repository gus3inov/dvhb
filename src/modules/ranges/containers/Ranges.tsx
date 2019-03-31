import * as React from 'react';
import { connect } from 'store';
import { RootState } from 'store/reducers';
import { useMount } from 'hooks/useMount';
import { RangesTemplate } from '@templates/RangesTemplate';
import { fetchRanges, setRanges, getData } from '../store';
import { Payload } from '../store/reducer';

type Props = {
	data: Payload;
	fetchRangesAction: (count: number) => Promise<void>;
	setRangesAction: (id: number, value: number) => void;
};

const Ranges: React.FC<Props> = ({
	data,
	fetchRangesAction,
	setRangesAction,
}) => {
	useMount(() => {
		fetchRangesAction(1);
	});

	return data instanceof Array ? (
		<RangesTemplate
			fetchRanges={(count) => fetchRangesAction(count)}
			onChangeRange={(id: number, value: number) => setRangesAction(id, value)}
			data={data}
		/>
	) : <h3>'Something went wrong'</h3>;
};

const mapStateToProps = (state: RootState) => ({
	data: getData(state),
});

const mapDispatchToProps = {
	fetchRangesAction: fetchRanges,
	setRangesAction: setRanges,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Ranges);

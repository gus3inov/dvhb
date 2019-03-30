import * as React from 'react';
import { Range } from '@ui/molecules';
import { StyledWrapper, StyledTitle } from './styles';

export type Props = {
	data: TRange[];
};

export const RangesTemplate: React.FC<Props> = ({ data }) => (
	<StyledWrapper>
		<StyledTitle>Ranges 📏</StyledTitle>
		{data.map(range => (
			<Range
				key={range.Id}
				defaultValue={range.Percent}
				label={range.Name}
				onChange={(value) => console.log(range.Id, value)}
			/>
		))}
	</StyledWrapper>
);

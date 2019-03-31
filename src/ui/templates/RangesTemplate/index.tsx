import * as React from 'react';
import { Range } from '@ui/molecules';
import { StyledWrapper, StyledTitle, StyledButton, ButtonList } from './styles';

export type Props = {
	data: TRange[];
	fetchRanges: (count: number) => void;
	onChangeRange: (id: number, value: number) => void;
};

export const RangesTemplate: React.FC<Props> = ({
	fetchRanges,
	onChangeRange,
	data,
}) => (
	<StyledWrapper>
		<StyledTitle>Ranges 📏</StyledTitle>
		<ButtonList>
			<StyledButton onClick={() => fetchRanges(1)}>
				Один элемент
			</StyledButton>
			<StyledButton onClick={() => fetchRanges(2)}>
				Два элемента
			</StyledButton>
			<StyledButton onClick={() => fetchRanges(3)}>
				Три элемента
			</StyledButton>
			<StyledButton onClick={() => fetchRanges(4)}>
				Четрые элемента
			</StyledButton>
			<StyledButton onClick={() => fetchRanges(5)}>
				Пять элементов
			</StyledButton>
		</ButtonList>
		{data.map(range => (
			<Range
				key={range.Id}
				value={range.Percent}
				label={range.Name}
				onChange={value => onChangeRange(range.Id, value)}
			/>
		))}
	</StyledWrapper>
);

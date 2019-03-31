import React, { useCallback } from 'react';
import { Input, Slider } from '@ui/atoms';
import { StyledWrapper, StyledLabel, StyledSlider } from './styles';

export type Props = {
	label: string;
	value: number;
	onChange: (value: number) => void;
};

export const Range: React.FC<Props> = ({ label, value, onChange }) => {
	const onChangeInput = useCallback(
		inputValue => {
			onChange(inputValue);
		},
		[onChange]
	);

	return (
		<StyledWrapper>
			<StyledLabel>{label}</StyledLabel>
			<StyledSlider>
				{value}%
				<Slider
					min={0}
					max={100}
					step={0.01}
					value={value}
					onChange={onChangeInput}
				/>
			</StyledSlider>
			<Input value={value} onChange={onChangeInput} />
		</StyledWrapper>
	);
};

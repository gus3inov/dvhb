import React, { useState, useCallback } from 'react';
import { Input, Slider } from '@ui/atoms';
import { StyledWrapper, StyledLabel } from './styles';

export type Props = {
	label: string;
	defaultValue: number;
	onChange: (value: string) => void;
};

export const Range: React.FC<Props> = ({ label, defaultValue, onChange }) => {
	const [valueState, setValue] = useState(defaultValue);

	const onChangeInput = useCallback(
		value => {
			setValue(value);
			onChange(value);
		},
		[onChange]
	);

	return (
		<StyledWrapper>
			<StyledLabel>{label}</StyledLabel>
			<Slider
				min={0}
				max={100}
				value={valueState}
				onChange={onChangeInput}
			/>
			<Input value={valueState} onChange={onChangeInput} />
		</StyledWrapper>
	);
};

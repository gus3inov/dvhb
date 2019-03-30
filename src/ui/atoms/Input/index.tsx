import React, { useCallback } from 'react';
import { StyledInput } from './styles';

export type Props = {
	value: number;
	onChange: (value: number) => void;
};

export const Input: React.FC<Props> = ({ value = '', onChange }) => {
	const onChangeInput = useCallback(
		e => {
			const targetValue: number = +e.target.value;
			onChange(targetValue);
		},
		[onChange]
	);

	return <StyledInput value={value} onChange={onChangeInput} />;
};

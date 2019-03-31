import React, { useCallback } from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { StyledInput } from './styles';

export type Props = {
	value: number;
	onChange: (value: number) => void;
};

export const Input: React.FC<Props> = ({ value = '', onChange }) => {
	const onChangeInput = useCallback(
		formatValue => {
			if (formatValue.floatValue !== value) {
				onChange(formatValue.floatValue);
			}
		},
		[onChange]
	);

	return (
		<StyledInput>
			<NumberFormat
				value={value}
				thousandSeparator={true}
				decimalSeparator="."
				isNumericString
				decimalScale={2}
				fixedDecimalScale
				allowNegative={false}
				onValueChange={onChangeInput}
			/>
		</StyledInput>
	);
};

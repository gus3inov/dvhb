import React from 'react';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

export type Props = {
	value?: number;
	step?: number;
	defaultValue?: number;
	min?: number;
	max?: number;
	disabled?: boolean;
	onBeforeChange?: VoidFunction;
	onAfterChange?: VoidFunction;
	onChange?: (value: number) => void;
};

export const Slider: React.FC<Props> = ({
	value,
	step,
	defaultValue,
	min,
	max,
	disabled,
	onBeforeChange,
	onAfterChange,
	onChange,
}) => (
	<RcSlider
		value={value}
		step={step}
		defaultValue={defaultValue}
		min={min}
		max={max}
		disabled={disabled}
		onBeforeChange={onBeforeChange}
		onAfterChange={onAfterChange}
		onChange={onChange}
	/>
);

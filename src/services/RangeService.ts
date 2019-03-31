import { isFloat } from 'utils/float';

interface TRangeMap {
	[key: string]: TRange;
}

export class RangeService {
	static MIN_VALUE = 0;

	static MAX_VALUE = 100;

	static sumPercents(ranges: TRange[]) {
		return ranges.reduce(
			(prev: number, range: TRange) => prev + range.Percent,
			0
		);
	}

	static serialize(ranges: TRange[]): TRangeMap {
		return {
			...ranges.reduce(
				(obj: object, item: TRange) => ({
					...obj,
					[item.Id]: item,
				}),
				{}
			),
		};
	}

	static deserialize(ranges: TRangeMap): TRange[] {
		return Object.values(ranges);
	}

	static findMax(ranges: TRange[]) {
		return ranges.reduce((previousRange: TRange, currentRange: TRange) =>
			previousRange.Percent >= currentRange.Percent
				? previousRange
				: currentRange
		);
	}

	static findMin(ranges: TRange[]) {
		return ranges.reduce((previousRange: TRange, currentRange: TRange) =>
			previousRange.Percent <= currentRange.Percent
				? previousRange
				: currentRange
		);
	}

	static computePercents(
		ranges: TRange[],
		newId: number,
		newPercent: number
	): TRange[] {
		const newRanges = this.serialize(ranges);
		const deserialized = this.deserialize(newRanges);

		newRanges[newId].Percent = newPercent;

		if (deserialized.length === 1) {
			return deserialized;
		}

		const sum = this.sumPercents(deserialized);

		if (sum !== this.MAX_VALUE) {
			const withoutChangedElement = deserialized.filter(
				(value: TRange) => value.Id !== newId
			);

			const range: TRange =
				sum > this.MAX_VALUE
					? this.findMax(withoutChangedElement)
					: this.findMin(withoutChangedElement);

			if (this.MAX_VALUE - sum < this.MIN_VALUE) {
				newRanges[range.Id].Percent = 0;
				console.log('1', newPercent);
				this.computePercents(
					this.deserialize(newRanges),
					newId,
					newPercent
				);
			} else if (this.MAX_VALUE - sum > this.MAX_VALUE) {
				newRanges[range.Id].Percent = this.MAX_VALUE;
				console.log('2', newPercent);
				this.computePercents(
					this.deserialize(newRanges),
					newId,
					newPercent
				);
			} else {
				const newPercentRange = newRanges[range.Id].Percent + this.MAX_VALUE - sum;
				newRanges[range.Id].Percent = isFloat(newPercentRange) ? +newPercentRange.toFixed(2) : newPercentRange;
			}
		}

		return this.deserialize(newRanges);
	}
}

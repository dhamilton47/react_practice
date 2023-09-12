export function round(number, significantDigits) {
	const radix = 10 ** significantDigits;
	return Math.round(number * radix) / radix;
}

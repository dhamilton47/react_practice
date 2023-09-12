export function doMath(operand1, operand2, operator) {
	switch (operator) {
		case '+':
			return +operand1 + +operand2;
		case '-':
			return +operand1 - +operand2;
		case 'x':
			return +operand1 * +operand2;
		case '/':
			if (+operand2 === 0)
				return Infinity;
			return +operand1 / +operand2;
		default:
			return 'Impossible state!';
	}
}

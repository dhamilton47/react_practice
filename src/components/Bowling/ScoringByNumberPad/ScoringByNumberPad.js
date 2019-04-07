import React, {Component} from 'react';

export class ScoringByNumberPad extends Component {
	render() {
		return <div className="scoring-container">
			Score by Number Pad
			<table>
				<tbody>
				<tr>
					<td>
						<button
							type="button"
							className="btn-sqr">
							7
						</button>

						<button
							type="button"
							className="btn-sqr">
							8
						</button>

						<button
							type="button"
							className="btn-sqr">
							9
						</button>
					</td>
				</tr>
				<tr>
					<td>
						<button
							type="button"
							className="btn-sqr">
							4
						</button>

						<button
							type="button"
							className="btn-sqr">
							5
						</button>

						<button
							type="button"
							className="btn-sqr">
							6
						</button>
					</td>
				</tr>
				<tr>
					<td>
						<button
							type="button"
							className="btn-sqr">
							1
						</button>

						<button
							type="button"
							className="btn-sqr">
							2
						</button>

						<button
							type="button"
							className="btn-sqr">
							3
						</button>
					</td>
				</tr>
				<tr>
					<td>
						<button
							type="button"
							className="btn-sqr">
							0
						</button>

						<button
							type="button"
							className="btn-sqr">
							/
						</button>

						<button
							type="button"
							className="btn-sqr">
							X
						</button>
					</td>
				</tr>
				</tbody>

			</table>
			<input/>
		</div>;
	}
}
import React, {Component} from 'react';
import './ScoringByPinFall.css'

export class ScoringByPinFall extends Component {
	render() {
		// Display pin diagram
		return (
			<div className="scoring-container">
				Score by Pin Fall
				<table>
					<tbody>
					<tr>
						<td colSpan='2'>
							<button
								type="button"
								className="btn-rnd"
								>
								7
							</button>
							<button
								type="button"
								className="btn-rnd"
								>
								8
							</button>
							<button
								type="button"
								className="btn-rnd"
								>
								9
							</button>
							<button
								type="button"
								className="btn-rnd"
								>
								10
							</button>
						</td>
					</tr>
					<tr>
						<td colSpan='2'>
							<button
								type="button"
								className="btn-rnd"
								>
								4
							</button>
							<button
								type="button"
								className="btn-rnd"
								>
								5
							</button>
							<button
								type="button"
								className="btn-rnd"
								>
								6
							</button>
						</td>
					</tr>
					<tr>
						<td colSpan='2'>
							<button
								type="button"
								className="btn-rnd"
								>
								2
							</button>
							<button
								type="button"
								className="btn-rnd"
								>
								3
							</button>
						</td>
					</tr>
					<tr>
						<td colSpan='2'>
							<button
								type="button"
								className="btn-rnd"
								>
								1
							</button>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
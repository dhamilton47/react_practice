import React from 'react';
import './GameScoringContainer.css';
import { ScoringByPinFall } from '../ScoringByPinFall/ScoringByPinFall';
import { ScoringByNumberPad } from '../ScoringByNumberPad/ScoringByNumberPad';

export const GameScoringContainer = () => {
	return (
		<div className="scoring">
			Game Scoring Center
			<div className="scoring-container">
				<ScoringByPinFall />
				<ScoringByNumberPad />
			</div>
		</div>
	);
};

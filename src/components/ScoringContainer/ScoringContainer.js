import React from 'react';
import './ScoringContainer.css';
import {ScoringPinFall} from '../ScoringPinFall/ScoringPinFall';
import {ScoringNumberPad} from '../ScoringNumberPad/ScoringNumberPad';

export const ScoringContainer = () => {
	return (
		<div className="scoring-container">
			<ScoringPinFall />
			<ScoringNumberPad />
		</div>
	);
}
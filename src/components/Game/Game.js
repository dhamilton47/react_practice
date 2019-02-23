import React, {Component} from 'react';
import './Game.css';
import {Frames} from "../Frames/Frames";
import {Bowler} from "../Bowler/Bowler";

export class Game extends Component {
	render() {
		return (
			<div className="game-container">
				<Bowler/>
				<Frames frame={1}/>
				<Frames frame={2}/>
				<Frames frame={3}/>
				<Frames frame={4}/>
				<Frames frame={5}/>
				<Frames frame={6}/>
				<Frames frame={7}/>
				<Frames frame={8}/>
				<Frames frame={9}/>
				<Frames frame={10}/>
				<Frames frame={11}/>
			</div>
		);

/*		return (
			<table>
				<tbody>
				<tr>
					<td><Frames/></td>
					<td><Frames/></td>
					<td><Frames/></td>
					<td><Frames/></td>
					<td><Frames/></td>
					<td><Frames/></td>
					<td><Frames/></td>
					<td><Frames/></td>
					<td><Frames/></td>
					<td><Frames/></td>
				</tr>
				</tbody>
			</table>
		);
		*/
	}
}
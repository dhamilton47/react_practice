import React, { Component } from 'react';
import './Forecast.css'
import { Day } from './Day';

const WeatherData = [
	{
		index: 0,
		day: 'Sun',
		condition: 'Windy',
		high: 80,
		low: 60
	},
	{
		index: 1,
		day: 'Mon',
		condition: 'Sunny',
		high: 80,
		low: 60
	},
	{
		index: 2,
		day: 'Tue',
		condition: 'Sunny',
		high: 80,
		low: 60
	},
	{
		index: 3,
		day: 'Wed',
		condition: 'Sunny',
		high: 80,
		low: 60
	},
	{
		index: 4,
		day: 'Thu',
		condition: 'Sunny',
		high: 80,
		low: 60
	}
];

class Forecast extends Component {
	render() {
		return (
			<div className="card-container">
				<Day data={WeatherData[0]}/>
				<Day data={WeatherData[1]}/>
				<Day data={WeatherData[2]}/>
				<Day data={WeatherData[3]}/>
				<Day data={WeatherData[4]}/>
			</div>
		);
	}
}

export default Forecast;
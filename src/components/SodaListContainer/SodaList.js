import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SodaList extends Component {
	render() {
		return this.props.items ?
			(
				<ul>
					{this.props.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			)
			: null;
	}
}

SodaList.propTypes = {
	items: PropTypes.array.isRequired
};

export default SodaList;
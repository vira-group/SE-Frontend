import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class Countries extends Component {
	constructor(props) {
		super(props);
		this.state = { country: '', region: '' };
	}

	selectCountry(val) {
		this.setState({ country: val });
	}

	selectRegion(val) {
		this.setState({ region: val });
	}

	render() {
		const { country, region } = this.state;
		return (
			<div>
				<CountryDropdown
					className={'form-control'}
					value={country}
					onChange={(val) => this.selectCountry(val)}
				/>

				<br />

				<RegionDropdown
					className={'form-control'}
					country={country}
					value={region}
					onChange={(val) => this.selectRegion(val)}
				/>
			</div>
		);
	}
}

export default Countries;

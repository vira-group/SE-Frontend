// import React, { Component } from 'react';
// import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

// class Countries extends Component {
// 		constructor(props) {
// 		super(props);
// 		this.state = { country: '', region: '' };

// 		// localStorage.setItem('Country', JSON.stringify(this.state.country));


// 	}

// 	selectCountry(val) {
// 		this.setState({ country: val });
// 		// localStorage.setItem('Country', JSON.stringify(this.state.country));

// 	}

// 	selectRegion(val) {
// 		this.setState({ region: val });
// 		localStorage.setItem('City', JSON.stringify(this.state.region));

// 	}

// 	render() {
// 		const { country, region } = this.state;
// 		return (
// 			<div>
// 				<CountryDropdown
// 					className={'form-control'}
// 					value={country}
// 					onChange={(val) => this.selectCountry(val)}
// 				/>

// 				<br />

// 				<RegionDropdown
// 					className={'form-control'}
// 					country={country}
// 					value={region}
// 					onChange={(val) => this.selectRegion(val)}
// 				/>
// 			</div>
// 		);
// 	}
// }

// export default Countries;

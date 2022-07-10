
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


import { createTheme, ThemeProvider } from '@mui/material/styles';

import React, { Component } from 'react';
import './Countries.css';
const textfieldTheme = createTheme({
	palette: {
		primary: {
			main: '#cd9a2b',
			dark: '#cd9a2b',
			light: '#d7ae55',
			contrastText: '#fff'
		}
	}
});

class Countries extends Component {
	constructor(props) {
		super(props);
		this.state = { country: '', region: '' };

		// localStorage.setItem('Country', JSON.stringify(this.state.country));
	}

	selectCountry(val) {
		this.setState({ country: val });
		// localStorage.setItem('Country', JSON.stringify(this.state.country));
	}

	selectRegion(val) {
		this.setState({ region: val });
		// localStorage.setItem('City', JSON.stringify(this.state.region));
	}

	render() {
		const { country, region } = this.state;
		return (
			<div className="div">
			<div className="col-lg-12">
			
					<CountryDropdown
					fullwidth
						style={{ color: '#555', border: '1px solid #555;'}}
						className={' form-control    '}
						// className={'col-lg-6 input'}
						value={country}
						onChange={(val) => this.selectCountry(val)}
					/>
				</div><br></br>
				<div className="col-lg-12">
		{' '}
					<RegionDropdown
						style={{ color: '#555', border: '1px solid #555;'}}

						className={' form-control '}
						country={country}
						value={region}
						onChange={(val) => this.selectRegion(val)}
					/>
				</div>
			</div>

);
	}
}

export default Countries;

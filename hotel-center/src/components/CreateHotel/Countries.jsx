// import { Select, Page, setOptions, getJson } from '@mobiscroll/react';

// setOptions({
// 	theme: 'ios',
// 	themeVariant: 'light'
// });

// function Countries() {
// 	const [ myData, setMyData ] = React.useState([]);

// 	const inputProps = {
// 		inputStyle: 'box',
// 		labelStyle: 'stacked',
// 		placeholder: 'Please select...'
// 	};

// 	React.useEffect(() => {
// 		getJson('https://trial.mobiscroll.com/content/countries.json', (resp) => {
// 			const countries= [];
// 			for (let i = 0; i < resp.length; ++i) {
// 				const country = resp[i];
// 				countries.push({ text: country.text, value: country.value });
// 			}
// 			setMyData(countries);
// 		});
// 	}, []);

// 	const renderCustomItem = (item) => {
// 		return (
// 			<div className="md-country-picker-item">
// 				<img
// 					className="md-country-picker-flag"
// 					src={'https://img.mobiscroll.com/demos/flags/' + item.data.value + '.png'}
// 					alt="Flag"
// 				/>
// 				{item.display}
// 			</div>
// 		);
// 	};

// 	return (
// 		<Page>
// 			<Select
// 				data={myData}
// 				label="Countries"
// 				inputProps={inputProps}
// 				display="anchored"
// 				itemHeight={40}
// 				renderItem={renderCustomItem}
// 			/>
// 		</Page>
// 	);
// }

import React, { Component } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class Countries extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}

export default Countries ;

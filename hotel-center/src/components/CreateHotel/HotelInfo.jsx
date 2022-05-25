import React, { Component } from 'react';
// import Image_upload from "./Image_upload"

import { TextField, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Image_upload from "./Image_upload"
import Countries from "./Countries"
import Facilities from "./Facilities" ;
const datePickerTheme = createTheme({
	palette: {
		primary: {
			main: '#cd9a2b',
			dark: '#cd9a2b',
			light: '#d7ae55',
			contrastText: '#fff'
		}
	}
});

const formvalid2 = ({ error, ...rest }) => {
	let isValid = false;

	Object.values(error).forEach((val) => {
		if (val.length > 0) {
			isValid = false;
		} else {
			isValid = true;
		}
	});

	Object.values(rest).forEach((val) => {
		if (val === null) {
			isValid = false;
		} else {
			isValid = true;
		}
	});

	return isValid;
};

class HotelInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			birthdate: null,
			message: '',
			fields: {},
			get_price: 1,
			error: {
				Name: {
					u1: '',
					u2: ''
				},

				Name: {
					u1: '',
					u2: ''
				},

				Name: {
					u1: '',
					u2: ''
				}
			}
		};

		this.formValChange = this.formValChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	setBirthdate = (e) => {};
	formValChange = (e) => {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		const { name, value } = e.target;
		let error = { ...this.state.error };

		switch (name) {
			case 'Name':
				error.Name.u1 =
					(typeof value !== 'undefined' && value.length < 3) ||
					value.length > 15 ||
					!value.match(/^[A-Z a-z]+$/)
						? '*Please enter a valid  name'
						: '';

				error.Name.u2 = !value ? '*This field must not be empty!' : '';
				break;

			case 'Name':
				error.Name.u1 =
					(typeof value !== 'undefined' && value.length < 3) ||
					value.length > 15 ||
					!value.match(/^[A-Z a-z]+$/)
						? '*Please enter a valid  name'
						: '';

				error.Name.u2 = !value ? '*This field must not be empty!' : '';
				break;

			case 'Name':
				error.Name.u1 =
					(typeof value !== 'undefined' && value.length < 3) ||
					value.length > 15 ||
					!value.match(/^[A-Z a-z]+$/)
						? '*Please enter a valid  name'
						: '';

				error.Name.u2 = !value ? '*This field must not be empty!' : '';
				break;

			default:
				break;
		}

		this.setState({
			fields,
			error,
			[name]: value
		});
	};

	onSubmit(e) {
		e.preventDefault();

		if (formvalid2(this.state)) {
			let fields = {};
			fields['Name'] = '';
			fields['lastname'] = '';
			fields['phone'] = '';
			fields['nationalcode'] = '';
			this.setState({ fields: fields });
		}
	}
	render() {
		return (
			<div>
				<br />
				<br />
				<br />
				<br />
				<form noValidate onSubmit={this.onSubmit} className="row g-3 needs-validation mx-3">
					<div className="row">
						<div className="col-md-8">
							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">Name :</label>
								</div>
								<div className="col-md-8">
									{' '}
									<input
										required
										fullWidth
										id="Name"
										label="Name"
										name="Name"
										placeholder="Name*"
										autoComplete="text"
										aria-describedby="inputGroup-sizing-sm"
										className={
											this.state.error.Name.u1.length > 0 ||
											this.state.error.Name.u2.length > 0 ? (
												'is-invalid form-control lg'
											) : (
												'form-control'
											)
										}
										value={this.state['Name']}
										onChange={this.formValChange}
									/>
									<div className="mt-3 ">
										{this.state.error.Name.u1.length > 0 && (
											<p className="err">
												{this.state.error.Name.u1}
												<br />
											</p>
										)}
										{this.state.error.Name.u2.length > 0 && (
											<p className="err">
												{this.state.error.Name.u2}
												<br />
											</p>
										)}
									</div>
								</div>
							</div>

							<hr class="dashed" />

							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">Country :</label>
								</div>
								<div className="col-md-8">dsf</div>
							</div>

							<hr class="dashed" />

							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">State :</label>
								</div>
								<div className="col-md-8">
									{' '}
									<input
										required
										fullWidth
										id="Name"
										label="Name"
										name="Name"
										placeholder="Name*"
										autoComplete="text"
										aria-describedby="inputGroup-sizing-sm"
										className={
											this.state.error.Name.u1.length > 0 ||
											this.state.error.Name.u2.length > 0 ? (
												'is-invalid form-control lg'
											) : (
												'form-control'
											)
										}
										value={this.state['Name']}
										onChange={this.formValChange}
									/>
									<div className="mt-3 ">
										{this.state.error.Name.u1.length > 0 && (
											<p className="err">
												{this.state.error.Name.u1}
												<br />
											</p>
										)}
										{this.state.error.Name.u2.length > 0 && (
											<p className="err">
												{this.state.error.Name.u2}
												<br />
											</p>
										)}
									</div>
								</div>
							</div>

							<hr class="dashed" />

							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">State :</label>
								</div>
								<div className="col-md-8">
									<ThemeProvider theme={datePickerTheme}>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="Birthdate"
												value={this.state.birthdate}
												onChange={(newValue) => {
													this.setBirthdate(newValue);
												}}
												renderInput={(params) => (
													<TextField
														{...params}
														required
														fullWidth
														size="small"
														variant="outlined"
													/>
												)}
											/>
										</LocalizationProvider>
									</ThemeProvider>
								</div>
							</div>

							<hr class="dashed" />

							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">State :</label>
								</div>
								<div className="col-md-8">
									<ThemeProvider theme={datePickerTheme}>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="Birthdate"
												value={this.state.birthdate}
												onChange={(newValue) => {
													this.setBirthdate(newValue);
												}}
												renderInput={(params) => (
													<TextField
														{...params}
														required
														fullWidth
														size="small"
														variant="outlined"
													/>
												)}
											/>
										</LocalizationProvider>
									</ThemeProvider>
								</div>
							</div>

							<hr class="dashed" />
							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">State :</label>
								</div>
								<div className="col-md-8">
									<ThemeProvider theme={datePickerTheme}>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="Birthdate"
												value={this.state.birthdate}
												onChange={(newValue) => {
													this.setBirthdate(newValue);
												}}
												renderInput={(params) => (
													<TextField
														{...params}
														required
														fullWidth
														size="small"
														variant="outlined"
													/>
												)}
											/>
										</LocalizationProvider>
									</ThemeProvider>
								</div>
							</div>

							<hr class="dashed" />

							
							<hr class="dashed" />

							
							<hr class="dashed" />
<Facilities></Facilities>
			
							<hr class="dashed" />

	
	<Countries></Countries>
	
	
	
	
	
							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">Address :</label>
								</div>
								<div className="col-md-8">
									{' '}
									<input
										required
										fullWidth
										id="Name"
										label="Name"
										name="Name"
										placeholder="Name*"
										autoComplete="text"
										aria-describedby="inputGroup-sizing-sm"
										className={
											this.state.error.Name.u1.length > 0 ||
											this.state.error.Name.u2.length > 0 ? (
												'is-invalid form-control lg'
											) : (
												'form-control'
											)
										}
										value={this.state['Name']}
										onChange={this.formValChange}
									/>
									<div className="mt-3 ">
										{this.state.error.Name.u1.length > 0 && (
											<p className="err">
												{this.state.error.Name.u1}
												<br />
											</p>
										)}
										{this.state.error.Name.u2.length > 0 && (
											<p className="err">
												{this.state.error.Name.u2}
												<br />
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div class="p-3  rounded ms-3" style={{ border: '.1px solid #cd9a2d' }}>
								<div className="row m-2 mb-3" style={{ color: '#cd9a2d' }}>
									Description :
								</div>
								<div className="row m-2">
									Font Awesome 6 includes five icons styles: solid, regular, light, duotone, and the
									new THIN style — not to mention all of our brand icons. And coming later in 2022 is
									the entirely new SHARP family of styles.
								</div>
							</div>
						</div>
					</div>
					{/* <Image_upload></Image_upload> */}

					<div className="mb-3 col-9">
						<div className="row">
							<div className="col-lg-3 ms-2">
								<label for="date" className="col-1 col-form-label">
									Birthday
								</label>
							</div>
							<div className="col-lg-8 birthday-inp" />
						</div>
					</div>

					<div>
						<select>
							<option value="  " selected>
								Select a country
							</option>
							<option value="--">Not Specified</option>
							<option value="AF">Afghanistan</option>
							<option value="AL">Albania</option>
							<option value="DZ">Algeria</option>
							<option value="AS">American Samoa</option>
							<option value="AD">Andorra</option>
							<option value="AO">Angola</option>
							<option value="AI">Anguilla</option>
							<option value="AQ">Antarctica</option>
							<option value="AG">Antigua and Barbuda</option>
							<option value="AR">Argentina</option>
							<option value="AM">Armenia</option>
							<option value="AW">Aruba</option>
							<option value="AU">Australia</option>
							<option value="AT">Austria</option>
							<option value="AZ">Azerbaijan</option>
							<option value="BS">Bahamas</option>
							<option value="BH">Bahrain</option>
							<option value="BD">Bangladesh</option>
							<option value="BB">Barbados</option>
							<option value="BY">Belarus</option>
							<option value="BE">Belgium</option>
							<option value="BZ">Belize</option>
							<option value="BJ">Benin</option>
							<option value="BM">Bermuda</option>
							<option value="BT">Bhutan</option>
							<option value="BO">Bolivia</option>
							<option value="BA">Bosnia and Herzegowina</option>
							<option value="BW">Botswana</option>
							<option value="BV">Bouvet Island</option>
							<option value="BR">Brazil</option>
							<option value="IO">British Indian Ocean Territory</option>
							<option value="BN">Brunei Darussalam</option>
							<option value="BG">Bulgaria</option>
							<option value="BF">Burkina Faso</option>
							<option value="BI">Burundi</option>
							<option value="KH">Cambodia</option>
							<option value="CM">Cameroon</option>
							<option value="CA">Canada</option>
							<option value="CV">Cape Verde</option>
							<option value="KY">Cayman Islands</option>
							<option value="CF">Central African Republic</option>
							<option value="TD">Chad</option>
							<option value="CL">Chile</option>
							<option value="CN">China</option>
							<option value="CX">Christmas Island</option>
							<option value="CC">Cocos (Keeling) Islands</option>
							<option value="CO">Colombia</option>
							<option value="KM">Comoros</option>
							<option value="CG">Congo</option>
							<option value="CD">Congo, the Democratic Republic of the</option>
							<option value="CK">Cook Islands</option>
							<option value="CR">Costa Rica</option>
							<option value="CI">Cote d'Ivoire</option>
							<option value="HR">Croatia (Hrvatska)</option>
							<option value="CU">Cuba</option>
							<option value="CY">Cyprus</option>
							<option value="CZ">Czech Republic</option>
							<option value="DK">Denmark</option>
							<option value="DJ">Djibouti</option>
							<option value="DM">Dominica</option>
							<option value="DO">Dominican Republic</option>
							<option value="TP">East Timor</option>
							<option value="EC">Ecuador</option>
							<option value="EG">Egypt</option>
							<option value="SV">El Salvador</option>
							<option value="GQ">Equatorial Guinea</option>
							<option value="ER">Eritrea</option>
							<option value="EE">Estonia</option>
							<option value="ET">Ethiopia</option>
							<option value="FK">Falkland Islands (Malvinas)</option>
							<option value="FO">Faroe Islands</option>
							<option value="FJ">Fiji</option>
							<option value="FI">Finland</option>
							<option value="FR">France</option>
							<option value="FX">France, Metropolitan</option>
							<option value="GF">French Guiana</option>
							<option value="PF">French Polynesia</option>
							<option value="TF">French Southern Territories</option>
							<option value="GA">Gabon</option>
							<option value="GM">Gambia</option>
							<option value="GE">Georgia</option>
							<option value="DE">Germany</option>
							<option value="GH">Ghana</option>
							<option value="GI">Gibraltar</option>
							<option value="GR">Greece</option>
							<option value="GL">Greenland</option>
							<option value="GD">Grenada</option>
							<option value="GP">Guadeloupe</option>
							<option value="GU">Guam</option>
							<option value="GT">Guatemala</option>
							<option value="GN">Guinea</option>
							<option value="GW">Guinea-Bissau</option>
							<option value="GY">Guyana</option>
							<option value="HT">Haiti</option>
							<option value="HM">Heard and Mc Donald Islands</option>
							<option value="VA">Holy See (Vatican City State)</option>
							<option value="HN">Honduras</option>
							<option value="HK">Hong Kong</option>
							<option value="HU">Hungary</option>
							<option value="IS">Iceland</option>
							<option value="IN">India</option>
							<option value="ID">Indonesia</option>
							<option value="IR">Iran (Islamic Republic of)</option>
							<option value="IQ">Iraq</option>
							<option value="IE">Ireland</option>
							<option value="IL">Israel</option>
							<option value="IT">Italy</option>
							<option value="JM">Jamaica</option>
							<option value="JP">Japan</option>
							<option value="JO">Jordan</option>
							<option value="KZ">Kazakhstan</option>
							<option value="KE">Kenya</option>
							<option value="KI">Kiribati</option>
							<option value="KP">Korea, Democratic People's Republic of</option>
							<option value="KR">Korea, Republic of</option>
							<option value="KW">Kuwait</option>
							<option value="KG">Kyrgyzstan</option>
							<option value="LA">Lao People's Democratic Republic</option>
							<option value="LV">Latvia</option>
							<option value="LB">Lebanon</option>
							<option value="LS">Lesotho</option>
							<option value="LR">Liberia</option>
							<option value="LY">Libyan Arab Jamahiriya</option>
							<option value="LI">Liechtenstein</option>
							<option value="LT">Lithuania</option>
							<option value="LU">Luxembourg</option>
							<option value="MO">Macau</option>
							<option value="MK">Macedonia, The Former Yugoslav Republic of</option>
							<option value="MG">Madagascar</option>
							<option value="MW">Malawi</option>
							<option value="MY">Malaysia</option>
							<option value="MV">Maldives</option>
							<option value="ML">Mali</option>
							<option value="MT">Malta</option>
							<option value="MH">Marshall Islands</option>
							<option value="MQ">Martinique</option>
							<option value="MR">Mauritania</option>
							<option value="MU">Mauritius</option>
							<option value="YT">Mayotte</option>
							<option value="MX">Mexico</option>
							<option value="FM">Micronesia, Federated States of</option>
							<option value="MD">Moldova, Republic of</option>
							<option value="MC">Monaco</option>
							<option value="MN">Mongolia</option>
							<option value="MS">Montserrat</option>
							<option value="MA">Morocco</option>
							<option value="MZ">Mozambique</option>
							<option value="MM">Myanmar</option>
							<option value="NA">Namibia</option>
							<option value="NR">Nauru</option>
							<option value="NP">Nepal</option>
							<option value="NL">Netherlands</option>
							<option value="AN">Netherlands Antilles</option>
							<option value="NC">New Caledonia</option>
							<option value="NZ">New Zealand</option>
							<option value="NI">Nicaragua</option>
							<option value="NE">Niger</option>
							<option value="NG">Nigeria</option>
							<option value="NU">Niue</option>
							<option value="NF">Norfolk Island</option>
							<option value="MP">Northern Mariana Islands</option>
							<option value="NO">Norway</option>
							<option value="OM">Oman</option>
							<option value="PK">Pakistan</option>
							<option value="PW">Palau</option>
							<option value="PA">Panama</option>
							<option value="PG">Papua New Guinea</option>
							<option value="PY">Paraguay</option>
							<option value="PE">Peru</option>
							<option value="PH">Philippines</option>
							<option value="PN">Pitcairn</option>
							<option value="PL">Poland</option>
							<option value="PT">Portugal</option>
							<option value="PR">Puerto Rico</option>
							<option value="QA">Qatar</option>
							<option value="RE">Reunion</option>
							<option value="RO">Romania</option>
							<option value="RU">Russian Federation</option>
							<option value="RW">Rwanda</option>
							<option value="KN">Saint Kitts and Nevis</option>
							<option value="LC">Saint LUCIA</option>
							<option value="VC">Saint Vincent and the Grenadines</option>
							<option value="WS">Samoa</option>
							<option value="SM">San Marino</option>
							<option value="ST">Sao Tome and Principe</option>
							<option value="SA">Saudi Arabia</option>
							<option value="SN">Senegal</option>
							<option value="SC">Seychelles</option>
							<option value="SL">Sierra Leone</option>
							<option value="SG">Singapore</option>
							<option value="SK">Slovakia (Slovak Republic)</option>
							<option value="SI">Slovenia</option>
							<option value="SB">Solomon Islands</option>
							<option value="SO">Somalia</option>
							<option value="ZA">South Africa</option>
							<option value="GS">South Georgia and the South Sandwich Islands</option>
							<option value="ES">Spain</option>
							<option value="LK">Sri Lanka</option>
							<option value="SH">St. Helena</option>
							<option value="PM">St. Pierre and Miquelon</option>
							<option value="SD">Sudan</option>
							<option value="SR">Suriname</option>
							<option value="SJ">Svalbard and Jan Mayen Islands</option>
							<option value="SZ">Swaziland</option>
							<option value="SE">Sweden</option>
							<option value="CH">Switzerland</option>
							<option value="SY">Syrian Arab Republic</option>
							<option value="TW">Taiwan, Province of China</option>
							<option value="TJ">Tajikistan</option>
							<option value="TZ">Tanzania, United Republic of</option>
							<option value="TH">Thailand</option>
							<option value="TG">Togo</option>
							<option value="TK">Tokelau</option>
							<option value="TO">Tonga</option>
							<option value="TT">Trinidad and Tobago</option>
							<option value="TN">Tunisia</option>
							<option value="TR">Turkey</option>
							<option value="TM">Turkmenistan</option>
							<option value="TC">Turks and Caicos Islands</option>
							<option value="TV">Tuvalu</option>
							<option value="UG">Uganda</option>
							<option value="UA">Ukraine</option>
							<option value="AE">United Arab Emirates</option>
							<option value="GB">United Kingdom</option>
							<option value="US">United States</option>
							<option value="UM">United States Minor Outlying Islands</option>
							<option value="UY">Uruguay</option>
							<option value="UZ">Uzbekistan</option>
							<option value="VU">Vanuatu</option>
							<option value="VE">Venezuela</option>
							<option value="VN">Viet Nam</option>
							<option value="VG">Virgin Islands (British)</option>
							<option value="VI">Virgin Islands (U.S.)</option>
							<option value="WF">Wallis and Futuna Islands</option>
							<option value="EH">Western Sahara</option>
							<option value="YE">Yemen</option>
							<option value="YU">Yugoslavia</option>
							<option value="ZM">Zambia</option>
							<option value="ZW">Zimbabwe</option>
						</select>
						{/* 
						<Stepper label="Adults" description="From 14 years" min={1} defaultValue={1} max={15} />
<Stepper label="Children" description="2-14 years" inputPosition="start" max={15} />
<Stepper label="Infant" description="0-2 years" inputPosition="start" max={10} /> */}
					</div>
				</form>
			</div>
		);
	}
}

export default HotelInfo;

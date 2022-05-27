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
							
					<div className="col-md-1 ">
						</div>
			
						<div className="col-md-7">
						<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">check in range :</label>
								</div>
								<div className="col-md-8">
									<ThemeProvider theme={datePickerTheme}>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="Choose a date"
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
									<label className="ms-2 mt-1 form-label">check out range :</label>
								</div>
								<div className="col-md-8">
									<ThemeProvider theme={datePickerTheme}>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="Choose a date"
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
									<label className="ms-2 mt-1 form-label">Description :</label>
								</div>
								<div className="col-md-8">
									{' '}
									<input
										required
										fullWidth
										id="Name"
										label="Name"
										name="Name"
										placeholder="description*"
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


							{/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl> */}
	
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

				</form>
			</div>
		);
	}
}

export default HotelInfo;

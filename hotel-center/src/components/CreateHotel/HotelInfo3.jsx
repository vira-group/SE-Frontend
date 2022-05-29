import React, { Component } from 'react';
// import Image_upload from "./Image_upload"

import { TextField, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Image_upload from './Image_upload';
import Countries from './Countries';
import Facilities from './Facilities';
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
						<div className="col-sm-1 " />

						<div className="col-12  col-xl-4  d-xl-none mb-5">
							<div class="p-3  rounded ms-3" style={{ border: '.1px solid #cd9a2d' }}>
								<div className="row m-2 mb-3" style={{ color: '#cd9a2d' }}>
									Description :
								</div>
								<div className="row m-2">
									Accommodation pictures play an important role in better viewing and booking guests,
									so we suggest you upload the photos according to the instructions below. Keep the
									residence clean and tidy when shooting; As delivered to the guest. Preferably hold
									the camera horizontally when shooting. The number of acceptable images for the site
									is at least 5 images. Accommodation images include various spaces including common
									area, bedroom, yard, kitchen, landscape, bathroom and special facilities. Choose
									your best image as the index image.{' '}
								</div>
							</div>
						</div>

						<div className="col-12 col-xl-7" />

						<div className="col-12 col-xl-4 d-none d-xl-block">
							<div class="p-3  rounded ms-3" style={{ border: '.1px solid #cd9a2d' }}>
								<div className="row m-2 mb-3" style={{ color: '#cd9a2d' }}>
									Description :
								</div>
								<div className="row m-2">
									Accommodation pictures play an important role in better viewing and booking guests,
									so we suggest you upload the photos according to the instructions below. Keep the
									residence clean and tidy when shooting; As delivered to the guest. Preferably hold
									the camera horizontally when shooting. The number of acceptable images for the site
									is at least 5 images. Accommodation images include various spaces including common
									area, bedroom, yard, kitchen, landscape, bathroom and special facilities. Choose
									your best image as the index image.
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

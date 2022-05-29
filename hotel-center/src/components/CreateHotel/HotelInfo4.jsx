import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Facilities from './Facilities';
import { create_hotel } from '../../Utils/connection';

// const formvalid2 = ({ error, ...rest }) => {
// 	let isValid = false;

// 	Object.values(error).forEach((val) => {
// 		if (val.length > 0) {
// 			isValid = false;
// 		} else {
// 			isValid = true;
// 		}
// 	});

// 	Object.values(rest).forEach((val) => {
// 		if (val === null) {
// 			isValid = false;
// 		} else {
// 			isValid = true;
// 		}
// 	});

// 	return isValid;
// };

class HotelInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// name   :        'name'          ,
			// city :          'city'          ,
			// state :         'state'         ,
			// address  :      'address'       ,
			// description :   'description'   ,
			// phone_numbers : 'phone_numbers' ,
			// facilities:     'facilities'    ,
		};

		// this.formValChange = this.formValChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		// e.preventDefault();
		// if (formvalid2(this.state)) {
		// 	let fields = {};
		// 	fields['name'          ] = '';
		// 	fields['city'          ] = '';
		// 	fields['state'         ] = '';
		// 	fields['address'       ] = '';
		// 	fields['description'   ] = '';
		// 	fields['phone_numbers' ] = '';
		// 	fields['facilities'    ] = '';
		// 	this.setState({ fields: fields });
		// console.log(
		// 	create_hotel(
		// 		JSON.parse(localStorage.getItem('name'          )) ,
		// 		JSON.parse(localStorage.getItem('city'          )) ,
		// 		JSON.parse(localStorage.getItem('state'         )) ,
		// 		JSON.parse(localStorage.getItem('address'       )) ,
		// 		JSON.parse(localStorage.getItem('description'   )) ,
		// 		JSON.parse(localStorage.getItem('phone_numbers' )) ,
		// 		JSON.parse(localStorage.getItem('facilities'    ))
		// 	)
		// );
	}

	// formValChange = (e) => {
	// 	let fields = this.state.fields;
	// 	fields[e.target.name] = e.target.value;
	// 	const { name, value } = e.target;
	// 	let error = { ...this.state.error };

	// 	this.setState({
	// 		fields,
	// 		error,
	// 		[name]: value
	// 	});
	// };

	render() {
		return (
			<div>
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
								</div>
							</div>
						</div>

						{/* <div className="col-1 d-sm-none " ></div> */}
						<div className="col-12 col-xl-7">
							{/* <div className="col-md-5 "> */}

							<Facilities />
						</div>

						<div className="col-12 col-xl-4 d-none d-xl-block">
							<div class="p-3  rounded ms-3" style={{ border: '.1px solid #cd9a2d' }}>
								<div className="row m-2 mb-3" style={{ color: '#cd9a2d' }}>
									Description :
								</div>
								<div className="row m-2">
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

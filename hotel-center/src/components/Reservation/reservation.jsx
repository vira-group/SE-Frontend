import React, { Component } from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Carousel from './carousel';
import { one_room_reserve, room_image } from '../../Utils/connection';
import references from '../../assets/References.json';
import { cookies, makeURL } from '../../Utils/common';
import axios from 'axios';
// import Popup from './Popup.jsx';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './reserve.css';
import { Box, CircularProgress, Container, Autocomplete } from '@mui/material';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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
const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class Reservation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			err: '',

			message: '',
			open: '',
			loading: false,

			start_day: '2022-05-18',
			end_day: '2022-05-23',
			price_per_day: '1',
			images: [],
			name: '',
			city: '',
			num_passenger: '10',
			get_price: 1,

			ischeck1: false,
			ischeck2: false,
			room: 1,
			emailtxt: '',
			fields: {},
			error: {
				firstname: {
					u1: '',
					u2: ''
				},
				lastname: {
					u1: '',
					u2: ''
				},
				phone: {
					p1: '',
					p2: '',
					p3: ''
				},
				nationalcode: {
					p1: '',
					p2: ''
				}
			}
		};

		this.formValChange = this.formValChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	calculatePrice() {
		let s = this.state.start_day.split('-');
		let e = this.state.end_day.split('-');
		let payment = (parseInt(e[2]) - parseInt(s[2]) + 1) * parseInt(this.state.price_per_day);
		return payment;
	}

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		this.setState({ open: false });
	};

	handlecheck1() {
		this.setState({ ischeck1: true });
		console.log('check1');
	}

	handlecheck2() {
		this.setState({ ischeck2: true });
		console.log('check2');
	}
	onSubmit(e) {
		e.preventDefault();

		if (formvalid2(this.state)) {
			let fields = {};
			fields['firstname'] = '';
			fields['lastname'] = '';
			fields['phone'] = '';
			fields['nationalcode'] = '';
			this.setState({ fields: fields });
			this.setState({ open: true });
			this.setState({ message: 'Please fill in the blanks.' });

			console.log(cookies.get('Authorization'));
			axios
				.post(
					makeURL(references.url_reserveroom),
					{
						// start_day: JSON.parse(localStorage.getItem('i1')).split('T')[0],

						// end_day: JSON.parse(localStorage.getItem('i2')).split('T')[0],

						// firstname: this.state.fields['firstname'],

						// lastname: this.state.fields['lastname'],

						// room: this.state.room,

						// price_per_day: this.state.price_per_day,

						// national_code: this.state.fields['nationalcode'],

						// phone_number: this.state.fields['phone']

						start_day: '2022-06-18',

						end_day: '2022-06-20',

						firstname: this.state.fields['firstname'],

						lastname: this.state.fields['lastname'],

						room: this.state.room,

						price_per_day: 1,

						national_code: this.state.fields['nationalcode'],

						phone_number: this.state.fields['phone']
					},
					{
						headers: {
							Authorization: cookies.get('Authorization')
						}
					}
				)
				.then((response) => {
					console.log(response);
					console.log(response.data);

					this.setState({ message: 'Your room is reserved successfully' });
					// window.alert('everything right');
				})
				.catch((error) => {
					if (error.response.status == 400) {
						this.setState({ message: 'Please enter valid data.' });

						// window.alert('Please enter valid data.');
					}
					if (error.response.status == 406) {
						this.setState({ message: 'Your wallet balance is not enough.' });

						// window.alert('Your wallet balance is not enough.');
					}
					if (error.response.status == 403) {
						this.setState({ message: 'This room is reserved before.' });

						// window.alert('This room is reserved before.');
					}
					console.log(error);
				});
		}
	}

	async componentDidMount() {
		console.log('dd');
		console.log(JSON.parse(localStorage.getItem('i2')).split('T')[0], 'dateeeee');

		this.setState({ images: JSON.parse(localStorage.getItem('items')) });
		var splitted = window.location.toString().split('/');

		await this.setState({ room: decodeURIComponent(splitted.pop()) });
		decodeURIComponent(this.state.room);

		await this.setState({ city: decodeURIComponent(splitted.pop()) });
		decodeURIComponent(this.state.city);

		await this.setState({ name: decodeURIComponent(splitted.pop()) });

		await this.setState({ price_per_day: decodeURIComponent(splitted.pop()) });
		decodeURIComponent(this.state.price_per_day);
		console.log(this.state.price_per_day, 'pr');

		document.getElementById('pic1').src = JSON.parse(localStorage.getItem('items'))[0].image
			? 'http://127.0.0.1:8000' + JSON.parse(localStorage.getItem('items'))[0].image
			: 'data:image/jpeg;base64,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';
		document.getElementById('pic2').src =
			'http://127.0.0.1:8000' + JSON.parse(localStorage.getItem('items'))[1].image;
		document.getElementById('pic3').src =
			'http://127.0.0.1:8000' + JSON.parse(localStorage.getItem('items'))[2].image;
		document.getElementById('pic4').src =
			'http://127.0.0.1:8000' + JSON.parse(localStorage.getItem('items'))[3].image;
		document.getElementById('pic5').src =
			'http://127.0.0.1:8000' + JSON.parse(localStorage.getItem('items'))[0].image;
		document.getElementById('pic6').src =
			'http://127.0.0.1:8000' + JSON.parse(localStorage.getItem('items'))[1].image;
		document.getElementById('pic7').src =
			'http://127.0.0.1:8000' + JSON.parse(localStorage.getItem('items'))[2].image;
		document.getElementById('pic8').src =
			'http://127.0.0.1:8000' + JSON.parse(localStorage.getItem('items'))[3].image;
		document.getElementById('dateout').innerHTML = JSON.parse(localStorage.getItem('i2')).split('T')[0];
		document.getElementById('datein').innerHTML = JSON.parse(localStorage.getItem('i1')).split('T')[0];
		console.log(JSON.parse(localStorage.getItem('i2')).split('T')[0], 'dateeeee');
		console.log(<small id="dateout" />);
		document.getElementById('person').innerHTML =
			(parseInt(JSON.parse(localStorage.getItem('i1')).split('T')[0][2]) -
				parseInt(JSON.parse(localStorage.getItem('i1')).split('T')[0][2]) +
				1) *
				parseInt(this.state.price_per_day) +
			'$';
	}

	formValChange = (e) => {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		const { name, value } = e.target;
		let error = { ...this.state.error };

		switch (name) {
			case 'firstname':
				error.firstname.u1 =
					(typeof value !== 'undefined' && value.length < 3) ||
					value.length > 15 ||
					!value.match(/^[A-Z a-z]+$/)
						? '*Please enter a valid  name'
						: '';

				error.firstname.u2 = !value ? '*First name must not be empty!' : '';
				break;

			case 'lastname':
				error.lastname.u1 =
					(typeof value !== 'undefined' && value.length < 3) ||
					value.length > 15 ||
					!value.match(/^[A-Z a-z]+$/)
						? '*Please enter a valid last name'
						: '';

				error.lastname.u2 = !value ? '*Last name must not be empty!' : '';
				break;

			case 'phone':
				error.phone.p1 =
					typeof value !== 'undefined' && !value.match(/^[0-9]+$/) ? '*Invalid phone number. ' : '';

				error.phone.p2 = value.length < 11 ? '*Too short for a phone number' : '';

				error.phone.p3 = !value ? '*Password field must not be empty' : '';

				break;

			case 'nationalcode':
				error.nationalcode.p1 =
					typeof value !== 'undefined' && (!value.match(/^[0-9]+$/) || value.length < 10)
						? '*Invalid national code. '
						: '';

				error.nationalcode.p2 = !value ? '*This field must not be empty' : '';

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

	render() {
		this.state.get_price = this.calculatePrice();

		return (
			<div>
				<div className="containter m-5">
					<div className="row justify-content-center">
						<div
							id="carouselExampleIndicators"
							className="carousel slide d-md-none mb-5"
							data-bs-ride="carousel"
						>
							<div className="carousel-indicators">
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="0"
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								/>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="1"
									aria-label="Slide 2"
								/>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="2"
									aria-label="Slide 3"
								/>
							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										id="pic1"
										style={{ borderRadius: '50px' }}
										className="d-block w-100"
										alt="..."
									/>
								</div>
								<div className="carousel-item">
									<img
										id="pic2"
										style={{ borderRadius: '50px' }}
										className="d-block w-100"
										alt="..."
									/>
								</div>
								<div className="carousel-item">
									<img
										id="pic3"
										style={{ borderRadius: '50px' }}
										className="d-block w-100"
										alt="..."
									/>
								</div>

								<div className="carousel-item">
									<img
										id="pic4"
										style={{ borderRadius: '50px' }}
										className="d-block w-100"
										alt="..."
									/>
								</div>
							</div>

							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="prev"
							>
								<span className="carousel-control-prev-icon" aria-hidden="true" />
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="next"
							>
								<span className="carousel-control-next-icon" aria-hidden="true" />
								<span className="visually-hidden">Next</span>
							</button>
						</div>

						<div className="col-12 col-lg-4">
							<div className="card-containter ">
								<div className="card-body">
									<div class="shadow p-3 mb-5 bg-body rounded">
										<div className="row   m-3">
											<div className="col" style={{ display: 'flex', alignItems: 'left' }}>
												<div
													className="col-md-6"
													style={{ display: 'flex', alignItems: 'center' }}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-calendar-date-fill "
														viewBox="0 0 16 16"
														color="#cd9a2d"
													>
														<path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
														<path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
													</svg>

													<div className="col-md-6 m-2 ">
														<span style={{}}> Check in:</span>
														<br />
														<span
															style={{
																justifyContent: 'end',
																alignItems: 'right',
																color: 'grey'
															}}
														>
															<small id="datein" />
															date1
														</span>
													</div>
												</div>
												<div
													className="col-md-6"
													style={{ display: 'flex', alignItems: 'center' }}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-calendar-date-fill "
														viewBox="0 0 16 16"
														color="#cd9a2d"
													>
														<path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
														<path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
													</svg>

													<div className="col-md-6 m-2 ">
														<span style={{}}>
															{/* {' '} */}
															Check out:
														</span>
														<br />
														<span
															style={{
																justifyContent: 'end',
																alignItems: 'right',
																color: 'grey'
															}}
														>
															date2
															<small id="dateout" />
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="">
											<hr className="m-3 hr-text" />
										</div>

										<div className="col-12  m-4" style={{ display: 'flex', alignItems: 'center' }}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-person-fill"
												viewBox="0 0 16 16"
												color="#cd9a2d"
											>
												<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
											</svg>

											<div className="col col-sm-8 " style={{ fontWeight: 'bold' }}>
												<span className="ms-2"> Number of passengers : </span>
											</div>

											<div style={{ color: 'grey' }}>
												{JSON.parse(localStorage.getItem('i3'))}
											</div>
										</div>

										<div className="">
											<hr className="m-3 hr-text" />
										</div>
										<div
											className="col-12   m-4"
											style={{
												display: 'flex',
												alignItems: 'center'
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-wallet2"
												viewBox="0 0 16 16"
												color="#cd9a2d"
											>
												<path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
											</svg>

											<div
												className="col col-sm-8 "
												style={{
													fontWeight: 'bold'
												}}
											>
												<span className="ms-2">Payment details : </span>
											</div>
											<div style={{ justifyContent: 'end', color: 'grey' }} id="person" />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-8 ">
							<div className="container d-none d-md-block">
								<br />
								<br />
								<div className="row-md-12" title="HotelName">
									<h2 style={{ fontWeight: 'bold' }}>{this.state.name}</h2>
								</div>

								<div className="row ">
									<div className="col-5 icon2  gx-3 col-sm-1 d-flex">
										<FmdGoodIcon />

										{this.state.city}
									</div>
									<br />
								</div>
							</div>
							<br />
							<div className="row">
								<div className="d-none d-md-block m-4">
									<Carousel show={4}>
										<div className="m-2">
											<img
												id="pic5"
												className="img-fluid"
												alt="..."
												style={{ borderRadius: '20px' }}
											/>
										</div>
										<div className="m-2">
											<img
												id="pic6"
												className="img-fluid"
												alt="..."
												style={{ borderRadius: '20px' }}
											/>
										</div>
										<div className=" m-2">
											<img
												id="pic7"
												className="img-fluid"
												alt="..."
												style={{ borderRadius: '20px' }}
											/>
										</div>

										<div className=" m-2">
											<img
												id="pic8"
												className="img-fluid"
												alt="..."
												style={{ borderRadius: '20px' }}
											/>
										</div>
									</Carousel>
								</div>
							</div>
							<div className="">
								<hr className="m-3 hr-text" />
							</div>{' '}
							<div className="row mx-3">
								<h4 style={{ fontWeight: 'bold' }}>Supervisor information :</h4>
							</div>
							<div className="row mx-3">
								<p>It is enough to enter the information of one of the passengers as a supervisor.</p>
							</div>
							<div className="row">
								<form noValidate onSubmit={this.onSubmit} className="row g-3 needs-validation mx-3">
									<div class="col-md-4 ">
										<input
											required
											fullWidth
											id="firstname"
											label="firstname"
											name="firstname"
											placeholder="Firstname*"
											autoComplete="text"
											aria-describedby="inputGroup-sizing-sm"
											className={
												this.state.error.firstname.u1.length > 0 ||
												this.state.error.firstname.u2.length > 0 ? (
													'is-invalid form-control lg'
												) : (
													'form-control'
												)
											}
											value={this.state['firstname']}
											onChange={this.formValChange}
										/>

										<div className="mt-3 ">
											{this.state.error.firstname.u1.length > 0 && (
												<p className="err">
													{this.state.error.firstname.u1}
													<br />
												</p>
											)}
											{this.state.error.firstname.u2.length > 0 && (
												<p className="err">
													{this.state.error.firstname.u2}
													<br />
												</p>
											)}
										</div>
									</div>
									<div class="col-md-4 ">
										<input
											required
											fullWidth
											id="lastname"
											label="lastname"
											name="lastname"
											autoComplete="text"
											placeholder="Lastname*"
											className={
												this.state.error.lastname.u1.length > 0 ||
												this.state.error.lastname.u2.length > 0 ? (
													'is-invalid form-control'
												) : (
													'form-control'
												)
											}
											value={this.state['lastname']}
											onChange={this.formValChange}
										/>
										<div className="mt-3 ">
											{this.state.error.lastname.u1.length > 0 && (
												<p className="err">
													{this.state.error.lastname.u1}
													<br />
												</p>
											)}
											{this.state.error.lastname.u2.length > 0 && (
												<p className="err">
													{this.state.error.lastname.u2}
													<br />
												</p>
											)}
										</div>
									</div>
									<div class="col-md-4 ">
										<input
											required
											fullWidth
											id="nationalcode"
											label="nationalcode"
											name="nationalcode"
											placeholder="National code*"
											autoComplete="text"
											className={
												this.state.error.nationalcode.p1.length > 0 ||
												this.state.error.nationalcode.p2.length > 0 ? (
													'is-invalid form-control'
												) : (
													'form-control'
												)
											}
											value={this.state['nationalcode']}
											onChange={this.formValChange}
										/>

										<div className="mt-3 ">
											{this.state.error.nationalcode.p1.length > 0 && (
												<p className="err">
													{this.state.error.nationalcode.p1}
													<br />
												</p>
											)}
											{this.state.error.nationalcode.p2.length > 0 && (
												<p className="err">
													{this.state.error.nationalcode.p2}
													<br />
												</p>
											)}
										</div>
									</div>
									<div class="col-md-4 ">
										<PhoneInput
											country={'us'}
											id="phone"
											label="phone"
											name="phone"
											fullWidth
											required
											value={this.state['phone']}
											onChange={(phone) => this.setState({ phone })}
										/>

										{/* 										
										<div className="mt-3 ">
											{this.state.error.phone.p1.length > 0 && (
												<p className="err">
													{this.state.error.phone.p1}
													<br />
												</p>
											)}

											{this.state.error.phone.p3.length > 0 && (
												<p className="err">
													{this.state.error.phone.p3}
													<br />
												</p>
											)}
											{this.state.error.phone.p2.length > 0 && (
												<p className="err">
													{this.state.error.phone.p2}
													<br />
												</p>
											)}
										</div> */}
									</div>
									<div className="">
										<hr className="hr-text" />
									</div>{' '}
									<div class="form-check  m-3 checkbox-black">
										<input
											class="form-check-input form-control-huge checkbox-black"
											type="checkbox"
											value={this.state.ischeck1}
											id="flexCheckDefault"
										/>
										<label
											class="form-check-label"
											for="flexCheckDefault"
											style={{ fontWeight: 'bold' }}
										>
											Late arrival :
										</label>
										<br />
										<lable className="col-12" class="form-check-label" for="flexCheckDefault">
											<p>
												If your arrival time at the hotel is after 8 pm we assumes no
												responsibility for the cancellation.
											</p>
										</lable>
									</div>
									<div className="">
										<hr className="hr-text" />
									</div>
									<div class="form-check  m-3">
										<input
											class="form-check-input form-control-huge"
											type="checkbox"
											value=""
											id="flexCheckDefault"
											onClick={this.handlecheck2}
										/>
										<label
											class="form-check-label"
											for="flexCheckDefault"
											style={{ fontWeight: 'bold' }}
										>
											Default checkbox
										</label>
										<br />
										<lable class="form-check-label" for="flexCheckDefault">
											I have read the site rules and the internal hotel rules and I approve it.
										</lable>
									</div>
									<div class="gap-7 mx-auto m-3  " /> <br />
									<div class="d-grid   col-5 ms-4" style={{ display: 'flex', alignItems: 'left' }}>
										<button
											type="button"
											onClick={this.handleSubmit}
											class="btn btn-dark btn-lg"
											data-bs-toggle="modal"
											data-bs-target="#exampleModal"
											// disabled={!(this.state.ischeck1 && this.state.ischeck2)}
										>
											{this.state.loading ? (
												<CircularProgress style={{ color: '#fff' }} size="1.5rem" />
											) : (
												'Reserve'
											)}
										</button>
									</div>
									<div
										class="modal fade"
										id="exampleModal"
										tabindex="-1"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true"
									>
										<div className="modal-dialog modal-dialog-centered">
											<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title" id="exampleModalLabel">
														Reserve
													</h5>
													<button
														type="button"
														class="btn-close "
														data-bs-dismiss="modal"
														aria-label="Close"
													/>
												</div>

												<div class="modal-body">
													If confirmed, the room will be reserved for you and the cost will be
													deducted from your account.
												</div>
												<br />
												<br />
												<br />
												<div class="modal-footer" style={{ color: '#000000' }}>
													<button
														type="button"
														class="btn btn-outline-dark"
														data-bs-dismiss="modal"
													>
														Close
													</button>

													<button
														onClick={this.handleSubmit}
														type="submit"
														className="btn btn-primary hotel-room"
														style={{ backgroundColor: '#cd9a2d' }}
													>
														Confirm
													</button>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<Snackbar
						open={this.state.open}
						autoHideDuration={4000}
						// onClose={handleClose()}
						onClick={() => this.handleClose()}
						anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					>
						<Alert
							// onClose={handleClose()}
							onClick={() => this.handleClose()}
							severity={
								this.state.message === 'This room is reserved before.' ||
								'Your wallet balance is not enough.' ||
								'Please enter valid data.' ? (
									'error'
								) : (
									'success'
								)
							}
							sx={{ width: '100%' }}
						>
							{this.state.message}
						</Alert>
					</Snackbar>{' '}
				</div>
			</div>
		);
	}
}
export default Reservation;

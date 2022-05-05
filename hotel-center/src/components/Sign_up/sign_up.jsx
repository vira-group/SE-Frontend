
import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css';
import pic from './s3.png';
import { Sign_up_connection } from '../../Utils/connection';

const theme = createTheme();

// export default function SignUp() {
// 	const handleSubmit = (event) => {
// 		const data = new FormData(event.currentTarget);
// 	};

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

class Sign_up extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emailtxt: '',
			message: '',
			fields: {},
			error: {
				email: {
					u1: '',
					u2: ''
				},
				password: {
					p1: '',
					p2: '',
					p3: '',
					p4: '',
					p5: '',
					p6: ''
				},
				password2: {
					p1: '',
					p2: ''
				}
			}
		};

		this.formValChange = this.formValChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		if (formvalid2(this.state)) {
			let fields = {};

			fields['email'] = '';
			fields['password'] = '';
			fields['password2'] = '';
			this.setState({ fields: fields });
			// alert('Form submitted');
			const is_registered = Sign_up_connection(this.state.fields['email'], this.state.fields['password']);

			if (is_registered) {
				window.location.replace('/verify-email');
			}
		}
	}


	formValChange = (e) => {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		const { name, value } = e.target;
		let error = { ...this.state.error };

		switch (name) {
			case 'email':
				error.email.u2 =
					typeof value !== 'undefined' &&
					!value.match(
						/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
					)
						? '*Please enter a valid email.'
						: '';
				error.email.u1 = !value ? '*Email field must not be empty!' : '';
				break;

			case 'password':
				error.password.p2 =
					typeof value !== 'undefined' && !value.match(/^.*(?=.*\d).*$/)
						? '*Password should contain at least one digit(0-9). '
						: '';
				error.password.p3 =
					typeof value !== 'undefined' && !value.match(/^.*(?=.*[a-z]).*$/)
						? '*Password should contain at least one lowercase letter(a-z).'
						: '';
				error.password.p4 =
					typeof value !== 'undefined' && !value.match(/^.*(?=.*[A-Z]).*$/)
						? '*Password should contain at least one uppercase letter(A-Z).'
						: '';
				error.password.p5 =
					typeof value !== 'undefined' && !value.match(/^.*(?=.*[@#$%&]).*$/)
						? '*Password should contain at least one special character ( @, #, %, &,  $,).'
						: '';
				error.password.p6 = value.length < 8 ? '*Password length should be at least 8 characters.' : '';

				error.password.p1 = !value ? '*Password field must not be empty' : '';
				error.password2.p1 = value !== this.state.fields['password2'] ? '*Confirm password doesnt match!' : '';

				break;

			case 'password2':
				error.password2.p1 = value !== this.state.fields['password'] ? '*Confirm password doesnt match!' : '';
				error.password2.p2 = !value ? '*This field must not be empty!' : '';
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
		return (
			<ThemeProvider theme={theme}>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Box
						sx={{
							marginTop: 2,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<Avatar sx={{ m: 0.5, backgroundColor: 'black', color: 'white' }} className="icon" />

						<Typography component="h1" variant="h5">
							Sign up
						</Typography>

						<img className="imgs" src={pic} />

						<Box component="form" noValidate onSubmit={this.onSubmit} sx={{ mt: 2 }}>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
										className={
											this.state.error.email.u1.length > 0 ||
											this.state.error.email.u2.length > 0 ? (
												'is-invalid form-control'
											) : (
												'form-control'
											)
										}
										value={this.state['email']}
										onChange={this.formValChange}
									/>
								</Grid>
								<div>
									{this.state.error.email.u1.length > 0 && (
										<p className="err">
											{this.state.error.email.u1}
											<br />
										</p>
									)}
									{this.state.error.email.u2.length > 0 && (
										<p className="err">
											{this.state.error.email.u2}
											<br />
										</p>
									)}
								</div>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="new-password"
										className={
											this.state.error.password.p5.length > 0 ||
											this.state.error.password.p4.length > 0 ||
											this.state.error.password.p1.length > 0 ||
											this.state.error.password.p2.length > 0 ||
											this.state.error.password.p3.length > 0 ||
											this.state.error.password.p6.length > 0 ? (
												'is-invalid form-control'
											) : (
												'form-control'
											)
										}
										value={this.state['password']}
										onChange={this.formValChange}
									/>
								</Grid>
								<div>
									{this.state.error.password.p5.length > 0 && (
										<p className="err">{this.state.error.password.p5}</p>
									)}

									{this.state.error.password.p4.length > 0 && (
										<p className="err">{this.state.error.password.p4}</p>
									)}
									{this.state.error.password.p3.length > 0 && (
										<p className="err">{this.state.error.password.p3}</p>
									)}

									{this.state.error.password.p6.length > 0 && (
										<p className="err" sx={{ marginleft: '100px' }}>
											{this.state.error.password.p6}
										</p>
									)}

									{this.state.error.password.p2.length > 0 && (
										<p className="err" sx={{ marginRight: '100px' }}>
											{this.state.error.password.p2}
										</p>
									)}

									{this.state.error.password.p1.length > 0 && (
										<p className="err" sx={{ marginRight: '100px' }}>
											{this.state.error.password.p1}
										</p>
									)}
								</div>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										name="password2"
										label="Confirm Password"
										type="password"
										id="password2"
										autoComplete="new-password"
										className={
											this.state.error.password2.p1.length > 0 ||
											this.state.error.password2.p2.length > 0 ? (
												'is-invalid form-control'
											) : (
												'form-control'
											)
										}
										value={this.state['password2']}
										onChange={this.formValChange}
									/>
								</Grid>
								<div>
									{this.state.error.password2.p1.length > 0 && (
										<p className="err">{this.state.error.password2.p1}</p>
									)}

									{this.state.error.password2.p2.length > 0 && (
										<p className="err">{this.state.error.password2.p2}</p>
									)}
								</div>
							</Grid>
							<Button
								type="submit"
								onClick={this.handleSubmit}
								fullWidth
								variant="contained"
								name = "Sign Up"
								style={{
									mt: 2,
									mb: 2,
									backgroundColor: 'black',
									color: 'white',
									marginTop: '20px',
									height: '43px',
									marginBottom:'10px'
								}}
							>
								Sign Up
							</Button>

							<Grid container justifyContent="flex-end">
								<Grid item>
									<Link
										to="./login"
										variant="body2"
										className="lnk"
										sx={{ color: 'black', marginRight: '10px', marginTop: '50px', mt: 2, mb: 3 }}
									>
										Already have an account? Sign in
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		);
	}
}

export default Sign_up;

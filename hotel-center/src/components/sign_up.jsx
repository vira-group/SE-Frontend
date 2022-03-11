// import * as React from 'react';
// import axios from 'axios';
// // import './style.css';

// // import * as React from 'react';
// // import './stylesreg.css';
// // import axios from 'axios';
// import { Form } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// // import { BsCheckSquareFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// // import '../fonts/Vazir.ttf';

// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { green } from '@mui/material/colors';

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

// class Sign_up extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			// message: '',
// 			// toast: false,
// 			emailtxt: '',
// 			fields: {},
// 			error: {
// 				email: {
// 					u1: '',
// 					u2: ''
// 				},
// 				password: {
// 					p1: '',
// 					p2: '',
// 					p3: '',
// 					p4: '',
// 					p5: '',
// 					p6: ''
// 				},
// 				password2: {
// 					p1: '',
// 					p2: ''
// 				}
// 			}
// 		};

// 		this.formValChange = this.formValChange.bind(this);
// 		this.onSubmit = this.onSubmit.bind(this);
// 	}

// 	onSubmit(e) {
// 		e.preventDefault();

// 		if (formvalid2(this.state)) {
// 			let fields = {};

// 			fields['email'] = '';
// 			fields['password'] = '';
// 			fields['password2'] = '';
// 			this.setState({ fields: fields });
// 			alert('Form submitted');
// 		}
// 	}

// 	handleSubmit = (e) => {
// 		e.preventDefault();
// 		this.setState({ message: 'لطفا ایمیل رو تایید کنید.' });

// 		// this.setState({ toast: true });

// 		var formData = new FormData();
// 		formData.append('email', this.state.fields['email']);
// 		formData.append('password', this.state.fields['password']);
// 		formData.append('password2', this.state.fields['password2']);

// 		var config = {
// 			method: 'post',
// 			url: 'http://localhost:8000/api/account/register/',
// 			// headers: {
// 			//   'Authorization': 'Token '+ localStorage.getItem('token'),

// 			// },
// 			data: formData
// 		};

// 		axios(config)
// 			.then(function(response) {
// 				console.log(JSON.stringify(response.data));
// 				console.log('email:' + this.state.fields['email']);
// 				console.log('password:' + this.state.fields['password']);
// 				console.log('password2:' + this.state.fields['password2']);
// 			})
// 			.catch(function(error) {
// 				console.log(error);
// 			});
// 	};

// 	formValChange = (e) => {
// 		let fields = this.state.fields;
// 		fields[e.target.name] = e.target.value;
// 		const { name, value } = e.target;
// 		let error = { ...this.state.error };

// 		switch (name) {
// 			case 'email':
// 				error.email.u2 =
// 					typeof value !== 'undefined' &&
// 					!value.match(
// 						/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
// 					)
// 						? '*ایمیل معتبر نیست.'
// 						: '';
// 				error.email.u1 = !value ? '*لطفا ایمیلت رو وارد کن.' : '';
// 				break;

// 			case 'password':
// 				error.password.p2 =
// 					typeof value !== 'undefined' && !value.match(/^.*(?=.*\d).*$/)
// 						? '*رمز عبور باید شامل حداقل یک عدد باشه.'
// 						: '';
// 				error.password.p3 =
// 					typeof value !== 'undefined' && !value.match(/^.*(?=.*[a-z]).*$/)
// 						? '*رمز عبور باید شامل حروف [a-z] باشه.'
// 						: '';
// 				error.password.p4 =
// 					typeof value !== 'undefined' && !value.match(/^.*(?=.*[A-Z]).*$/)
// 						? '*رمز عبور باید شامل حروف [A-Z] باشه.'
// 						: '';
// 				error.password.p5 =
// 					typeof value !== 'undefined' && !value.match(/^.*(?=.*[@#$%&]).*$/)
// 						? '*رمز عبور  باید شامل حداقل یک کاراکتر خاص [@#$%&] باشه .'
// 						: '';
// 				error.password.p6 = value.length < 8 ? '*حداقل ۸ کاراکتر وارد کن.' : '';
// 				error.password.p1 = !value ? '*لطفا یه رمز عبور انتخاب کن.' : '';
// 				error.password2.p1 = value !== this.state.fields['password2'] ? '*با رمز عبور تطابق نداره !' : '';

// 				break;

// 			case 'password2':
// 				error.password2.p1 = value !== this.state.fields['password'] ? '*با رمز عبور تطابق نداره !' : '';
// 				error.password2.p2 = !value ? '*رمز عبور رو تکرار کن.' : '';
// 				break;
// 			default:
// 				break;
// 		}

// 		this.setState({
// 			fields,
// 			error,
// 			[name]: value
// 		});
// 	};

// 	render() {
// 		return (
// 			<Form>
// 				<input />
// 			</Form>
// 			// <div className="sign">
// 			// 	<br />
// 			// 	<br />
// 			// 	<Form onSubmit={this.onSubmit}>
// 			// 		{/* <BsCheckSquareFill className="icons" color="#28c5cc" />
// 			// 		<br />
// 			// 		<h2 className="icontexts">ثبت نام</h2>
// 			// 		<img
// 			// 			src="https://s4.uupload.ir/files/man-reading-book-while-walking-city_74855-7608_y9ze.jpg"
// 			// 			className="imgs"
// 			// 		/> */}

// 			// 		<br />

// 			// 		<div className="form-group">
// 			// 			<input
// 			// 				type="email"
// 			// 				style={{ height: '47px', fontSize: '15px' }}
// 			// 				size="lg"
// 			// 				className={
// 			// 					error.email.u1.length > 0 || error.email.u2.length > 0 ? (
// 			// 						'is-invalid form-control'
// 			// 					) : (
// 			// 						'form-control'
// 			// 					)
// 			// 				}
// 			// 				name="email"
// 			// 				placeholder="*ایمیل"
// 			// 				value={this.state['email']}
// 			// 				onChange={this.formValChange}
// 			// 			/>
// 			// 			{/* {error.email.u1.length > 0 && <span className="invalid-feedback">{error.email.u1}</span>}
// 			// 			{error.email.u2.length > 0 && <span className="invalid-feedback">{error.email.u2}</span>} */}
// 			// 		</div>

// 			// 		<div className="form-group">
// 			// 			<input
// 			// 				type="password"
// 			// 				style={{ height: '47px', fontSize: '15px' }}
// 			// 				size="lg"
// 			// 				className={
// 			// 					error.password.p5.length > 0 ||
// 			// 					error.password.p4.length > 0 ||
// 			// 					error.password.p1.length > 0 ||
// 			// 					error.password.p2.length > 0 ||
// 			// 					error.password.p3.length > 0 ||
// 			// 					error.password.p6.length > 0 ? (
// 			// 						'is-invalid form-control'
// 			// 					) : (
// 			// 						'form-control'
// 			// 					)
// 			// 				}
// 			// 				name="password"
// 			// 				placeholder="*رمز عبور"
// 			// 				value={this.state['password']}
// 			// 				onChange={this.formValChange}
// 			// 			/>

// 			// 			{error.password.p1.length > 0 && <span className="invalid-feedback">{error.password.p1}</span>}
// 			// 			{error.password.p2.length > 0 && <span className="invalid-feedback">{error.password.p2}</span>}

// 			// 			{error.password.p4.length > 0 && <span className="invalid-feedback">{error.password.p4}</span>}
// 			// 			{error.password.p3.length > 0 && <span className="invalid-feedback">{error.password.p3}</span>}
// 			// 			{error.password.p5.length > 0 && <span className="invalid-feedback">{error.password.p5}</span>}
// 			// 			{error.password.p6.length > 0 && <span className="invalid-feedback">{error.password.p6}</span>}
// 			// 		</div>

// 			// 		<div className="form-group">
// 			// 			<input
// 			// 				type="password"
// 			// 				style={{ height: '47px', fontSize: '15px' }}
// 			// 				size="lg"
// 			// 				className={
// 			// 					error.password2.p1.length > 0 || error.password2.p2.length > 0 ? (
// 			// 						'is-invalid form-control'
// 			// 					) : (
// 			// 						'form-control'
// 			// 					)
// 			// 				}
// 			// 				name="password2"
// 			// 				placeholder="*تکرار رمز عبور"
// 			// 				value={this.state['password2']}
// 			// 				onChange={this.formValChange}
// 			// 			/>
// 			// 			{error.password2.p1.length > 0 && (
// 			// 				<span className="invalid-feedback">{error.password2.p1}</span>
// 			// 			)}
// 			// 			{error.password2.p2.length > 0 && (
// 			// 				<span className="invalid-feedback">{error.password2.p2}</span>
// 			// 			)}
// 			// 		</div>
// 			// 		{/* {mes} */}

// 			// 		<Button variant="primary" size="lg" className="buttons2" onClick={this.handleSubmit}>
// 			// 			ثبت نام
// 			// 		</Button>

// 			// 		<br />
// 			// 		<br />
// 			// 		<h4 className="linktexts">
// 			// 			ثبت نام کردی؟{' '}
// 			// 			<Link style={{ color: '#28c5cc' }} to="/login">
// 			// 				وارد شو{' '}
// 			// 			</Link>
// 			// 		</h4>
// 			// 		<br />
// 			// 		<br />
// 			// 	</Form>
// 			// </div>
// 		);
// 	}
// }

// export default Sign_up;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import pic from './s1.png';

function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const theme = createTheme();

export default function SignUp() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
		console.log({
			email: data.get('email'),
			password: data.get('password')
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>{/* <LockOutlinedIcon /> */}</Avatar>

					<Typography component="h1" variant="h5">
						Sign up
					</Typography>

{/* 
						<div>
						<img src={pic} />
					
						</div> */}




					<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							{/* <Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
								/>
							</Grid> */}

							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
						
							{/* <Grid item xs={12}>
								<FormControlLabel
									control={<Checkbox value="allowExtraEmails" color="primary" />}
									label="I want to receive inspiration, marketing promotions and updates via email."
								/>
							</Grid> */}
						</Grid>
						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="#" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
}

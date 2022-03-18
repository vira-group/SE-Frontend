// import { Route } from 'react-router-dom';
// import { CenterFocusStrong, Home, Router } from '@mui/icons-material';
// import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css';
import pic from './s1.png';
import ico from './icon.png';

import { login_connection } from '../../Utils/connection';

const theme = createTheme();

class login extends React.Component {
	constructor() {
		super();
		this.state = {
			fields: {'email':"", "password":""},
			errors: {},
			logerror: '',
			history: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.submituserlogin = this.submituserlogin.bind(this);
	}

	handleChange(e) {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	}

	submituserlogin(e) {
		e.preventDefault();
		if (true) {
			// let fields = {};

			// fields['email'] = '';
			// fields['password'] = '';
			// this.setState({ fields: fields });
			alert('Form submitted');
			const is_logged_in = login_connection(this.state.fields['email'], this.state.fields['password']);
			if(is_logged_in){
				window.location.replace("/")
			}
			/*
			if(is_logged_in === "Already logged in")
			{
				window.alert("Already logged in"); 
			}
			*/
		
	}
	}

	componentDidMount() {
		console.log(this.props.history);
	}

	handleSubmit = (e) => {
		let loggedin = false;
		e.preventDefault();
		var formData = new FormData();

		formData.append('email', this.state.fields['email']);
		formData.append('password', this.state.fields['password']);
		/*
		axios
			.post('', formData)
			.then((response) => {
				localStorage.setItem('token', response.data.token);
				loggedin = true;
				console.log('axios response');
				if (loggedin) {
					this.props.history.push('/');
					window.location.reload();
				}
			})
			.catch((err) => {
				console.log(err);
				let error = <h5>Invalid email or password!</h5>;
				this.setState({ logerror: error });
			});
*/
	};

	render() {
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
						<img sx={{ m: 1, backgroundColor: '#003049' }} className="icon_Login" src={ico} />

						<Typography component="h1" variant="h5">
							Login
						</Typography>

						<img className="imgs_Login" src={pic} />

						<Box component="form" noValidate onSubmit={this.onSubmit} sx={{ mt: 1 }}>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
										value={this.state['email']}
										onChange={this.handleChange}
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
										value={this.state['password']}
										onChange={this.handleChange}
									/>
								</Grid>

								<div>
									<h5 className="err_Login">{this.state.logerror}</h5>
								</div>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								onClick={this.submituserlogin}
								sx={{ mt: 1, mb: 2, backgroundColor: '#C1121F' }}
							>
								Login
							</Button>
							<Grid container justifyContent="flex-end">
								<Grid item>
									<Link
										to="/sign-up"
										variant="body2"
										className="lnk_Login"
										sx={{ color: '#003049', marginRight: '10px' }}
									>
										Don't have an account yet? Sign Up
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

export default login;

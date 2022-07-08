import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css';
import pic from './s4.png';
import ico from './icon.png';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import references from '../../assets/References.json';
import { cookies, makeURL } from '../../Utils/common';
import axios from 'axios';
import { set_cookie } from '../../Utils/common';

const theme = createTheme();
const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
class login extends React.Component {
	constructor() {
		super();
		this.state = {
			fields: { email: '', password: '' },
			errors: {},
			logerror: '',
			history: '',
			message: '',
			open: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.submituserlogin = this.submituserlogin.bind(this);
	}

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		this.setState({ open: false });
	};

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
			if (cookies.get('Authorization') != undefined) {
				this.setState({ message: 'Already logged in' });
				this.setState({ open: true });
			} else {
				axios
					.post(makeURL(references.url_login), {
						email: this.state.fields['email'],
						password: this.state.fields['password']
					})
					.then((response) => {
						this.setState({ open: true });
						this.setState({ message: 'login successfully' });
						set_cookie(response.data.auth_token);
						window.location.replace('/');
					})
					.catch((error) => {
						if (error.response.status == 400) {
							this.setState({ open: true });
							this.setState({ message: 'wrong email or password' });
						}
					});
			}
		}
	}

	componentDidMount() {
		console.log(this.props.history);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		var formData = new FormData();
		formData.append('email', this.state.fields['email']);
		formData.append('password', this.state.fields['password']);
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
								style={{
									mt: 2,
									mb: 2,
									backgroundColor: 'black',
									color: 'white',
									marginTop: '20px',
									height: '43px',
									marginBottom: '10px'
								}}
							>
								Login
							</Button>

							<Grid container justifyContent="flex-end">
								<Grid item>
									<Link
										to="/sign-up"
										variant="body2"
										className="lnk_Login"
										sx={{ color: '#cd9a2d', marginRight: '10px' }}
									>
										Don't have an account yet? Sign Up
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
					<Snackbar
						open={this.state.open}
						autoHideDuration={2000}
						onClose={() => this.setState({ open: false })}
						anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					>
						<Alert
							onClose={() => this.setState({ open: false })}
							severity={
								this.state.message === ('wrong email or password' || 'Already logged in') ? (
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
				</Container>
			</ThemeProvider>
		);
	}
}

export default login;

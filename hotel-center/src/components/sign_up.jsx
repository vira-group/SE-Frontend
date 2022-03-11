import * as React from 'react';
import axios from 'axios';

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
			// message: '',
			// toast: false,
			emailtxt: '',
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
			alert('Form submitted');
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ message: 'لطفا ایمیل رو تایید کنید.' });

		// this.setState({ toast: true });

		var formData = new FormData();
		formData.append('email', this.state.fields['email']);
		formData.append('password', this.state.fields['password']);
		formData.append('password2', this.state.fields['password2']);

		var config = {
			method: 'post',
			url: 'http://localhost:8000/api/account/register/',
			// headers: {
			//   'Authorization': 'Token '+ localStorage.getItem('token'),

			// },
			data: formData
		};

		axios(config)
			.then(function(response) {
				console.log(JSON.stringify(response.data));
				console.log('email:' + this.state.fields['email']);
				console.log('password:' + this.state.fields['password']);
				console.log('password2:' + this.state.fields['password2']);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

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
						? '*ایمیل معتبر نیست.'
						: '';
				error.email.u1 = !value ? '*لطفا ایمیلت رو وارد کن.' : '';
				break;

			case 'password':
				error.password.p2 =
					typeof value !== 'undefined' && !value.match(/^.*(?=.*\d).*$/)
						? '*رمز عبور باید شامل حداقل یک عدد باشه.'
						: '';
				error.password.p3 =
					typeof value !== 'undefined' && !value.match(/^.*(?=.*[a-z]).*$/)
						? '*رمز عبور باید شامل حروف [a-z] باشه.'
						: '';
				error.password.p4 =
					typeof value !== 'undefined' && !value.match(/^.*(?=.*[A-Z]).*$/)
						? '*رمز عبور باید شامل حروف [A-Z] باشه.'
						: '';
				error.password.p5 =
					typeof value !== 'undefined' && !value.match(/^.*(?=.*[@#$%&]).*$/)
						? '*رمز عبور  باید شامل حداقل یک کاراکتر خاص [@#$%&] باشه .'
						: '';
				error.password.p6 = value.length < 8 ? '*حداقل ۸ کاراکتر وارد کن.' : '';
				error.password.p1 = !value ? '*لطفا یه رمز عبور انتخاب کن.' : '';
				error.password2.p1 = value !== this.state.fields['password2'] ? '*با رمز عبور تطابق نداره !' : '';

				break;

			case 'password2':
				error.password2.p1 = value !== this.state.fields['password'] ? '*با رمز عبور تطابق نداره !' : '';
				error.password2.p2 = !value ? '*رمز عبور رو تکرار کن.' : '';
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
		return <div>sign_up
		
		<div class="main">

<section class="signup">
	<div class="container">
		<div class="signup-content">
			<div class="signup-form">
				<h2 class="form-title">Sign up</h2>
				<form method="POST" class="register-form" id="register-form">
					<div class="form-group">
						<label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
						<input type="text" name="name" id="name" placeholder="Your Name"/>
					</div>
					<div class="form-group">
						<label for="email"><i class="zmdi zmdi-email"></i></label>
						<input type="email" name="email" id="email" placeholder="Your Email"/>
					</div>
					<div class="form-group">
						<label for="pass"><i class="zmdi zmdi-lock"></i></label>
						<input type="password" name="pass" id="pass" placeholder="Password"/>
					</div>
					<div class="form-group">
						<label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
						<input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
					</div>
					<div class="form-group">
						<input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
						<label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
					</div>
					<div class="form-group form-button">
						<input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
					</div>
				</form>
			</div>
			<div class="signup-image">
				<figure>
				<img src="images/signup-image.jpg" alt="sing up image"></img>

				</figure>
				<a href="#" class="signup-image-link">I am already member</a>
			</div>
		</div>
	</div>
</section>

<section class="sign-in">
	<div class="container">
		<div class="signin-content">
			<div class="signin-image">
				<figure><img src="images/signin-image.jpg" alt="sing up image"></img></figure>
				<a href="#" class="signup-image-link">Create an account</a>
			</div>

			<div class="signin-form">
				<h2 class="form-title">Sign up</h2>
				<form method="POST" class="register-form" id="login-form">
					<div class="form-group">
						<label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
						<input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
					</div>
					<div class="form-group">
						<label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
						<input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
					</div>
					<div class="form-group">
						<input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
						<label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
					</div>
					<div class="form-group form-button">
						<input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
					</div>
				</form>
				<div class="social-login">
					<span class="social-label">Or login with</span>
					<ul class="socials">
						<li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
						<li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
						<li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

</div>
		
		</div>;
	}
}

export default Sign_up;

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
		return;
	}
}

export default Sign_up;

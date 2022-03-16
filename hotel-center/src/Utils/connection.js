import references from '../assets/References.json';
import { cookies, makeURL } from './common';
import axios from 'axios';
import { get_token, get_user, set_user_session, remove_user_session } from './common';

export const AccountActivation = async (uid1, token1) => {
	let message = '';
	await axios
		.post(makeURL(references.url_AccountActivation), {
			uid: uid1,
			token: token1
		})
		.then((response) => {
			console.log(response);
			message = true;
		})
		.catch((error) => {
			console.log(error);
			message = false;
		});
	return message;
};

export const Sign_up_connection = async (email, password) => {
	let message = '';
	await axios
		.post(makeURL(references.url_Sign_up), {
			email: email,
			password: password,
			re_password: password
		})
		.then((response) => {
			console.log(response);
			message = true;
		})
		.catch((error) => {
			console.log(error);
			message = false;
		});
	return message;
};

export const login_connection = async (email, password) => {
	let message = '';
	if (cookies.get('x-access-token') != undefined) {
		message = 'Already logged in';
	} else {
		await axios
			.post(makeURL(references.url_login), {
				email: email,
				password: password
			})
			.then((response) => {
				set_user_session(response.data.auth_token);
				console.log(response);
				message = true;
			})
			.catch((error) => {
				if (error.response.status == 400) {
					window.alert('Already logged in');
				}
				console.log(error);
				message = false;
			});
	}

	return message;
};

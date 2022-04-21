import references from '../assets/References.json';
import { cookies, makeURL } from './common';
import axios from 'axios';
import { get_token, get_user, set_user_session, remove_user_session, set_cookie } from './common';

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
			window.location.replace('/verify-email');
		})
		.catch((error) => {
			console.log(error);
			message = false;
		});
	return message;
};

export const login_connection = async (email, password) => {
	console.log(password, email)
	let message = '';
	if (cookies.get('Authorization') != undefined) {
		message = 'Already logged in';
		window.alert("Already logged in");
	} else {
		await axios
			.post(makeURL(references.url_login), {
				email: email,
				password: password
			})
			.then((response) => {
				console.log(response.data.auth_token);
				set_cookie(response.data.auth_token);
				console.log(response);
				message = true;
				window.location.replace("/")
			})
			.catch((error) => {
				if (error.response.status == 400) {
					window.alert("wrong email or password");
				}
				console.log(error);
				message = false;
			});
	}

	return message;
};

export const me = async () => {
	let message;
	console.log(cookies.get('Authorization'));
	await axios
		.get(makeURL(references.url_me),{

				headers:{
					'Authorization': cookies.get('Authorization')
				}

		})
		.then((response) => {
			console.log(response);
			message = true;
		})
		.catch((error) => {
			console.log(error);
			message = false;
		});

	console.log(")))))))))) "+ message)
	return message;
};


export const logout = async () => {
	let message = '';
	console.log(cookies.get('Authorization'));
	await axios
		.post(makeURL(references.url_logout),{},{

				headers:{
					'Authorization': cookies.get('Authorization')
				}

		})
		.then((response) => {
			console.log(response);
			cookies.remove('Authorization');
			message = true;
			
		})
		.then(()=>{
			 window.location.reload()
		})
		.catch((error) => {
			console.log(error);
			message = false;
		});


	return message;
};

export const one_hotel_connection = async (id) => {
	let message = '';
	await axios
	.get(makeURL(references.url_onehotel+"/"+id+"/"),{},{

		headers:{
			'Authorization': cookies.get('Authorization')
		}

})
.then((response) => {
	console.log(response);
	message=response.data;
	
})
.catch((error) => {
	console.log(error);
	message = false;
});

return message;
};



export const one_hotel_image = async (id) => {
	let message = '';
	await axios
	.get(makeURL(references.url_onehotelImage+"/"+id+"/" + "images/"),{},{

		headers:{
			'Authorization': cookies.get('Authorization')
		}

})
.then((response) => {
	console.log(response);
	message=response.data;
	
})
.catch((error) => {
	console.log(error);
	message = false;
});

return message;
};
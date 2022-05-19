import React, { Component } from 'react';

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

class HotelInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			fields: {},
			get_price: 1,
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

	onSubmit(e) {
		e.preventDefault();

		if (formvalid2(this.state)) {
			let fields = {};
			fields['firstname'] = '';
			fields['lastname'] = '';
			fields['phone'] = '';
			fields['nationalcode'] = '';
			this.setState({ fields: fields });
		}
	}
	render() {
		return (
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
							this.state.error.firstname.u1.length > 0 || this.state.error.firstname.u2.length > 0 ? (
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
							this.state.error.lastname.u1.length > 0 || this.state.error.lastname.u2.length > 0 ? (
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
						id="phone"
						label="phone"
						name="phone"
						autoComplete="text"
						placeholder="0999-999-9999*"
						className={
							this.state.error.phone.p1.length > 0 ||
							this.state.error.phone.p3.length > 0 ||
							this.state.error.phone.p2.length > 0 ? (
								'is-invalid form-control'
							) : (
								'form-control'
							)
						}
						value={this.state['phone']}
						onChange={this.formValChange}
					/>

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
				<div className="">
					<hr className="hr-text" />
				</div>
			</form>
		);
	}
}

export default HotelInfo;

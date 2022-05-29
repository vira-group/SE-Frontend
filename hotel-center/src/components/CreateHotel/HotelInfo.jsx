import React, { Component } from 'react';
import Countries from './Countries';

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
			fields: {},
			error: {
				Name: {
					u1: '',
					u2: ''
				},

				State: {
					u1: '',
					u2: ''
				},

				Address: {
					u1: '',
					u2: ''
				}
			,	Description: {
					u1: '',
					u2: ''
				}
			
			}
		};

		this.formValChange = this.formValChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	// async componentDidMount() {
	// 	localStorage.setItem('Name', JSON.stringify(this.state.fields['Name']));
	// 	localStorage.setItem('State', JSON.stringify(this.state.fields['State']));
	// 	localStorage.setItem('Address', JSON.stringify(this.state.fields['Address']));
	// }
	formValChange = (e) => {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		const { name, value } = e.target;
		let error = { ...this.state.error };

		switch (name) {
			case 'Name':
				error.Name.u1 =
					(typeof value !== 'undefined' && value.length < 3) ||
					value.length > 15 ||
					!value.match(/^[A-Z a-z]+$/)
						? '*Please enter a valid  name'
						: '';

				error.Name.u2 = !value ? '*This field must not be empty!' : '';
				break;

			case 'State':
				error.State.u1 =
					(typeof value !== 'undefined' && value.length < 3) ||
					value.length > 15 ||
					!value.match(/^[A-Z a-z]+$/)
						? '*Please enter a valid  State'
						: '';

				error.State.u2 = !value ? '*This field must not be empty!' : '';
				break;
				case 'Description':
					error.Description.u1 =
						(typeof value !== 'undefined' && value.length < 10) 
							? '*You should enter more than 10 characters.'
							: '';
	
					error.Description.u2 = !value ? '*This field must not be empty!' : '';
					break;
	
			case 'Address':
				error.Address.u1 =
					(typeof value !== 'undefined' && value.length < 3) ||
					value.length > 100 ||
					!value.match(/^[A-Z a-z]+$/)
						? '*Please enter a valid  Address'
						: '';

				error.Address.u2 = !value ? '*This field must not be empty!' : '';
				break;

			default:
				break;
		}

		this.setState({
			fields,
			error,
			[name]: value
		});

		if (formvalid2(this.state)) {
			let fields = {};
			fields['Name'] = '';
			fields['State'] = '';
			fields['Address'] = '';
			fields['Description'] = '';
			this.setState({ fields: fields });
		}

		localStorage.setItem('Name', JSON.stringify(this.state.fields['Name']));
		localStorage.setItem('State', JSON.stringify(this.state.fields['State']));
		localStorage.setItem('Address', JSON.stringify(this.state.fields['Address']));
		localStorage.setItem('Description', JSON.stringify(this.state.fields['Description']));
	};

	onSubmit(e) {
		e.preventDefault();
	}
	render() {
		return (
			<div>
				<br />
				<br />
				<br />
				<br />
				<form noValidate className="row g-3 needs-validation mx-3">
					<div className="row">
						<div className="col-sm-1 " />

						<div className="col-12  col-xl-4  d-xl-none mb-5">
							<div class="p-3  rounded ms-3" style={{ border: '.1px solid #cd9a2d' }}>
								<div className="row m-2 mb-3" style={{ color: '#cd9a2d' }}>
									Description :
								</div>
								<div className="row m-2">
									The location and address of your accommodation will be sent to the guest after
									booking in the form of fields , so try to enter the information accurately and
									correctly. By selecting the country , city is also activated and allows you to
									select. Additional description of the location, including dirt road, landscape,
									access, etc. should be entered in the address section.
								</div>
							</div>
						</div>

						<br />
						<br />
						<br />
						<br />

						<div className="col-12 col-xl-7">
							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">Name :</label>
								</div>
								<div className="col-md-8">
									{' '}
									<input
										required
										fullWidth
										id="Name"
										label="Name"
										name="Name"
										placeholder="Name*"
										autoComplete="text"
										aria-describedby="inputGroup-sizing-sm"
										className={
											this.state.error.Name.u1.length > 0 ||
											this.state.error.Name.u2.length > 0 ? (
												'is-invalid form-control lg'
											) : (
												'form-control'
											)
										}
										value={this.state['Name']}
										onChange={this.formValChange}
									/>
									<div className="mt-3 ">
										{this.state.error.Name.u1.length > 0 && (
											<p className="err">
												{this.state.error.Name.u1}
												<br />
											</p>
										)}
										{this.state.error.Name.u2.length > 0 && (
											<p className="err">
												{this.state.error.Name.u2}
												<br />
											</p>
										)}
									</div>
								</div>
							</div>

							<hr class="dashed" />

							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">Country :</label>
								</div>
								<div className="col-md-8">
									<div>
										<Countries />
									</div>
								</div>
							</div>

							<hr class="dashed" />

							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">State :</label>
								</div>
								<div className="col-md-8">
									{' '}
									<input
										required
										fullWidth
										id="State"
										label="State"
										name="State"
										placeholder="State*"
										autoComplete="text"
										aria-describedby="inputGroup-sizing-sm"
										className={
											this.state.error.State.u1.length > 0 ||
											this.state.error.State.u2.length > 0 ? (
												'is-invalid form-control lg'
											) : (
												'form-control'
											)
										}
										value={this.state['State']}
										onChange={this.formValChange}
									/>
								</div>
							</div>

							<hr class="dashed" />

							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">Address :</label>
								</div>
								<div className="col-md-8">
									{' '}
									<input
										required
										fullWidth
										id="Address"
										label="Address"
										name="Address"
										placeholder="Address*"
										autoComplete="text"
										aria-describedby="inputGroup-sizing-sm"
										className={'form-control'}
										value={this.state['Address']}
										onChange={this.formValChange}
									/>
									<div className="mt-3 ">
										{this.state.error.Address.u1.length > 0 && (
											<p className="err">
												{this.state.error.Address.u1}
												<br />
											</p>
										)}
										{this.state.error.Address.u2.length > 0 && (
											<p className="err">
												{this.state.error.Address.u2}
												<br />
											</p>
										)}
									</div>
								</div>
							</div>

							<hr class="dashed" />

							<div className="row">
								<div className="col-md-4">
									<label className="ms-2 mt-1 form-label">Description :</label>
								</div>

								<div className="col-md-8">
									{' '}
									<input
										required
										fullWidth
										id="Description"
										label="Description"
										name="Description"
										placeholder="description*"
										autoComplete="text"
										aria-describedby="inputGroup-sizing-sm"
										className={
											this.state.error.Description.u1.length > 0 ||
											this.state.error.Description.u2.length > 0 ? (
												'is-invalid form-control lg'
											) : (
												'form-control'
											)
										}
										value={this.state['Description']}
										onChange={this.formValChange}
									/>
									<div className="mt-3 ">
										{this.state.error.Description.u1.length > 0 && (
											<p className="err">
												{this.state.error.Description.u1}
												<br />
											</p>
										)}
										{this.state.error.Description.u2.length > 0 && (
											<p className="err">
												{this.state.error.Description.u2}
												<br />
											</p>
										)}
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-xl-4 d-none d-xl-block">
							<div class="p-3  rounded ms-3" style={{ border: '.1px solid #cd9a2d' }}>
								<div className="row m-2 mb-3" style={{ color: '#cd9a2d' }}>
									Description :
								</div>
								<div className="row m-2">
									The location and address of your accommodation will be sent to the guest after
									booking in the form of fields , so try to enter the information accurately and
									correctly. By selecting the country , city is also activated and allows you to
									select. Additional description of the location, including dirt road, landscape,
									access, etc. should be entered in the address section.
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default HotelInfo;

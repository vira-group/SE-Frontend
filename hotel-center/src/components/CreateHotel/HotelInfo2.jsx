import React, { Component } from 'react';
import TimePickers from './TimePickers';

class HotelInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

	}

	render() {
		return (
			<div>
				<br />
				<br />
				<br />
				<br />
				<form noValidate onSubmit={this.onSubmit} className="row g-3 needs-validation mx-3">
					<div className="row">
						<div className="col-sm-1 " />

						<div className="col-12  col-xl-4  d-xl-none mb-5">
							<div class="p-3  rounded ms-3" style={{ border: '.1px solid #cd9a2d' }}>
								<div className="row m-2 mb-3" style={{ color: '#cd9a2d' }}>
									Description :
								</div>
								<div className="row m-2">
									Your accommodation can be an apartment, house, suite, villa, eco-lodge, guest house,
									hotel or cottage. Please select one of these items to specify its type to be
									displayed in the desired category.{' '}
								</div>
							</div>
						</div>

						<br />
						<br />
						<br />

						<TimePickers />

						<div className="col-12 col-xl-4 d-none d-xl-block">
							<div class="p-3  rounded ms-3" style={{ border: '.1px solid #cd9a2d' }}>
								<div className="row m-2 mb-3" style={{ color: '#cd9a2d' }}>
									Description :
								</div>
								<div className="row m-2">
									Your accommodation can be an apartment, house, suite, villa, eco-lodge, guest house,
									hotel or cottage. Please select one of these items to specify its type to be
									displayed in the desired category.{' '}
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

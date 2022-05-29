import React, { Component } from 'react';


class HotelInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};

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
									Accommodation pictures play an important role in better viewing and booking guests,
									so we suggest you upload the photos according to the instructions below. Keep the
									residence clean and tidy when shooting; As delivered to the guest. Preferably hold
									the camera horizontally when shooting. The number of acceptable images for the site
									is at least 5 images. Accommodation images include various spaces including common
									area, bedroom, yard, kitchen, landscape, bathroom and special facilities. Choose
									your best image as the index image.{' '}
								</div>
							</div>
						</div>

						<div className="col-12 col-xl-7" />

						<div className="col-12 col-xl-4 d-none d-xl-block">
							<div class="p-3  rounded ms-3" style={{ border: '.1px solid #cd9a2d' }}>
								<div className="row m-2 mb-3" style={{ color: '#cd9a2d' }}>
									Description :
								</div>
								<div className="row m-2">
									Accommodation pictures play an important role in better viewing and booking guests,
									so we suggest you upload the photos according to the instructions below. Keep the
									residence clean and tidy when shooting; As delivered to the guest. Preferably hold
									the camera horizontally when shooting. The number of acceptable images for the site
									is at least 5 images. Accommodation images include various spaces including common
									area, bedroom, yard, kitchen, landscape, bathroom and special facilities. Choose
									your best image as the index image.
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

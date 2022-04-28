import React, { Component } from 'react';

import '../../css/Hotelpage.css';
class reservation extends Component {
	constructor(props) {
		super(props);
	}
	state = {};
	render() {
		return (
			<div>
				<div className="containter">
					<div className="row justify-content-center ">
						<div className="col-12 col-md-4">
							<div className="card-containter">
								<div className="card">
									<div className="card-body">
										<div class="shadow p-3 mb-5 bg-body rounded">
											Regular shadowx <h5 className="card-title">Card title</h5>
											<p className="card-text">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</p>
											<button
												className="btn btn-primary"
												type="button"
												// disabled
											>
												{/* <span
											className="spinner-border spinner-border-sm"
											role="status"
											aria-hidden="true"
										/> */}
												Loading
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-8">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default reservation;

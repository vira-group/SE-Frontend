import React, { Component } from 'react';
import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css';
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
								{/* <div className="card"> */}
									<div className="card-body">
										<div class="shadow p-3 mb-5 bg-body rounded">
										

										<ion-icon name="calendar-outline"></ion-icon>
										<div className="">
												<hr className="m-3 hr-text" />
											</div><ion-icon name="calendar"></ion-icon><ion-icon name="wallet-outline"></ion-icon>ff
										<ion-icon name="calendar-outline"></ion-icon>
										<ion-icon name="calendar-outline"></ion-icon><i class="bi bi-calendar-date"></i>
											dd
											
											<div className="div">

											<span class='bi bi-calendar-date' style='color:#cd9a2d'></span>

											</div>
											<div className="">
												<hr className="m-3 hr-text" />
											</div>
											dd
											<div className="">
												<hr className="m-3 hr-text" />
											</div>
dd




{/* 										
										<h5 className="card-title">Card title</h5>
											<p className="card-text">
										
											</p>
											<div className="">
												<hr className="mb-0 mt-0 hr-text" />
											</div>
											<button
												className="btn btn-primary"
												type="button"
												// disabled
											>
												<span
											className="spinner-border spinner-border-sm"
											role="status"
											aria-hidden="true"
										/>
												Loading
											</button> */}


											
										</div>
									</div>
								{/* </div> */}
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

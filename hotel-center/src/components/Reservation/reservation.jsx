import React, { Component } from 'react';
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css';
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
								<div className="card-body">
									<div class="shadow p-3 mb-5 bg-body rounded">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-wallet2"
											viewBox="0 0 16 16"
										>
											<path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-calendar-date-fill"
											viewBox="0 0 16 16"
										>
											<path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
											<path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-person"
											viewBox="0 0 16 16"
										>
											<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-person-fill"
											viewBox="0 0 16 16"
										>
											<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
										</svg>

										<div className="">
											<hr className="m-3 hr-text" />
										</div>

										<i class="bi bi-calendar-date-fill" />
									</div>

									{/* <h5 className="card-title">Card title</h5>
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

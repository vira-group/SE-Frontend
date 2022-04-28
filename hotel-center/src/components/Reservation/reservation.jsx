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
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
</svg>


										<div className="">
												<hr className="m-3 hr-text" />
											</div>
											
											<i class="bi bi-calendar-date-fill"></i>

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

import React, { Component } from 'react';

class reservation extends Component {
	constructor(props) {
		super(props);
	}
	state = {};
	render() {
		return (
			<div>
				<div className="containter">
					{/* <div className="col-md-4">
                    hello</div>
                    <div className="col-md-8">
                    <div className="row-md-2">dfsd</div>
                    <div className="row-md-2">dfsd</div>
                    <div className="row-md-2">dfsd</div>
                    <div className="row-md-2">dfsd</div>
                    goog</div> */}

					<div className="row">
						<div className="col-12 col-md-4">
							<div className="row-12 row-md-4">
								<div className="card">
									<div className="card-body">
										<div className="d-flex justify-content-center">
											<div className="row">hello</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row-12 row-md-8">ww</div>
						</div>
						<div className="col-12 col-md-8">
							<div className="row-12 row-md-8">efr</div>
							<div className="row-12 row-md-4">rteyr</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default reservation;

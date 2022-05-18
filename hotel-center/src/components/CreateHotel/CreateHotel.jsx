import React, { Component } from 'react';
import Stepper from './Stepper';

const stepsArray = [
	// "Create your account",
	'Add personal info',
	'Add payment details',
	'Complete registration',
	'Registration complete'
];

class CreateHotel extends Component {
	constructor(props) {
		super(props);
	}

	state = {};

	handleClick(clickType) {
		const { currentStep } = this.state;
		let newStep = currentStep;
		clickType === 'next' ? newStep++ : newStep--;

		if (newStep > 0 && newStep <= 5) {
			this.setState({
				currentStep: newStep
			});
		}
	}

	render() {
		const { currentStep } = this.state;

		return (
			<div className="containter m-5">
				<div className="row-pt-5">
					<div className="row justify-content-center">
						<div className="col-12 col-md-8">
							<div className="card-body">
								<div className="shadow p-3 mb-5 bg-body rounded">
									{/* <div className="stepper-container-vertical">
										<Stepper
											direction="vertical"
											currentStepNumber={currentStep - 1}
											steps={stepsArray}
											stepColor="#ee5253"
										/>
									</div> */}
									<div className="stepper-container-horizontal">
										<Stepper
											direction="horizontal"
											currentStepNumber={currentStep - 1}
											steps={stepsArray}
											stepColor= "#cd9a2d"
										/>
									</div>
									<div className="buttons-container">
										<button onClick={() => this.handleClick()}>Previous</button>
										<button onClick={() => this.handleClick('next')}>Next</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="container d-none d-md-block" />    
            		{/* <div className="d-none d-md-block m-4" /> */}
				</div>
			</div>
		);
	}
}
export default CreateHotel;

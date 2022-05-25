import Stepper from './Stepper';
import React, { Component } from 'react';
// import Country from "./Countries";

import HotelInfo from './HotelInfo';
export default class steps extends Component {
	constructor() {
		super();

		this.state = {
			currentStep: 1

			};
	}

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
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<div className="card-body">
							<div className="shadow p-3 mb-5 bg-body rounded">
								<div className="stepper-container-horizontal d-none d-md-block">
									<Stepper
										direction="horizontal"
										currentStepNumber={currentStep - 1}
										steps={stepsArray}
										stepColor="#cd9a2d"
									/>
								</div>
                                    <HotelInfo></HotelInfo>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}



const stepsArray = [
	// "Create your account",
	'Add personal info',
	'Add payment details',
	'Complete registration',
	'Registration complete'
];




// import Stepper from './Stepper';
// import React, { Component } from 'react';
// // import Country from "./Countries";

// import HotelInfo from './HotelInfo';
// export default class CreateHotel extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			currentStep: 1

// 			};
// 	}

// 	handleClick(clickType) {
// 		const { currentStep } = this.state;
// 		let newStep = currentStep;
// 		clickType === 'next' ? newStep++ : newStep--;

// 		if (newStep > 0 && newStep <= 5) {
// 			this.setState({
// 				currentStep: newStep
// 			});
// 		}
// 	}

// 	render() {
// 		const { currentStep } = this.state;

// 		return (
// 			<div className="containter m-5">
// 				<div className="row justify-content-center">
// 					<div className="col-12 col-md-8">
// 						<div className="card-body">
// 							<div className="shadow p-3 mb-5 bg-body rounded">
// 								<div className="stepper-container-horizontal">
// 									<Stepper
// 										direction="horizontal"
// 										currentStepNumber={currentStep - 1}
// 										steps={stepsArray}
// 										stepColor="#cd9a2d"
// 									/>
// 								</div>
// <HotelInfo></HotelInfo>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// const stepsArray = [
// 	// "Create your account",
// 	'Add personal info',
// 	'Add payment details',
// 	'Complete registration',
// 	'Registration complete'
// ];
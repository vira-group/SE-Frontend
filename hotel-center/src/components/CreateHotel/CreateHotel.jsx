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

import React, { Component } from 'react';
import pic from '../../statics/img/Hotel_Booking.gif';
class CreateHotel extends Component {
	constructor(props) {
		super(props);
	}
	state = {};
	render() {
		return (
			<div class=" bg-white">		
				<div className="container ">
				<div className="row">
					<br />
					<br />
					<p />
					<br />
					<br />
					<p />
					<p />
				</div>
				<div className="row align-items-center "   >
				{/* <div class="p-3  rounded ms-3" > */}



				<div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3 d-md-none">
						<img
							className="w-100 mx-md-0 mx-auto w3-animate-zoom"
							// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev44Zk2qkotqm2DH-0qrckRiyH6kzjOIukQ&usqp=CAU"
							src={pic}
							style={{ borderRadius: '10%' }}
							alt="Illustration"
						/>
					</div>
				

					<div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center" >
						<div className="mx-md-0 mx-auto">
							<h2 className="mb-md-5 mb-4">چرا باید کامیونیتی بسازیم؟</h2>

							<div className="d-md-flex align-items-start d-block mb-4 pb-2">
								<img
									className="me-md-4 mb-md-0 mb-4"
									//src={miniPic1}
									alt="Icon"
								/>
								<div className="ps-md-2">
									<h3 className="h6 mb-2">اشتراک گزاری پاراگراف</h3>
									<p className="mb-0 fs-sm">
										با ساخت کامیونیتی شما میتوانید با دوستان خود پاراگراف های خود را به اشتراک
										بگذارید و منبعی از پاراگراف های خاص را جمع آوری کنید
									</p>
								</div>
							</div>

							<div className="d-md-flex align-items-start d-block mb-4 pb-2">
								<img
									className="me-md-4 mb-md-0 mb-4"
									//{miniPic2}
									alt="Icon"
								/>
								<div className="ps-md-2">
									<h3 className="h6 mb-2">رقابت با سایر کامیونیتی ها</h3>
									<p className="mb-0 fs-sm">
										شما میتوانید با سایر کامیونیتی ها رقابت کنید و اعضای خود را افزایش دهید
									</p>
								</div>
							</div>

							<div className="d-md-flex align-items-start d-block">
								<img
									className="me-md-4 mb-md-0 mb-4"
									//src={miniPic3}
									alt="Icon"
								/>
								<div className="ps-md-2">
									<h3 className="h6 mb-2">داشتن فروشگاه کتاب</h3>
									<p className="mb-0 fs-sm">
										بعد از ساخت کامیونیتی شما میتوانید یک فروشگاه کتاب بسازید و از طریق آن کسب درآمد
										کنید
									</p>
								</div>
							</div>
						</div>
					</div>

				{/* </div> */}
					<div className="d-none d-md-block col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
						<img
							className="w-100 mx-md-0 mx-auto w3-animate-zoom"
							// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev44Zk2qkotqm2DH-0qrckRiyH6kzjOIukQ&usqp=CAU"
							src={pic}
							style={{ borderRadius: '10%' }}
							alt="Illustration"
						/>
					</div>
				</div>
				<div className="row">
					<br />
					<br />
				</div>
				<div className="row align-items-center">
					<div className="col" />
					<div className="col-12 col-sm-10 col-lg-5">
						<a href="/CreateHotel/steps" 	>
							<button type="button" class="w-100 btn btn-lg btn-dark"
						>
								Create your hotel now!{' '}
							</button>
						</a>
					</div>
					<div className="col" />
					<br />
					<br />
					<p />
					<br />
					<br />
					<p />
				</div>
			</div>
			</div>

		);
	}
}

export default CreateHotel;
<div className="container">
	<div className="row">
		<br />
		<br />
		<p />
		<br />
		<br />
		<p />
		<p />
	</div>
	<div className="row align-items-center">
		<div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
			<img
				className="w-100 mx-md-0 mx-auto w3-animate-zoom"
				// src={CreatecommunityPic1}
				alt="Illustration"
			/>
		</div>
		<div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
			<div className="mx-md-0 mx-auto">
				<h2 className="mb-md-5 mb-4">چرا باید کامیونیتی بسازیم؟</h2>

				<div className="d-md-flex align-items-start d-block mb-4 pb-2">
					<img
						className="me-md-4 mb-md-0 mb-4"
						//src={miniPic1}
						alt="Icon"
					/>
					<div className="ps-md-2">
						<h3 className="h6 mb-2">اشتراک گزاری پاراگراف</h3>
						<p className="mb-0 fs-sm">
							با ساخت کامیونیتی شما میتوانید با دوستان خود پاراگراف های خود را به اشتراک بگذارید و منبعی
							از پاراگراف های خاص را جمع آوری کنید
						</p>
					</div>
				</div>

				<div className="d-md-flex align-items-start d-block mb-4 pb-2">
					<img
						className="me-md-4 mb-md-0 mb-4"
						//src={miniPic2}
						alt="Icon"
					/>
					<div className="ps-md-2">
						<h3 className="h6 mb-2">رقابت با سایر کامیونیتی ها</h3>
						<p className="mb-0 fs-sm">
							شما میتوانید با سایر کامیونیتی ها رقابت کنید و اعضای خود را افزایش دهید
						</p>
					</div>
				</div>

				<div className="d-md-flex align-items-start d-block">
					<img
						className="me-md-4 mb-md-0 mb-4"
						//src={miniPic3}
						alt="Icon"
					/>
					<div className="ps-md-2">
						<h3 className="h6 mb-2">داشتن فروشگاه کتاب</h3>
						<p className="mb-0 fs-sm">
							بعد از ساخت کامیونیتی شما میتوانید یک فروشگاه کتاب بسازید و از طریق آن کسب درآمد کنید
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="row">
		<br />
		<br />
	</div>
	<div className="row align-items-center">
		<div className="col" />
		<div className="col-12 col-sm-10 col-lg-5">
			<a href="#communityForm">
				<button type="button" class="w-100 btn btn-lg btn-warning">
					همین حالا کامیونیتی خود را بسازید
				</button>
			</a>
		</div>
		<div className="col" />
		<br />
		<br />
		<p />
		<br />
		<br />
		<p />
	</div>
</div>;

import pic1 from './../../statics/img/pic (1).jpg';
import pic2 from './../../statics/img/pic (2).jpg';
import pic3 from './../../statics/img/pic (3).jpg';
import pic4 from './../../statics/img/pic (4).jpg';
import pic5 from './../../statics/img/pic (5).jpg';
import pic6 from './../../statics/img/pic (6).jpg';
import pic7 from './../../statics/img/pic (7).jpg';
import pic8 from './../../statics/img/pic (8).jpg';
import { one_hotel_connection } from '../../Utils/connection';
import * as React from 'react';
import {
	Avatar,
	Link,
	Grid,
	Box,
	Button,
	Typography,
	ContainerAccordion,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Container,
	Divider,
	TextField,
	CircularProgress
} from '@mui/material';
import Helmet from 'react-helmet';
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';
import ChairRoundedIcon from '@mui/icons-material/ChairRounded';
import ShowerRoundedIcon from '@mui/icons-material/ShowerRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import SignalWifi4BarLockRoundedIcon from '@mui/icons-material/SignalWifi4BarLockRounded';
import RoomServiceRoundedIcon from '@mui/icons-material/RoomServiceRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BedroomChildRoundedIcon from '@mui/icons-material/BedroomChildRounded';
import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './hotelPage.css';
import { srLatn } from 'date-fns/locale';

import ResponsiveDatePickers from './ResponsiveDatePickers';

import SimpleAccordion from './accordion';

import FmdGoodIcon from '@mui/icons-material/FmdGood';

class Hotelpage extends React.Component {
	constructor(props) {
		super(props);
	}
	state = {
		id: 1,
		name: 'Nobu',
		header: null,
		city: 'Tehran',
		state: 'Tehran',
		description:
			'Beautiful 2 room apartment with a garden of the same size all to yourself. Fully equipped kitchen and very decent bathroom. Washing machine included. The apartment is situated in the peaceful Spaarndammer area. Ten minutes walking from Central Station, one minute from the best park in Amsterdam, the Westerpark and 5 minutes to the famous canals or the IJ canal',
		rate: '5.0',
		phone_numbers: '09123433300',
		start_date: '2022-04-20',
		alldate: []
	};
	async componentDidMount() {
		var splitted = window.location.toString().split('/');
		await this.setState({ id: decodeURIComponent(splitted.pop()) });
		decodeURIComponent(this.state.id);
		//window.alert(this.state.id);
		one_hotel_connection(this.state.id).then((res) => {
			this.setState({
				city: res.city
			});
		});
	}

	render() {
		return (
			<div className="div">
				<div className="div">
					<div className="div">
						<div className="container d-none d-md-block">
							<br />
							<br />
							<br />
							<br />
							<div className="row-md-12">
								<h2>Nobu Hotel London Portman Square</h2>
							</div>
							<div className="row ">
								<div className="col-5 icon  gx-3 col-sm-1
								" style={{ display: 'flex' }}>
									<FmdGoodIcon />
									{this.state.city}
								</div>
								<br />
								<div className="col-12 icon col-md-2 
							" style={{ display: 'flex' }}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-star-fill"
										viewBox="0 0 16 16"
									>
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
									</svg>{' '}
									4.5
								</div>
							</div>

							<div className="row">
								<div className="col-6">
									<div className="row">
										<div className="col-12 gy-3">
											<img
												src={pic1}
												className="img-fluid"
												alt="..."
												style={{ borderRadius: '20px' }}
											/>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="row">
										<div className="col-6 gy-3">
											<img
												src={pic5}
												className="img-fluid"
												alt="..."
												style={{ borderRadius: '20px' }}
											/>
										</div>
										<div className="col-6 gy-3">
											<img
												src={pic2}
												className="img-fluid"
												alt="..."
												style={{ borderRadius: '20px' }}
											/>
										</div>

										<div className="col-6 gy-3">
											<img
												src={pic3}
												className="img-fluid"
												alt="..."
												style={{ borderRadius: '20px' }}
											/>
										</div>
										<div className="col-6 gy-3">
											<img
												src={pic4}
												className="img-fluid"
												alt="..."
												style={{ borderRadius: '20px' }}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div id="carouselExampleIndicators" className="carousel slide d-md-none" data-bs-ride="carousel">
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							/>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							/>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							/>
						</div>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src={pic2} className="d-block w-100" alt="..." />
							</div>
							<div className="carousel-item">
								<img src={pic6} className="d-block w-100" alt="..." />
							</div>
							<div className="carousel-item">
								<img src={pic3} className="d-block w-100" alt="..." />
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>

				<div className="container">
					<Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }} />

					<br />

					<div className="row">
						{/* <div className="div" style={{ display: 'flex', top: '0' }}> */}
						<div className="col-12 col-md-4 " style={{ marginBottom: 10 }}>
							<div style={{ position: 'sticky', top: '11vh' }}>
								<ResponsiveDatePickers />
							</div>
						</div>
						{/* </div> */}

						{/* <div className="col-12 d-md-none">
							<br />
						</div> */}

						<div className="col-12 col-md-8">
							<SimpleAccordion />
						</div>
					</div>

					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</div>
		);
	}
}

export default Hotelpage;

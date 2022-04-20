import pic1 from './../../statics/img/pic (1).jpg';
import pic2 from './../../statics/img/pic (2).jpg';
import pic3 from './../../statics/img/pic (3).jpg';
import pic4 from './../../statics/img/pic (4).jpg';
import pic5 from './../../statics/img/pic (5).jpg';
import pic6 from './../../statics/img/pic (6).jpg';
import pic7 from './../../statics/img/pic (7).jpg';
import pic8 from './../../statics/img/pic (8).jpg';

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

export default function Hotelpage() {
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
						<div className="row">
							<div className="col-md-1 m-100">
								<FmdGoodIcon />
							</div>
							<div className="col-md-1">
								<h5>Tehran</h5>
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
					<div className="col-12 col-md-4 "  style={{  marginBottom : 2 }}  >
						<div style={{ position: 'sticky', top: '11vh' }}>
							<ResponsiveDatePickers />
						</div>
					</div>
					{/* </div> */}

					<div className="col-12 d-md-none">
				
						<br />
					</div>

					<div className="col-12 col-md-8">
						<SimpleAccordion />
					</div>
				</div>

				{/* <Grid container spacing={3}>
					<Grid item xs={8}>
						<div className="row md-8">
							<SimpleAccordion />
						</div>
					</Grid>

					<Grid item xs={3.8}>
						<ResponsiveDatePickers />
					</Grid>
				</Grid> */}

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

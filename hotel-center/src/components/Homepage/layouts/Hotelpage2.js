import * as React from 'react';
import Feedback from './../../Comment/Feedback';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { GoldenTextField } from '../../../theme/GoldenTextField';
import Popover from '@mui/material/Popover';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Box, CircularProgress } from '@mui/material';
import Helmet from 'react-helmet';
import Rating from '@mui/material/Rating';
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';
import ChairRoundedIcon from '@mui/icons-material/ChairRounded';
import ShowerRoundedIcon from '@mui/icons-material/ShowerRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import SignalWifi4BarLockRoundedIcon from '@mui/icons-material/SignalWifi4BarLockRounded';
import RoomServiceRoundedIcon from '@mui/icons-material/RoomServiceRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import AlarmIcon from '@mui/icons-material/Alarm';
import { useState, useEffect } from 'react';
import '../../../css/Hotelpage2.css';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { cookies, makeURL, set_cookie } from '../../../Utils/common';
import references from '../../../assets/References.json';
import Roomcard from './Roomcard';

const labels = {
	0.5: 'Useless',
	1: 'Useless+',
	1.5: 'Poor',
	2: 'Poor+',
	2.5: 'Ok',
	3: 'Ok+',
	3.5: 'Good',
	4: 'Good+',
	4.5: 'Excellent',
	5: 'Excellent+'
};

const Icons = {
	'Taxi service': <LocalTaxiRoundedIcon />,
	Sofa: <ChairRoundedIcon />,
	Bathroom: <ShowerRoundedIcon />,
	Telephone: <PhoneRoundedIcon />,
	WiFi: <SignalWifi4BarLockRoundedIcon />,
	'Room service': <RoomServiceRoundedIcon />,
	Television: <TvRoundedIcon />,
	Gym: <FitnessCenterRoundedIcon />,
	Restaurant: <RestaurantMenuRoundedIcon />,
	Bar: <LocalBarIcon />
};

const oneDay = 24 * 60 * 60 * 1000;
export default function Hotelpage(props) {
	const value = 3.5;

	const [ hotel, setHotel ] = useState(null);
	const [ rank, setRank ] = useState(null);
	const [ facility, setFacility ] = useState(null);
	const [ f1, setf1 ] = useState(null);
	const [ f2, setf2 ] = useState(null);
	const [ rooms, setRooms ] = useState(null);
	const [ checkin, setCheckin ] = useState('');
	const [ checkout, setCheckout ] = useState('');
	const [ com_id, setid ] = useState('');
	const [ checkinDate, setCheckinDate ] = useState(null);
	const [ checkoutDate, setCheckoutDate ] = useState(null);
	const [ anchor, setAnchor ] = React.useState(null);
	const [ numberOfAdults, setNumberOfAdults ] = React.useState(1);
	const [ numberOfChildren, setNumberOfChildren ] = React.useState(0);

	const [ person, setperson ] = useState(1);

	const handleClick = (event) => {
		setAnchor(event.currentTarget);
	};
	const handleClose = () => {
		setAnchor(null);
	};

	// console.log(checkinDate, 'aya in');

	// console.log(checkoutDate, 'aya in');

	const handlesearch = () => {
		const queryString = window.location.toString();
		const hotelid = queryString.slice(-1);

		setRooms(JSON.parse(localStorage.getItem('rooms')));

		axios
			.get(makeURL('/hotel/' + hotelid + '/search/'), {
				headers: {
					Authorization: cookies.get('Authorization')
				},
				params: {
					size: numberOfAdults + numberOfChildren,
					check_in: '2021-07-19',
					check_out: '2023-07-25'
				}
			})
			.then((response) => {
				console.log('rooms response: handle serach', response.data);
				setRooms(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		// axios
		// 	.get(makeURL(references.url_hotel_search), {
		// 		headers: {
		// 			Authorization: cookies.get('Authorization')
		// 		},
		// 		params: {
		// 			size: numberOfAdults + numberOfChildren,
		// 			check_in: '2022-07-19',
		// 			check_out: '2022-07-25'
		// 		}
		// 	})
		// 	.then((response) => {
		// 		console.log('after_search', response.data);
		// 		setRooms(response.data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	};

	const handleChangeNumber = (actionType, guestType) => {
		actionType === 'dec'
			? guestType === 'adults'
				? setNumberOfAdults(numberOfAdults > 1 ? numberOfAdults - 1 : 1)
				: setNumberOfChildren(numberOfChildren > 0 ? numberOfChildren - 1 : 0)
			: guestType === 'adults'
				? setNumberOfAdults(numberOfAdults + 1)
				: setNumberOfChildren(numberOfChildren + 1);
		setperson(numberOfAdults + numberOfChildren + 1);
		// localStorage.setItem('i3', JSON.stringify(numberOfAdults + numberOfChildren + 1));
	};

	const open = Boolean(anchor);
	const id = open ? 'popover' : undefined;

	useEffect(() => {
		const queryString = window.location.toString();
		const hotelid = queryString.slice(-1);
		setid(hotelid);
		axios
			.get(makeURL(references.url_one_hotel + hotelid + '/'), {
				headers: {
					Authorization: cookies.get('Authorization')
				}
			})
			.then((response) => {
				console.log('this request is for hotel facilities:', response.data);
				setHotel(response.data);
				setFacility(response.data.facilities);
				setf1(response.data.facilities.slice(0, 4));
				setf2(response.data.facilities.slice(4, 8));
				setCheckin(response.data.check_in_range);
				setCheckout(response.data.check_out_range);
				setRank(response.data.rate);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		const queryString = window.location.toString();
		const hotelid = queryString.slice(-1);

		setRooms(JSON.parse(localStorage.getItem('rooms')));

		axios
			.get(makeURL(references.url_hotelrooms + hotelid + '/'), {
				headers: {
					Authorization: cookies.get('Authorization')
				},
				params: {
					size: numberOfAdults + numberOfChildren,
					check_in: '2021-07-19',
					check_out: '2023-07-25'
				}
			})
			.then((response) => {
				console.log('rooms response:use eefect', response.data);
				setRooms(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return hotel ? (
		<div>
			<Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }} />
			<div className="container">
				<div className="row mt-5">
					<div className="col-lg-4">
						<div className="card  card1 " title="AccordionSummery">
							<div className="card-body" style={{ position: 'sticky', top: '11vh' }} title="card-body">
								<div className="col col-md-12 align-items-center" title="align-items-center">
									<div className="d-flex justify-content-center" title="justifycontentcenter">
										<div className="row">
											<div className="col-6">
												<LocalizationProvider dateAdapter={AdapterDateFns} title="L">
													<DatePicker
														title="DatePicker"
														disablePast
														format="DD/MM/YYYY"
														maxDate={
															checkoutDate ? (
																new Date(checkoutDate.getTime() - oneDay)
															) : null
														}
														label="Check in"
														value={checkinDate}
														style={{ borderRadius: '5px' }}
														onChange={(newValue) => {
															setCheckinDate(newValue);

															// localStorage.setItem('i1', JSON.stringify(checkinDate));
														}}
														renderInput={(params) => (
															<GoldenTextField
																{...params}
																variant="outlined"
																title="GoldenTextField"
															/>
														)}
													/>
												</LocalizationProvider>
											</div>
											<div className="col-6">
												<LocalizationProvider dateAdapter={AdapterDateFns}>
													<DatePicker
														title="DatePicker"
														disablePast
														format="DD/MM/YYYY"
														minDate={
															checkinDate ? (
																new Date(checkinDate.getTime() + oneDay)
															) : null
														}
														label="Check out"
														value={checkoutDate}
														style={{ borderRadius: '5px' }}
														onChange={(newValue) => {
															setCheckoutDate(newValue);
															// console.log(checkoutDate, 'aya out');
															// localStorage.setItem('i1', JSON.stringify(checkinDate));
														}}
														renderInput={(params) => (
															<GoldenTextField
																{...params}
																variant="outlined"
																title="GoldenTextField"
															/>
														)}
													/>
												</LocalizationProvider>
											</div>
										</div>
									</div>
									<br />

									<div className="d-flex justify-content-center">
										<div className="row col-12">
											<GoldenTextField
												aria-describedby={id}
												variant="outlined"
												onClick={handleClick}
												label="Number of guests"
												value={
													numberOfAdults + ' adults' + ' - ' + numberOfChildren + ' children'
												}
												placeholder="0 adults - 0 children"
											/>
										</div>
									</div>

									<Popover
										title="Popover"
										id={id}
										open={open}
										anchorEl={anchor}
										onClose={handleClose}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'right'
										}}
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right'
										}}
									>
										<div className="p-3 number-of-guests-form" title="number-of-guests-form">
											<div className="mb-3 d-flex align-items-center">
												<p className="mb-0 me-auto" title="r">
													{' '}
													Adults
												</p>
												<button
													title="button"
													type="button"
													className="btn btn-primary decrease-button"
													onClick={() => handleChangeNumber('dec', 'adults')}
													disabled={numberOfAdults <= 1}
												>
													<span>
														<RemoveIcon />
													</span>
												</button>
												<p className="mb-0 px-3">{numberOfAdults}</p>
												<button
													type="button"
													className="btn btn-primary increase-button"
													onClick={() => handleChangeNumber('inc', 'adults')}
												>
													<span>
														<AddIcon titel="AddIcon" />
													</span>
												</button>
											</div>
											<div className="d-flex  align-items-center">
												<p className="mb-0 me-auto">Children</p>
												<button
													type="button"
													className="btn btn-primary decrease-button"
													onClick={() => handleChangeNumber('dec', 'children')}
													disabled={numberOfChildren <= 0}
												>
													<span>
														<RemoveIcon />
													</span>
												</button>
												<p className="mb-0 px-3">{numberOfChildren}</p>
												<button
													type="button"
													className="btn btn-primary increase-button"
													onClick={() => handleChangeNumber('inc', 'children')}
												>
													<span>
														<AddIcon />
													</span>
												</button>
											</div>
										</div>
									</Popover>

									<br />

									<div className="d-flex justify-content-center">
										<div className="row w-100">
											<button className="btn btn-dark" title="btn-dark" onClick={handlesearch}>
												{' '}
												check availability
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-8">
						<div className="row">
							<h3 className="mb-3 mt-3">Facilities of the hotel</h3>
							<div className="col">
								<div className="mb-3 row">
									<div className="col">
										{f1 ? (
											f1.map((f) => (
												<div className="mb-3 row">
													<div className="col">{f.name}</div>
													<div className="col">{Icons[f.name]}</div>
												</div>
											))
										) : null}
									</div>
									<div className="col">
										{f2 ? (
											f2.map((f) => (
												<div className="mb-3 row">
													<div className="col">{f.name}</div>
													<div className="col">{Icons[f.name]}</div>
												</div>
											))
										) : null}
									</div>
								</div>
							</div>
						</div>
						<button
							type="button"
							className="mb-3 btn btn-secondary room-facilities"
							data-bs-toggle="modal"
							data-bs-target="#exampleModal"
						>
							See all facilities
						</button>
						<div
							className="modal fade"
							id="exampleModal"
							tabindex="-1"
							aria-labelledby="AllFacilities"
							aria-hidden="true"
						>
							<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="AllFacilities">
											Facilities of the hotel
										</h5>
										<button
											type="button"
											className="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										/>
									</div>
									<div className="modal-body">
										<div className="container">
											{facility ? (
												facility.map((f) => (
													<div className="mb-3 row">
														<div className="col">{f.name}</div>
														<div className="col" style={{ textAlign: 'right' }}>
															{Icons[f.name]}
														</div>
													</div>
												))
											) : null}
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="">
							<hr className="mb-0 mt-0 hr-text" />
						</div>

						<h3 className="mb-3 mt-3">Available rooms</h3>
						{rooms ? (
							rooms.map((r) => (
								<Roomcard
									getin={checkinDate}
									getout={checkoutDate}
									person={person}
									name={r.hotel_info.name}
									city={r.hotel_info.city}
									id={r.id}
									option={r.option}
									price={r.price}
									sleeps={r.sleeps}
									type={r.type}
									roomfacilities={r.room_facilities}
									size={r.size}
								/>
							))
						) : null}
						<div className="">
							<hr className="mb-0 mt-0 hr-text" />
						</div>

						<div className="row mt-3 mb-3">
							<h3 className="mb-3 mt-3 ms-1">Hotel rules</h3>
							<div className="mb-3 ms-3 me-2 card rule-card" style={{ width: '15rem' }}>
								<div className="card-body">
									<h6 className="card-subtitle mb-2 text-muted">
										<AlarmIcon fontSize="large" />
									</h6>
									<h5 className="card-title">Check in time</h5>
									<p className="card-text">{checkin}</p>
								</div>
							</div>
							<div className="mb-3 card rule-card" style={{ width: '15rem' }}>
								<div className="card-body">
									<h6 className="card-subtitle mb-2 text-muted">
										<AlarmIcon fontSize="large" />
									</h6>
									<h5 className="card-title">Check out time</h5>
									<p className="card-text">{checkout}</p>
								</div>
							</div>
						</div>

						<div className="">
							<hr className="mb-0 mt-0 hr-text" />
						</div>

						{/* <br></br>
<br></br> */}
						<br />

						<div className="col d-inline-flex">
							<h5>Feedback and comments</h5>
							<Box
								sx={{
									width: 200,
									display: 'flex',
									alignItems: 'center',
									marginBottom: '10px',
									marginLeft: '5px'
								}}
							>
								<Rating
									name="text-feedback"
									value={rank}
									readOnly
									precision={0.5}
									emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
								/>
								<Box sx={{ ml: 2 }}>{labels[value]}</Box>
							</Box>
						</div>

						<Feedback id={com_id} />
					</div>
				</div>
			</div>
		</div>
	) : (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '45vh'
			}}
		>
			<CircularProgress size="5rem" style={{ color: '#cd9a2d' }} />
		</Box>
	);
}

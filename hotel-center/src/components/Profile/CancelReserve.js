import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { cookies, makeURL, set_cookie } from '../../Utils/common';
import references from '../../assets/References.json';
import { Box, CircularProgress } from '@mui/material';
import '../../css/Profile.css';
import MyhotelsCard from './Myhotelscard';
import Sidebar from './Sidebar';
import image1 from '../../statics/img/pics/add_files.svg';
import { setISODay } from 'date-fns';

export default function CancelReserve(props) {
	const handleClick = () => {
		console.log('hotel id: ', props.id);
		axios
			.post(
				makeURL('/hotel/cancelreserve/'),
				{
					reserve: props.id
				},
				{
					headers: {
						Authorization: cookies.get('Authorization')
					}
				}
			)
			.then((response) => {
				console.log(response.data, 'canceled');
				// setHotel(hotel.filter((e) => e.id !== props.id));
			})
			.catch((error) => {
				console.log(error, 'cancel error');
			});
	};

	return (
		<div class="col">
			<div class="card h-100">
				{/* <img src={props.img} class="card-img-top" alt="..." /> */}
				<div class="card-body">
					<h5 class="card-title">"dd"</h5>
					<p class="card-text">"ddd</p>
				</div>
				<div className="card-footer myhotels">
					<button type="button" className="btn btn-primary view-hotel-button" onClick={handleClick}>
						Cancel Reserve
					</button>
				</div>
			</div>
		</div>
	);
}

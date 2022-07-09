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
import CancelReserve  from './CancelReserve';
export default function ReservedRooms(props) {
	const [ hotel, setHotel ] = useState(null);
	const [ room, setroom ] = useState(null);
	const [ start, setstart ] = useState(null);
	const [ end, setend ] = useState(null);
	const [ id, setid ] = useState('');
	const handleClick = () => {
		console.log('hotel id: ', id);
		axios
			.post(
				makeURL('/hotel/cancelreserve/'),
				{
					reserve: id
				},
				{
					headers: {
						Authorization: cookies.get('Authorization')
					}
				}
			)
			.then((response) => {
				console.log(response.data, 'canceled');
				setHotel(hotel.filter((e) => e.id !== id));
			})
			.catch((error) => {
				console.log(error, 'cancel error');
			});
	};

	useEffect(() => {
		axios
			.get(makeURL('/hotel/reserve/'), {
				headers: {
					Authorization: cookies.get('Authorization')
				}
			})
			.then((response) => {
				console.log('res roooms ', response.data);
				setHotel(response.data);
			})
			.catch((error) => {
				console.log('error: ', error);
			});
	}, []);

	return (
		<div className="container">
			<div className="row pt-5">
				<div className="col-lg-3">
					<Sidebar />
				</div>
				<div className="col-lg-9">
					<div class="row row-cols-1 row-cols-md-3 g-4">
						{hotel ? (
							hotel.map((h) => (
							
                            <CancelReserve 
                            id = {h.id}>

                            </CancelReserve>
                            ))
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}

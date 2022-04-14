import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Popover from '@mui/material/Popover';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { GoldenTextField } from '../../theme/GoldenTextField';

import './hotelPage.css';
import { margin, positions, spacing, textAlign } from '@mui/system';
import { alignProperty } from '@mui/material/styles/cssUtils';

function SearchForm(props) {
	const [ checkinDate, setCheckinDate ] = useState(null);
	const [ checkoutDate, setCheckoutDate ] = useState(null);

	const [ anchor, setAnchor ] = React.useState(null);
	const [ numberOfAdults, setNumberOfAdults ] = React.useState(1);
	const [ numberOfChildren, setNumberOfChildren ] = React.useState(0);

	const handleClick = (event) => {
		setAnchor(event.currentTarget);
	};

	const handleClose = () => {
		setAnchor(null);
	};

	const handleChangeNumber = (actionType, guestType) => {
		actionType === 'dec'
			? guestType === 'adults'
				? setNumberOfAdults(numberOfAdults > 1 ? numberOfAdults - 1 : 1)
				: setNumberOfChildren(numberOfChildren > 0 ? numberOfChildren - 1 : 0)
			: guestType === 'adults'
				? setNumberOfAdults(numberOfAdults + 1)
				: setNumberOfChildren(numberOfChildren + 1);
	};

	const open = Boolean(anchor);
	const id = open ? 'popover' : undefined;

	return (
		<div className="card  card1 mt-3">
			<div className="card-body">
				<div className="col col-md-12 align-items-center">
					<div className="row align-items-center">
						<div className="col">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DatePicker
									disablePast
									label="Check in"
									value={checkinDate}
									onChange={(newValue) => {
										setCheckinDate(newValue);
									}}
									renderInput={(params) => (
										<GoldenTextField {...params} variant="outlined" className="md-6" />
									)}
								/>
							</LocalizationProvider>
						</div>


						<div className="col">

							<LocalizationProvider dateAdapter={AdapterDateFns}
              >
								<DatePicker
									disablePast
									label="Check out"
									value={checkoutDate}
									onChange={(newValue) => {
										setCheckoutDate(newValue);
									}}
									renderInput={(params) => (
										<GoldenTextField {...params} variant="outlined" className="md-6" />
									)}
								/>
							</LocalizationProvider>
						</div>
					</div>

					<div className="row align-items-center">
						<GoldenTextField
							// className="ms-3"
              className="mx-auto"
              // className="md-6"
							sx={{ margin: 3 }}
							aria-describedby={id}
							variant="outlined"
							onClick={handleClick}
							label="Number of guests"
							value={numberOfAdults + ' adults' + ' - ' + numberOfChildren + ' children'}
							placeholder="0 adults - 0 children"
						/>
					</div>

					<Popover
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
						<div className="p-3 number-of-guests-form">
							<div className="mb-3 d-flex align-items-center">
								<p className="mb-0 me-auto">Adults</p>
								<button
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
										<AddIcon />
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

					<div className="row">
						<button className="btn btn-primary bttn">rooms</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchForm;

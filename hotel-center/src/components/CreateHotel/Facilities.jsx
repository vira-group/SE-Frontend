// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';

// export default function Facilities() {
// 	const [ checked, setChecked ] = React.useState([ true, false ]);

// 	const handleChangeAll = (event) => {
// 		setChecked([ event.target.checked, event.target.checked , event.target.checked , event.target.checked , event.target.checked , event.target.checked , event.target.checked , event.target.checked , event.target.checked , event.target.checked , event.target.checked , event.target.checked , event.target.checked ]);
// 	};

	
// 	const handleChange0 = (event) => {
// 		setChecked([ checked[0], event.target.checked ]);
// 	};
// 	const handleChange1 = (event) => {
// 		setChecked([ checked[1], event.target.checked ]);
// 	};
// 	const handleChange2 = (event) => {
// 		setChecked([ checked[2], event.target.checked ]);
// 	};
// 	const handleChange3 = (event) => {
// 		setChecked([ checked[3], event.target.checked ]);
// 	};
// 	const handleChange4 = (event) => {
// 		setChecked([ checked[4], event.target.checked ]);
// 	};

// 	const handleChange5 = (event) => {
// 		setChecked([ checked[5], event.target.checked ]);
// 	};
// 	const handleChange6 = (event) => {
// 		setChecked([ checked[6], event.target.checked ]);
// 	};
// 	const handleChange7 = (event) => {
// 		setChecked([ checked[7], event.target.checked ]);
// 	};
// 	const handleChange8 = (event) => {
// 		setChecked([ checked[8], event.target.checked ]);
// 	};
// 	const handleChange9 = (event) => {
// 		setChecked([ checked[9], event.target.checked ]);
// 	};
// 	const handleChange10 = (event) => {
// 		setChecked([ checked[10], event.target.checked ]);
// 	};
// 	const handleChange11 = (event) => {
// 		setChecked([ checked[11], event.target.checked ]);
// 	};
// 	const handleChange12 = (event) => {
// 		setChecked([ checked[12], event.target.checked ]);
// 	};
// 	const handleChange13 = (event) => {
// 		setChecked([ checked[13], event.target.checked ]);
// 	};

// 	const children = (
// 		<Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
// 			<FormControlLabel
// 				label="Parking"
// 				control={
// 					<Checkbox
// 						checked={checked[0]}
// 						onChange={handleChange0}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>

// 			<FormControlLabel
// 				label="Restaurant"
// 				control={
// 					<Checkbox
// 						checked={checked[1]}
// 						onChange={handleChange1}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			<FormControlLabel
// 				label="Pets allowed"
// 				control={
// 					<Checkbox
// 						checked={checked[2]}
// 						onChange={handleChange2}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			<FormControlLabel
// 				label="Room service"
// 				control={
// 					<Checkbox
// 						checked={checked[3]}
// 						onChange={handleChange3}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			<FormControlLabel
// 				label="24-hour front desk"
// 				control={
// 					<Checkbox
// 						checked={checked[4]}
// 						onChange={handleChange4}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			<FormControlLabel
// 				label="Fitness centre"
// 				control={
// 					<Checkbox
// 						checked={checked[5]}
// 						onChange={handleChange5}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			<FormControlLabel
// 				label="Non-smoking rooms"
// 				control={
// 					<Checkbox
// 						checked={checked[6]}
// 						onChange={handleChange6}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			<FormControlLabel
// 				label="Airport shuttle"
// 				control={
// 					<Checkbox
// 						checked={checked[7]}
// 						onChange={handleChange7}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			<FormControlLabel
// 				label="Facilities for disabled guests"
// 				control={
// 					<Checkbox
// 						checked={checked[8]}
// 						onChange={handleChange8}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			<FormControlLabel
// 				label="Family rooms"
// 				control={
// 					<Checkbox
// 						checked={checked[9]}
// 						onChange={handleChange9}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			<FormControlLabel
// 				label="Spa and wellness centre"
// 				control={
// 					<Checkbox
// 						checked={checked[10]}
// 						onChange={handleChange10}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			<FormControlLabel
// 				label="Free WiFi"
// 				control={
// 					<Checkbox
// 						checked={checked[11]}
// 						onChange={handleChange11}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>

// 			<FormControlLabel
// 				label="Electric vehicle charging station"
// 				control={
// 					<Checkbox
// 						checked={checked[12]}
// 						onChange={handleChange12}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>

// 			<FormControlLabel
// 				label="Swimming pool"
// 				control={
// 					<Checkbox
// 						checked={checked[13]}
// 						onChange={handleChange13}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 		</Box>
// 	);

// 	return (
// 		<div>
// 			<FormControlLabel
// 				label="All facilities"
// 				control={
// 					<Checkbox
// 						checked={
// 							checked[0] &&
// 							checked[1] &&
// 							checked[2] &&
// 							checked[3] &&
// 							checked[4] &&
// 							checked[5] &&
// 							checked[6] &&
// 							checked[7] &&
// 							checked[8] &&
// 							checked[9] &&
// 							checked[10] &&
// 							checked[11] &&
// 							checked[12] &&
// 							checked[13]
// 						}
// 						indeterminate={checked[0] !== checked[1]!== checked[2]!== checked[3]!== checked[4]!== checked[5]!== checked[6]!== checked[7]!== checked[13]!==
// 							 checked[8]!== checked[9]!== checked[10]!== checked[11]!== checked[12]}
// 						onChange={handleChangeAll}
// 						sx={{
// 							color: '#cd9a2d',
// 							'&.Mui-checked': {
// 								color: '#cd9a2d'
// 							},
// 							'&.MuiCheckbox-root': {
// 								color: '#cd9a2d'
// 							}
// 						}}
// 					/>
// 				}
// 			/>
// 			{children}
// 		</div>
// 	);
// }

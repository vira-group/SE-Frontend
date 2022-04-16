// import * as React from 'react';
// import { styled } from '@mui/material/styles';

// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import pic1 from './../../statics/img/pic (1).jpg';
// import pic2 from './../../statics/img/pic (2).jpg';
// import pic3 from './../../statics/img/pic (3).jpg';
// import pic4 from './../../statics/img/pic (4).jpg';
// import pic5 from './../../statics/img/pic (5).jpg';
// import pic6 from './../../statics/img/pic (6).jpg';
// import pic7 from './../../statics/img/pic (7).jpg';
// import pic8 from './../../statics/img/pic (8).jpg';
// import { height } from '@mui/system';

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

// import './hotelPage.css';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';

// const Item = styled(Paper)(({ theme }) => ({
// 	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// 	...theme.typography.body2,
// 	padding: theme.spacing(1),
// 	textAlign: 'center',
// 	color: theme.palette.text.secondary
// }));

// export default function FullWidthGrid() {
// 	return (
// 		<div>
// 			<Box sx={{ flexGrow: 1, padding: '100px' }}>
// 				<Grid container spacing={1}>
// 					<Grid item lg={6}>
// 						<item>
// 							<img src={pic1} width={698} height={410} alt="this is car image" />
// 						</item>
// 					</Grid>

// 					<Grid item lg={3} sx={{ margin: '1px' }}>
// 						<item>
// 							<img src={pic2} width={300} height={200} alt="this is car image" />
// 						</item>
// 					</Grid>
// 					<Grid item lg={3} sx={{ margin: '1px' }}>
// 						<item color="blue">
// 							<img src={pic3} width={300} height={200} alt="this is car image" />
// 						</item>
// 					</Grid>

// 					<Grid item lg={6} />

// 					<Grid item lg={3} sx={{ margin: '1px' }}>
// 						<img src={pic4} alt="this is car image" width={300} height={200} />
// 					</Grid>
// 					<Grid item xs={3} sx={{ margin: '1px' }}>
// 						<img src={pic5} alt="this is car image" width={300} height={200} />
// 					</Grid>
// 				</Grid>
// 			</Box>
// 			<Box
// 				sx={{
// 					padding: 10,
// 					height: 400,
// 					width: 2500,
// 					paddingLeft: 100
// 				}}
// 			>
// 				<Card>
// 					Word of the Day
// 					<CardActions />
// 				</Card>
// 			</Box>
// 			<Card sx={{ maxWidth: 345 }}>

// 				<CardActions>
// 					<Button size="small" color="primary">
// 						Share
// 					</Button>
// 				</CardActions>
// 			</Card>
// 		</div>
// 	);
// }

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


export default function Hotelpage() {
	return (
		<div>
			<Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }} />

			<Grid container spacing={3}>
				<Grid item xs={8}>
					<div className="row md-8">
					<SimpleAccordion></SimpleAccordion>
					
					
					</div>
					<div className="row">
						<div className="">
				<hr className="mb-0 mt-0 hr-text" />
			</div>

						<div className="accordion accordion-flush">
							<h2 className="accordion-header hotelpage-accordion-header" id="headingThree">
					
							</h2>

							<div
								id="collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									You can modify any of this with custom CSS or overriding our default variables.
								</div>
							</div>
						</div>

						<div className="">
							<hr className="mb-0 mt-0 hr-text" />
						</div>




					</div>
				</Grid>

				<Grid item xs={3.8}>
					<ResponsiveDatePickers />
				</Grid>
			</Grid>

			<br />
		</div>
	);
}

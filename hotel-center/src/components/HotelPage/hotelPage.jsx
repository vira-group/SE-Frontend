import * as React from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import pic1 from './../../statics/img/pic (1).jpg';
import pic2 from './../../statics/img/pic (2).jpg';
import pic3 from './../../statics/img/pic (3).jpg';
import pic4 from './../../statics/img/pic (4).jpg';
import pic5 from './../../statics/img/pic (5).jpg';
import pic6 from './../../statics/img/pic (6).jpg';
import pic7 from './../../statics/img/pic (7).jpg';
import pic8 from './../../statics/img/pic (8).jpg';
import { height } from '@mui/system';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import './hotelPage.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';




const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary
}));

export default function FullWidthGrid() {
	return (
		<div>
			<Box sx={{ flexGrow: 1, padding: '100px' }}>
				<Grid container spacing={1}>
					<Grid item lg={6}>
						<item>
							<img src={pic1} width={698} height={410} alt="this is car image" />
						</item>
					</Grid>

					<Grid item lg={3} sx={{ margin: '1px' }}>
						<item>
							<img src={pic2} width={300} height={200} alt="this is car image" />
						</item>
					</Grid>
					<Grid item lg={3} sx={{ margin: '1px' }}>
						<item color="blue">
							<img src={pic3} width={300} height={200} alt="this is car image" />
						</item>
					</Grid>

					<Grid item lg={6} />

					<Grid item lg={3} sx={{ margin: '1px' }}>
						<img src={pic4} alt="this is car image" width={300} height={200} />
					</Grid>
					<Grid item xs={3} sx={{ margin: '1px' }}>
						<img src={pic5} alt="this is car image" width={300} height={200} />
					</Grid>
				</Grid>
			</Box>
			<Box
				sx={{
					padding: 10,
					height: 400,
					width: 2500,
					paddingLeft: 100
				}}
			>
				<Card>
					Word of the Day
					<CardActions />
				</Card>
			</Box>
			<Card sx={{ maxWidth: 345 }}>
				
				
				
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}

// class hotelPage extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	state = {};
// 	render() {
// 		return (
// 			<div>
// 				<div class="row">
// 					<div class="column">
// 						<img src="wedding.jpg" />
// 						<img src="rocks.jpg" />
// 						<img src="falls2.jpg" />
// 						<img src="paris.jpg" />
// 						<img src="nature.jpg" />
// 						<img src="mist.jpg" />
// 						<img src="paris.jpg" />
// 					</div>
// 					<div class="column">
// 						<img src="underwater.jpg" />
// 						<img src="ocean.jpg" />
// 						<img src="wedding.jpg" />
// 						<img src="mountainskies.jpg" />
// 						<img src="rocks.jpg" />
// 						<img src="underwater.jpg" />
// 					</div>
// 					<div class="column">
// 						<img src="wedding.jpg" />
// 						<img src="rocks.jpg" />
// 						<img src="falls2.jpg" />
// 						<img src="paris.jpg" />
// 						<img src="nature.jpg" />
// 						<img src="mist.jpg" />
// 						<img src="paris.jpg" />
// 					</div>
// 					<div class="column">
// 						<img src="underwater.jpg" />
// 						<img src="ocean.jpg" />
// 						<img src="wedding.jpg" />
// 						<img src="mountainskies.jpg" />
// 						<img src="rocks.jpg" />
// 						<img src="underwater.jpg" />
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default hotelPage;


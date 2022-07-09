import * as React from 'react';
import { Avatar, Link, Grid, Box, Button, Typography, Container } from '@mui/material';
import Helmet from 'react-helmet';
import image1 from '../../statics/img/b.svg';

import { textAlign } from '@mui/system';

export default function Verify() {
	return (
		<div>
			<Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }} />
			<Container component="main" maxWidth="md" style={{ alignItems: 'center' }}>
				<Box
					className="verify-container"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						borderRadius: 6,
						flexGrow: 1,
						justifyContent: 'center'
					}}
					style={{
						backgroundColor: '#ffffff',
			
					}}
				>
					<Grid container style={{  justifyContent: 'center' }}>
						<Grid item style={{ textAlign: 'center'}} xs={12}>
							<Typography variant="h5"
              
              style={{ fontWeight: 'bold', fontSize: '23px', fontFamily: 'serif', marginTop:"1rem" }} >You can create your hotel now.</Typography>
						</Grid>
						<div className="verify-img">
							{/* <img src={image1} className="responsive-img" width="400" height="400" /> */}
							<img src={image1} className="responsive-img  d-none d-sm-block" width="300" height="300" />
							<img src={image1} className="responsive-img d-sm-none" width="200" height="200" />



						</div>
						{/* </Grid> */}
						<Grid item style={{ textAlign: 'center', padding: '10px' }} xs={12}>
							<Typography variant="h7"
              
              >
								We're happy you're here!Thank you for choosing Center Hotel.
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
}

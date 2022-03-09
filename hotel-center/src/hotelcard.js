import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, CssBaseline, Link, Grid, Box, Button,
  Typography, Container, Stack, CardActionArea } from '@mui/material';
import Helmet from 'react-helmet';
import image1 from './pics/london1.jpg';
import Rating from '@mui/material/Rating';
import { useState, useEffect } from "react";
import { textAlign } from '@mui/system';



export default function Hotelcard() {
    const [value, setValue] = useState(5);

  return (
      <div>
        <Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>
        <Container component="main" maxWidth="md">
            <Card style={{marginTop:"3rem"}}>
                <CardContent style={{padding:"20px"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Grid container >
                                <Avatar sx={{ width: "100%", height: "150%" }} variant="rounded" src={image1}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container style={{}}>
                                <Grid item xs={12}>
                                    <Typography variant='h5' style={{fontWeight: "bold", textAlign:"justify"}}>
                                        <Link underline="hover" onClick={()=> window.open('_blank')}
                                         style={{color:"black", cursor:'pointer', paddingRight:"10px"}}>
                                            The Landmark London</Link>
                                        <Rating name="read-only" value={value} readOnly />
                                    </Typography> 
                                </Grid>     
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Link>
                                     <Typography style={{textAlign:'left'}}>Westminster Borough, London</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                     <Typography style={{textAlign:'left', marginBottom:'10px'}}>Metro access</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                     <Typography style={{textAlign:'left'}}>
                                     In the heart of London’s fashionable Marylebone,
                                        this deluxe hotel has a stunning glass-roofed 8-story atrium with
                                        towering palm trees, an award-winning restaurant, luxurious bedrooms and
                                        an indoor...
                                     </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Grid container style={{textAlign:'end'}}>
                                <Grid item xs={9} style={{textAlign:'end'}}>
                                    <Typography variant='h8' style={{fontWeight: "bold"}}>
                                    <Link underline="hover" onClick={()=> window.open('_blank')}
                                            style={{color:"black", cursor:'pointer'}}>
                                            Superb</Link>
                                     <Typography sx={{fontSize:12}} style={{color:'"#f2f2f2'}}>
                                        2,362 reviews
                                    </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} style={{textAlign:'end'}}>
                                    {/* <Button 
                                    style={{
                                        backgroundColor:'#000066',
                                        color: '#ffffff',
                                        fontWeight:"bold",
                                    }}>9.0</Button> */}
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} style={{textAlign:'right'}}>
                                    <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2 }}
                                    style={{ backgroundColor: '#000066', color: '#FFFFFF', textTransform: 'unset' }}>
                                        Show Prices
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </Container>
      </div>
    
  );
}

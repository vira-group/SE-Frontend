import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Link, Grid, Box, Button,
  Typography, Container} from '@mui/material';
import Helmet from 'react-helmet';
import image1 from './pics/london1.jpg';
import image2 from './pics/london2.jpg';
import image3 from './pics/london3.jpg';
import image4 from './pics/Amsterdom1.jpg';
import image5 from './pics/Amsterdom2.jpg';
import Rating from '@mui/material/Rating';
import { useState, useEffect} from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';



export default function Hotelcard() {
    const [value1, setValue1] = useState(5);
    const [value2, setValue2] = useState(4);
    const [value3, setValue3] = useState(4);
    const [value4, setValue4] = useState(4);
    const [value5, setValue5] = useState(4);
    const theme = createTheme({
        breakpoints: {
            values: {
              xs: 0,
              sm: 745,
              md: 746,
              lg: 1000,
              xl: 1500,
            },
          },
    });
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
      <div style={{ display: 'flex', height: '100%' }}>
        <Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>
        <Container component="main" maxWidth="md">
            <ThemeProvider theme={theme}>
                <Card style={{marginTop:"3rem"}}>
                <CardContent style={{padding:"20px"}}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={4} style={{alignSelf:'center'}}>
                            <Grid container >
                                <Avatar sx={{ width: "100%", height: "150%" }} variant="rounded" src={image1}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={9} md={6}>
                            <Grid container style={{}}>
                                <Grid item xs={12}>
                                    <Typography variant='h5' style={{fontWeight: "bold", textAlign:"justify"}}>
                                        <Link underline="hover" onClick={()=> window.open('_blank')}
                                         style={{color:"black", cursor:'pointer', paddingRight:"10px"}}>
                                            The Landmark London</Link>
                                        <Rating name="read-only" value={value1} readOnly />
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
                                     In the heart of London's fashionable Marylebone,
                                        this deluxe hotel has a stunning glass-roofed 8-story atrium with
                                        towering palm trees, an award-winning restaurant, luxurious bedrooms and
                                        an indoor...
                                     </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Grid container spacing={0.5} style={{textAlign:'end'}}>
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
                                    <Box 
                                    style={{
                                        backgroundColor:'#780000',
                                        color: '#ffffff',
                                        textAlign:'center',
                                        fontWeight:"bold",
                                        borderRadius: 3,
                                        width:30,
                                        height:30,
                                        marginTop:'4px',
                                    }}>
                                        <Typography style={{textAlign:'center'}}>9.0</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} style={{textAlign:'right'}}>
                                    <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2 }}
                                    style={{ backgroundColor: '#C1121F', color: '#FFFFFF', textTransform: 'unset' }}>
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
                
                <Card style={{marginTop:"3rem"}}>
                <CardContent style={{padding:"20px"}}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={4} style={{alignSelf:'center'}}>
                            <Grid container >
                                <Avatar sx={{ width: "100%", height: "150%" }} variant="rounded" src={image2}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={9} md={6}>
                            <Grid container style={{}}>
                                <Grid item xs={12}>
                                    <Typography variant='h5' style={{fontWeight: "bold", textAlign:"justify"}}>
                                        <Link underline="hover" onClick={()=> window.open('_blank')}
                                         style={{color:"black", cursor:'pointer'}}>
                                            The Montague On The Gardens</Link>
                                        <Rating name="read-only" value={value2} readOnly />
                                    </Typography> 
                                </Grid>     
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Link>
                                     <Typography style={{textAlign:'left'}}>Camden, London</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                     <Typography style={{textAlign:'left', marginBottom:'5px'}}>Metro access</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                     <Typography style={{textAlign:'left'}}>
                                     Overlooking private, secluded gardens, this 4-star luxury hotel offers 2 restaurants,
                                      an on-site gym and 2 sun rooms. Russell Square Underground Station is a 4 minute walk away.
                                     </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Grid container spacing={0.5} style={{textAlign:'end'}}>
                                <Grid item xs={9} style={{textAlign:'end'}}>
                                    <Typography variant='h8' style={{fontWeight: "bold"}}>
                                    <Link underline="hover" onClick={()=> window.open('_blank')}
                                            style={{color:"black", cursor:'pointer'}}>
                                            Superb</Link>
                                     <Typography sx={{fontSize:12}} style={{color:'"#f2f2f2'}}>
                                        1,468 reviews
                                    </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} style={{textAlign:'end'}}>
                                    <Box 
                                        style={{
                                            backgroundColor:'#780000',
                                            color: '#ffffff',
                                            textAlign:'center',
                                            fontWeight:"bold",
                                            borderRadius: 3,
                                            width:30,
                                            height:30,
                                            marginTop:'4px',
                                        }}>
                                            <Typography style={{textAlign:'center'}}>9.3</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} style={{textAlign:'right'}}>
                                    <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2 }}
                                    style={{ backgroundColor: '#C1121F', color: '#FFFFFF', textTransform: 'unset' }}>
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

                <Card style={{marginTop:"3rem"}}>
                <CardContent style={{padding:"20px"}}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={4} style={{alignSelf:'center'}}>
                            <Grid container >
                                <Avatar sx={{ width: "100%", height: "150%" }} variant="rounded" src={image3}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={9} md={6}>
                            <Grid container style={{}}>
                                <Grid item xs={12}>
                                    <Typography variant='h6' style={{fontWeight: "bold", textAlign:"justify"}}>
                                        <Link underline="hover" onClick={()=> window.open('_blank')}
                                         style={{color:"black", cursor:'pointer'}}>
                                            Presidential Apartments Kensington</Link>
                                        <Rating name="read-only" value={value3} readOnly />
                                    </Typography> 
                                </Grid>     
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Link>
                                     <Typography style={{textAlign:'left'}}>Kensington and Chelsea, London</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                     <Typography style={{textAlign:'left', marginBottom:'5px'}}></Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                     <Typography style={{textAlign:'left'}}>
                                     On the corner of a beautiful garden square, in London's prestigious Kensington,
                                     this modernised period building offers spacious, air-conditioned serviced
                                     apartments with free Wi-Fi.
                                     </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Grid container spacing={0.5} style={{textAlign:'end'}}>
                                <Grid item xs={9} style={{textAlign:'end'}}>
                                    <Typography variant='h8' style={{fontWeight: "bold"}}>
                                    <Link underline="hover" onClick={()=> window.open('_blank')}
                                            style={{color:"black", cursor:'pointer'}}>
                                            Good</Link>
                                     <Typography sx={{fontSize:12}} style={{color:'"#f2f2f2'}}>
                                        1,371 reviews
                                    </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} style={{textAlign:'end'}}>
                                    <Box 
                                        style={{
                                            backgroundColor:'#780000',
                                            color: '#ffffff',
                                            textAlign:'center',
                                            fontWeight:"bold",
                                            borderRadius: 3,
                                            width:30,
                                            height:30,
                                            marginTop:'4px',
                                        }}>
                                            <Typography style={{textAlign:'center'}}>7.9</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} style={{textAlign:'right'}}>
                                    <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2 }}
                                    style={{ backgroundColor: '#C1121F', color: '#FFFFFF', textTransform: 'unset' }}>
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

                <Card style={{marginTop:"3rem" , marginBottom:'2rem'}}>
                <CardContent style={{padding:"20px"}}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={4} style={{alignSelf:'center'}}>
                            <Grid container >
                                <Avatar sx={{ width: "100%", height: "150%" }} variant="rounded" src={image4}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={9} md={6}>
                            <Grid container style={{}}>
                                <Grid item xs={12}>
                                    <Typography variant='h5' style={{fontWeight: "bold", textAlign:"justify"}}>
                                        <Link underline="hover" onClick={()=> window.open('_blank')}
                                         style={{color:"black", cursor:'pointer'}}>
                                            Eden hotel Amsterdam</Link>
                                        <Rating name="read-only" value={value4} readOnly />
                                    </Typography> 
                                </Grid>     
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Link>
                                     <Typography style={{textAlign:'left'}}>Amsterdam City Centre, Amsterdam</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                     <Typography style={{textAlign:'left', marginBottom:'5px'}}>Metro access</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                     <Typography style={{textAlign:'left'}}>
                                     Situated in the heart of the city centre, Eden Hotel Amsterdam offers
                                     warm-coloured rooms and free WiFi. The famous Rembrandt Square is right
                                     around the corner.
                                     </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Grid container spacing={0.5} style={{textAlign:'end'}}>
                                <Grid item xs={9} style={{textAlign:'end'}}>
                                    <Typography variant='h8' style={{fontWeight: "bold"}}>
                                    <Link underline="hover" onClick={()=> window.open('_blank')}
                                            style={{color:"black", cursor:'pointer'}}>
                                            Fabulous</Link>
                                     <Typography sx={{fontSize:12}} style={{color:'"#f2f2f2'}}>
                                        938 reviews
                                    </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} style={{textAlign:'end'}}>
                                    <Box 
                                        style={{
                                            backgroundColor:'#780000',
                                            color: '#ffffff',
                                            textAlign:'center',
                                            fontWeight:"bold",
                                            borderRadius: 3,
                                            width:30,
                                            height:30,
                                            marginTop:'4px',
                                        }}>
                                            <Typography style={{textAlign:'center'}}>8.6</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} style={{textAlign:'right'}}>
                                    <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2 }}
                                    style={{ backgroundColor: '#C1121F', color: '#FFFFFF', textTransform: 'unset' }}>
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

                <Card style={{marginTop:"3rem" , marginBottom:'2rem'}}>
                <CardContent style={{padding:"20px"}}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={4} style={{alignSelf:'center'}}>
                            <Grid container >
                                <Avatar sx={{ width: "100%", height: "150%" }} variant="rounded" src={image5}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={9} md={6}>
                            <Grid container style={{}}>
                                <Grid item xs={12}>
                                    <Typography variant='h5' style={{fontWeight: "bold", textAlign:"justify"}}>
                                        <Link underline="hover" onClick={()=> window.open('_blank')}
                                         style={{color:"black", cursor:'pointer'}}>
                                            Hotel Estheréa</Link>
                                        <Rating name="read-only" value={value5} readOnly />
                                    </Typography> 
                                </Grid>     
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Link>
                                     <Typography style={{textAlign:'left'}}>Amsterdam City Centre, Amsterdam</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                     <Typography style={{textAlign:'left', marginBottom:'5px'}}>Metro access</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                     <Typography style={{textAlign:'left'}}>
                                     Hotel Estheréa is set along the Singel canal in the centre of Amsterdam,
                                     only 300 metres from Dam Square. This hotel is in a quiet area and benefits
                                     from classically-styled decor with wooden paneling....
                                     </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Grid container spacing={0.5} style={{textAlign:'end'}}>
                                <Grid item xs={9} style={{textAlign:'end'}}>
                                    <Typography variant='h8' style={{fontWeight: "bold"}}>
                                    <Link underline="hover" onClick={()=> window.open('_blank')}
                                            style={{color:"black", cursor:'pointer'}}>
                                            Superb</Link>
                                     <Typography sx={{fontSize:12}} style={{color:'"#f2f2f2'}}>
                                        2,508 reviews
                                    </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} style={{textAlign:'end'}}>
                                    <Box 
                                        style={{
                                            backgroundColor:'#780000',
                                            color: '#ffffff',
                                            textAlign:'center',
                                            fontWeight:"bold",
                                            borderRadius: 3,
                                            width:30,
                                            height:30,
                                            marginTop:'4px',
                                        }}>
                                            <Typography style={{textAlign:'center'}}>9.2</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} style={{textAlign:'right'}}>
                                    <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2 }}
                                    style={{ backgroundColor: '#C1121F', color: '#FFFFFF', textTransform: 'unset' }}>
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

            </ThemeProvider>
        </Container>
      </div>
    
  );
}

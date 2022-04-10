import * as React from 'react';
import { Avatar, Link, Grid, Box, Button,
  Typography, ContainerAccordion, Accordion, AccordionSummary
  , AccordionDetails, Container, Divider, TextField, CircularProgress} from '@mui/material';
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
import { useState, useEffect} from "react";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import '../../../css/Hotelpage.css';

export default function Hotelpage(){
    return(
        <div>
            <Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>
            <Container maxWidth='lg'>
            <div class="row">
                <h3 class="mb-3">Facilities of the room</h3>
                <div class="col">
                    <div class="mb-3 row">
                        <div class="col">Taxi Service</div>
                        <div class="col"><LocalTaxiRoundedIcon/></div>
                    </div>

                    <div class="mb-3 row">
                        <div class="col">Sofa</div>
                        <div class="col"><ChairRoundedIcon/></div>
                    </div>

                    <div class="mb-3 row">
                        <div class="col">Bathroom</div>
                        <div class="col"><ShowerRoundedIcon/></div>
                    </div>

                    <div class="mb-3 row">
                        <div class="col">Telephone</div>
                        <div class="col"><PhoneRoundedIcon/></div>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3 row">
                        <div class="col">WiFi</div>
                        <div class="col"><SignalWifi4BarLockRoundedIcon/></div>
                    </div>

                    <div class="mb-3 row">
                        <div class="col">Room service</div>
                        <div class="col"><RoomServiceRoundedIcon/></div>
                    </div>

                    <div class="mb-3 row">
                        <div class="col">Television</div>
                        <div class="col"><TvRoundedIcon/></div>
                    </div>

                    <div class="mb-3 row">
                        <div class="col">Gym</div>
                        <div class="col"><FitnessCenterRoundedIcon/></div>
                    </div>
                </div>
            </div>
            <button type="button" class="mb-3 btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                See all facilities
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="AllFacilities" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="AllFacilities">Facilities of the room</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <div class="mb-3 row">
                            <div class="col">Taxi Service</div>
                            <div class="col" style={{textAlign:'right'}}><LocalTaxiRoundedIcon/></div>
                        </div>

                        <div class="mb-3 row">
                            <div class="col">Sofa</div>
                            <div class="col" style={{textAlign:'right'}}><ChairRoundedIcon/></div>
                        </div>

                        <div class="mb-3 row">
                            <div class="col">Bathroom</div>
                            <div class="col" style={{textAlign:'right'}}><ShowerRoundedIcon/></div>
                        </div>

                        <div class="mb-3 row">
                            <div class="col">Telephone</div>
                            <div class="col" style={{textAlign:'right'}}><PhoneRoundedIcon/></div>
                        </div>

                        <div class="mb-3 row">
                            <div class="col">WiFi</div>
                            <div class="col" style={{textAlign:'right'}}><SignalWifi4BarLockRoundedIcon/></div>
                        </div>

                        <div class="mb-3 row">
                            <div class="col">Room service</div>
                            <div class="col" style={{textAlign:'right'}}><RoomServiceRoundedIcon/></div>
                        </div>

                        <div class="mb-3 row">
                            <div class="col">Television</div>
                            <div class="col" style={{textAlign:'right'}}><TvRoundedIcon/></div>
                        </div>

                        <div class="mb-3 row">
                            <div class="col">Gym</div>
                            <div class="col" style={{textAlign:'right'}}><FitnessCenterRoundedIcon/></div>
                        </div>

                        <div class="mb-3 row">
                            <div class="col">Restaurant</div>
                            <div class="col" style={{textAlign:'right'}}><RestaurantMenuRoundedIcon/></div>
                        </div>
                </div>
                </div>
            </div>
            </div>
            <div class="">
                <hr class="mb-0 mt-0 hr-text"></hr>
            </div>
            <h3 class="mb-3 mt-3">Available rooms</h3>
            <div>
                <ul class="nav nav-pills">
                <li class="nav-item">
                    {/* <a class="nav-link active" aria-current="page" href="/hotelcard">Show all</a> */}
                    <button type="button" href="/hotelcard" class="btn btn-outline-secondary" style={{marginRight:'10px'}}>Show all</button>
                </li>
                <li class="nav-item">
                    {/* <a class="nav-link" href="#">Breakfast included</a> */}
                    <button type="button" href="#" class="btn btn-outline-secondary" style={{marginLeft:'10px'}}>Breakfast included</button>
                </li>
                </ul>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                                <h5 class="card-title">Classic single room *Stories 10 to 15*</h5>
                            </div>
                            <div class="row">
                                <div class="col"><p class="card-text"><PersonRoundedIcon/>Adult</p></div>
                                <div class="col"><p class="card-text"><BedroomChildRoundedIcon/>1 single bed</p></div>
                                <div class="col"><p class="card-text"><RestaurantRoundedIcon/>Breakfast</p></div>
                            </div>
                            <div class="">
                                    <hr class="mb-3 mt-3 hr-text"></hr>
                            </div>
                            <p class="mb-0" style={{textAlign:'center'}}>Booking cancellation rules</p>
                        </div>

                        <div class="col-md-1"><div style={{borderLeft:'1px solid', height:'100px'}}></div></div>
                        
                    
                        <div class="col-md-3" style={{textAlign:'center'}}>
                            <div class="row">
                                <div class="col">
                                    <p class="mb-1 rate">Price per night: </p>
                                </div>
                                <div class="col">
                                    <p class="mb-1 rate">$2,000 </p>
                                </div>
                            </div>
                            <div class="row">
                                <button class='btn btn-primary' >Reserve the room</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    )
}
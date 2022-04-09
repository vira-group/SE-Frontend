import * as React from 'react';
import { Avatar, Link, Grid, Box, Button,
  Typography, ContainerAccordion, Accordion, AccordionSummary
  , AccordionDetails, Container, Divider, TextField, CircularProgress} from '@mui/material';
import Helmet from 'react-helmet';
import image1 from '../../../statics/img/pics/london1.jpg';
import image2 from '../../../statics/img/pics/london2.jpg';
import image3 from '../../../statics/img/pics/london3.jpg';
import image4 from '../../../statics/img/pics/Amsterdom1.jpg';
import image5 from '../../../statics/img/pics/Amsterdom2.jpg';
import Rating from '@mui/material/Rating';
import { useState, useEffect} from "react";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import '../../../css/Hotelcard.css';




export default function Newhotelcard(){
    const [value2, setValue2] = useState(4);
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>
            <Container maxWidth='lg'>
                <div class="row">
                    <div class="col-lg-3">
                        <div class="accordion-item mt-5">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Facilities
                            </button>
                            </h2>
                            <div class="">
                            <hr class="mb-0 mt-0 hr-text"></hr>
                            </div>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Parking
                                </label>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                            <div class="card mt-5">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md">
                                        <img src={image1} className="card-img-top"></img>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row" className="star">
                                            <h5 class="card-title">The Landmark London
                                            <Rating name="read-only" value={value2} readOnly />
                                            </h5>
                                        </div>
                                        <a href='#'>Westminster Borough, London</a>
                                        <p class="mb-1">Metro access</p>
                                        <p class="card-text">
                                            In the heart of London's fashionable Marylebone, this deluxe hotel has a stunning glass-roofed 8-story atrium with towering palm trees, an award-winning restaurant, luxurious bedrooms and an indoor...
                                        </p>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <p class="mb-1 rate">Superb</p>
                                                <p class="mb-1 views">2,362 reviews</p>
                                            </div>
                                            <div class="me-10 col-md-2 score"> 
                                                <h5><span class="badge bg-dark">9.0</span></h5>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-primary hoverable">show prices</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Container>
           
        </div>)
}
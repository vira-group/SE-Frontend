import React, { Component } from 'react';

import pic2 from './../../statics/img/pic (2).jpg';
import pic3 from './../../statics/img/pic (3).jpg';
import pic4 from './../../statics/img/pic (4).jpg';
import pic5 from './../../statics/img/pic (5).jpg';
import pic6 from './../../statics/img/pic (6).jpg';
import pic7 from './../../statics/img/pic (7).jpg';
import pic8 from './../../statics/img/pic (8).jpg';

class a extends Component {
	constructor(props) {
		super(props);
	}
	state = {};
	render() {
		return (
			<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					/>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={pic2} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={pic3} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={pic4} className="d-block w-100" alt="..." />
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		);
	}
}

export default a;

import React, { Component } from 'react';

// class hotelPage extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	state = {};
// 	render() {
// 		return (

// <div>
// 					<div class="col-lg-6">
// 						<img
// 							src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
// 							data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
// 							alt="Table Full of Spices"
// 							class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
// 						/>
// 						<img
// 							src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp"
// 							data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
// 							alt="Coconut with Strawberries"
// 							class="w-100 shadow-1-strong rounded"
// 						/>
// 					</div>
// 					<div class="col-lg-6">
// 						<img
// 							src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Vertical/1.webp"
// 							data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
// 							alt="Dark Roast Iced Coffee"
// 							class="w-100 shadow-1-strong rounded"
// 						/>
// 					</div>
// 				</div>

// 		);
// 	}
// }

// export default hotelPage;

// const photos = [
// 	{ src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
// 	{ src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
// 	{ src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
// 	{ src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
// 	{ src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
// 	{ src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
// 	{ src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
// 	{ src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
// 	{ src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
// ];

// class hotelPage extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = { currentImage: 0 };
// 		this.closeLightbox = this.closeLightbox.bind(this);
// 		this.openLightbox = this.openLightbox.bind(this);
// 		this.gotoNext = this.gotoNext.bind(this);
// 		this.gotoPrevious = this.gotoPrevious.bind(this);
// 	}
// 	openLightbox(event, obj) {
// 		console.log('open');
// 		this.setState({
// 			currentImage: obj.index,
// 			lightboxIsOpen: true
// 		});
// 	}
// 	closeLightbox() {
// 		this.setState({
// 			currentImage: 0,
// 			lightboxIsOpen: false
// 		});
// 	}
// 	gotoPrevious() {
// 		this.setState({
// 			currentImage: this.state.currentImage - 1
// 		});
// 	}
// 	gotoNext() {
// 		this.setState({
// 			currentImage: this.state.currentImage + 1
// 		});
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<Gallery photos={photos} onClick={this.openLightbox} />
// 				<Lightbox
// 					images={photos}
// 					onClose={this.closeLightbox}
// 					onClickPrev={this.gotoPrevious}
// 					onClickNext={this.gotoNext}
// 					currentImage={this.state.currentImage}
// 					isOpen={this.state.lightboxIsOpen}
// 				/>
// 			</div>
// 		);
// 	}
// }

// export default hotelPage;

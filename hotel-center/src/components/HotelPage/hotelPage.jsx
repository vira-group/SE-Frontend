// // // import ImageGallery from 'react-image-gallery';
// // // import React, { Component } from 'react';

// // // import "~react-image-gallery/styles/css/image-gallery.css";

// // // const images = [
// // //   {
// // //     original: 'https://picsum.photos/id/1018/1000/600/',
// // //     thumbnail: 'https://picsum.photos/id/1018/250/150/',
// // //   },
// // //   {
// // //     original: 'https://picsum.photos/id/1015/1000/600/',
// // //     thumbnail: 'https://picsum.photos/id/1015/250/150/',
// // //   },
// // //   {
// // //     original: 'https://picsum.photos/id/1019/1000/600/',
// // //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
// // //   },
// // // ];

// // // class hotelPage extends React.Component {
// // //   render() {
// // //     return <ImageGallery items={images} />;
// // //   }
// // // }

// // // export default hotelPage;

// // // // import React, { Component } from 'react';

// // // // class hotelPage extends Component {
// // // // 	constructor(props) {
// // // // 		super(props);
// // // // 	}
// // // // 	state = {};
// // // // 	render() {
// // // // 		return (

// // // // <div>
// // // // 					<div class="col-lg-6">
// // // // 						<img
// // // // 							src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
// // // // 							data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
// // // // 							alt="Table Full of Spices"
// // // // 							class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
// // // // 						/>
// // // // 						<img
// // // // 							src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp"
// // // // 							data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
// // // // 							alt="Coconut with Strawberries"
// // // // 							class="w-100 shadow-1-strong rounded"
// // // // 						/>
// // // // 					</div>
// // // // 					<div class="col-lg-6">
// // // // 						<img
// // // // 							src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Vertical/1.webp"
// // // // 							data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
// // // // 							alt="Dark Roast Iced Coffee"
// // // // 							class="w-100 shadow-1-strong rounded"
// // // // 						/>
// // // // 					</div>
// // // // 				</div>

// // // // 		);
// // // // 	}
// // // // }

// // // // export default hotelPage;

// // // // const photos = [
// // // // 	{ src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
// // // // 	{ src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
// // // // 	{ src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
// // // // 	{ src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
// // // // 	{ src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
// // // // 	{ src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
// // // // 	{ src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
// // // // 	{ src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
// // // // 	{ src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
// // // // ];

// // // // class hotelPage extends React.Component {
// // // // 	constructor() {
// // // // 		super();
// // // // 		this.state = { currentImage: 0 };
// // // // 		this.closeLightbox = this.closeLightbox.bind(this);
// // // // 		this.openLightbox = this.openLightbox.bind(this);
// // // // 		this.gotoNext = this.gotoNext.bind(this);
// // // // 		this.gotoPrevious = this.gotoPrevious.bind(this);
// // // // 	}
// // // // 	openLightbox(event, obj) {
// // // // 		console.log('open');
// // // // 		this.setState({
// // // // 			currentImage: obj.index,
// // // // 			lightboxIsOpen: true
// // // // 		});
// // // // 	}
// // // // 	closeLightbox() {
// // // // 		this.setState({
// // // // 			currentImage: 0,
// // // // 			lightboxIsOpen: false
// // // // 		});
// // // // 	}
// // // // 	gotoPrevious() {
// // // // 		this.setState({
// // // // 			currentImage: this.state.currentImage - 1
// // // // 		});
// // // // 	}
// // // // 	gotoNext() {
// // // // 		this.setState({
// // // // 			currentImage: this.state.currentImage + 1
// // // // 		});
// // // // 	}
// // // // 	render() {
// // // // 		return (
// // // // 			<div>
// // // // 				<Gallery photos={photos} onClick={this.openLightbox} />
// // // // 				<Lightbox
// // // // 					images={photos}
// // // // 					onClose={this.closeLightbox}
// // // // 					onClickPrev={this.gotoPrevious}
// // // // 					onClickNext={this.gotoNext}
// // // // 					currentImage={this.state.currentImage}
// // // // 					isOpen={this.state.lightboxIsOpen}
// // // // 				/>
// // // // 			</div>
// // // // 		);
// // // // 	}
// // // // }

// // // // export default hotelPage;

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import ImageGallery from 'react-image-gallery';
// // // import ImageGallery from 'src/ImageGallery';

// // const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

// // class hotelPage extends React.Component {
// // 	constructor() {
// // 		super();
// // 		this.state = {
// // 			showIndex: false,
// // 			showBullets: true,
// // 			infinite: true,
// // 			showThumbnails: true,
// // 			showFullscreenButton: true,
// // 			showGalleryFullscreenButton: true,
// // 			showPlayButton: true,
// // 			showGalleryPlayButton: true,
// // 			showNav: true,
// // 			isRTL: false,
// // 			slideDuration: 450,
// // 			slideInterval: 2000,
// // 			slideOnThumbnailOver: false,
// // 			thumbnailPosition: 'bottom',
// // 			showVideo: {},
// // 			useWindowKeyDown: true
// // 		};

// // 		this.images = [
// // 			{
// // 				thumbnail: `${PREFIX_URL}4v.jpg`,
// // 				original: `${PREFIX_URL}4v.jpg`,
// // 				embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
// // 				description: 'Render custom slides (such as videos)',
// // 				renderItem: this._renderVideo.bind(this)
// // 			},
// // 			{
// // 				original: `${PREFIX_URL}1.jpg`,
// // 				thumbnail: `${PREFIX_URL}1t.jpg`,
// // 				originalClass: 'featured-slide',
// // 				thumbnailClass: 'featured-thumb',
// // 				description: 'Custom class for slides & thumbnails'
// // 			}
// // 		].concat(this._getStaticImages());
// // 	}

// // 	_onImageClick(event) {
// // 		console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
// // 	}

// // 	_onImageLoad(event) {
// // 		console.debug('loaded image', event.target.src);
// // 	}

// // 	_onSlide(index) {
// // 		this._resetVideo();
// // 		console.debug('slid to index', index);
// // 	}

// // 	_onPause(index) {
// // 		console.debug('paused on index', index);
// // 	}

// // 	_onScreenChange(fullScreenElement) {
// // 		console.debug('isFullScreen?', !!fullScreenElement);
// // 	}

// // 	_onPlay(index) {
// // 		console.debug('playing from index', index);
// // 	}

// // 	_handleInputChange(state, event) {
// // 		if (event.target.value > 0) {
// // 			this.setState({ [state]: event.target.value });
// // 		}
// // 	}

// // 	_handleCheckboxChange(state, event) {
// // 		this.setState({ [state]: event.target.checked });
// // 	}

// // 	_handleThumbnailPositionChange(event) {
// // 		this.setState({ thumbnailPosition: event.target.value });
// // 	}

// // 	_getStaticImages() {
// // 		let images = [];
// // 		for (let i = 2; i < 12; i++) {
// // 			images.push({
// // 				original: `${PREFIX_URL}${i}.jpg`,
// // 				thumbnail: `${PREFIX_URL}${i}t.jpg`
// // 			});
// // 		}

// // 		return images;
// // 	}

// // 	_resetVideo() {
// // 		this.setState({ showVideo: {} });

// // 		if (this.state.showPlayButton) {
// // 			this.setState({ showGalleryPlayButton: true });
// // 		}

// // 		if (this.state.showFullscreenButton) {
// // 			this.setState({ showGalleryFullscreenButton: true });
// // 		}
// // 	}

// // 	_toggleShowVideo(url) {
// // 		this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
// // 		this.setState({
// // 			showVideo: this.state.showVideo
// // 		});

// // 		if (this.state.showVideo[url]) {
// // 			if (this.state.showPlayButton) {
// // 				this.setState({ showGalleryPlayButton: false });
// // 			}

// // 			if (this.state.showFullscreenButton) {
// // 				this.setState({ showGalleryFullscreenButton: false });
// // 			}
// // 		}
// // 	}

// // 	_renderVideo(item) {
// // 		return (
// // 			<div>
// // 				{this.state.showVideo[item.embedUrl] ? (
// // 					<div className="video-wrapper">
// // 						<a className="close-video" onClick={this._toggleShowVideo.bind(this, item.embedUrl)} />
// // 						<iframe width="560" height="315" src={item.embedUrl} frameBorder="0" allowFullScreen />
// // 					</div>
// // 				) : (
// // 					<a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
// // 						<div className="play-button" />
// // 						<img className="image-gallery-image" src={item.original} />
// // 						{item.description && (
// // 							<span className="image-gallery-description" style={{ right: '0', left: 'initial' }}>
// // 								{item.description}
// // 							</span>
// // 						)}
// // 					</a>
// // 				)}
// // 			</div>
// // 		);
// // 	}

// // 	render() {
// // 		return (
// // 			<section className="app">
// // 				<ImageGallery
// // 					ref={(i) => (this._imageGallery = i)}
// // 					items={this.images}
// // 					onClick={this._onImageClick.bind(this)}
// // 					onImageLoad={this._onImageLoad}
// // 					onSlide={this._onSlide.bind(this)}
// // 					onPause={this._onPause.bind(this)}
// // 					onScreenChange={this._onScreenChange.bind(this)}
// // 					onPlay={this._onPlay.bind(this)}
// // 					infinite={this.state.infinite}
// // 					showBullets={this.state.showBullets}
// // 					showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
// // 					showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
// // 					showThumbnails={this.state.showThumbnails}
// // 					showIndex={this.state.showIndex}
// // 					showNav={this.state.showNav}
// // 					isRTL={this.state.isRTL}
// // 					thumbnailPosition={this.state.thumbnailPosition}
// // 					slideDuration={parseInt(this.state.slideDuration)}
// // 					slideInterval={parseInt(this.state.slideInterval)}
// // 					slideOnThumbnailOver={this.state.slideOnThumbnailOver}
// // 					additionalClass="app-image-gallery"
// // 					useWindowKeyDown={this.state.useWindowKeyDown}
// // 				/>

// // 				<div className="app-sandbox">
// // 					<div className="app-sandbox-content">
// // 						<h2 className="app-header">Settings</h2>

// // 						<ul className="app-buttons">
// // 							<li>
// // 								<div className="app-interval-input-group">
// // 									<span className="app-interval-label">Play Interval</span>
// // 									<input
// // 										className="app-interval-input"
// // 										type="text"
// // 										onChange={this._handleInputChange.bind(this, 'slideInterval')}
// // 										value={this.state.slideInterval}
// // 									/>
// // 								</div>
// // 							</li>

// // 							<li>
// // 								<div className="app-interval-input-group">
// // 									<span className="app-interval-label">Slide Duration</span>
// // 									<input
// // 										className="app-interval-input"
// // 										type="text"
// // 										onChange={this._handleInputChange.bind(this, 'slideDuration')}
// // 										value={this.state.slideDuration}
// // 									/>
// // 								</div>
// // 							</li>

// // 							<li>
// // 								<div className="app-interval-input-group">
// // 									<span className="app-interval-label">Thumbnail Bar Position</span>
// // 									<select
// // 										className="app-interval-input"
// // 										value={this.state.thumbnailPosition}
// // 										onChange={this._handleThumbnailPositionChange.bind(this)}
// // 									>
// // 										<option value="bottom">Bottom</option>
// // 										<option value="top">Top</option>
// // 										<option value="left">Left</option>
// // 										<option value="right">Right</option>
// // 									</select>
// // 								</div>
// // 							</li>
// // 						</ul>

// // 						<ul className="app-checkboxes">
// // 							<li>
// // 								<input
// // 									id="infinite"
// // 									type="checkbox"
// // 									onChange={this._handleCheckboxChange.bind(this, 'infinite')}
// // 									checked={this.state.infinite}
// // 								/>
// // 								<label htmlFor="infinite">allow infinite sliding</label>
// // 							</li>
// // 							<li>
// // 								<input
// // 									id="show_fullscreen"
// // 									type="checkbox"
// // 									onChange={this._handleCheckboxChange.bind(this, 'showFullscreenButton')}
// // 									checked={this.state.showFullscreenButton}
// // 								/>
// // 								<label htmlFor="show_fullscreen">show fullscreen button</label>
// // 							</li>
// // 							<li>
// // 								<input
// // 									id="show_playbutton"
// // 									type="checkbox"
// // 									onChange={this._handleCheckboxChange.bind(this, 'showPlayButton')}
// // 									checked={this.state.showPlayButton}
// // 								/>
// // 								<label htmlFor="show_playbutton">show play button</label>
// // 							</li>
// // 							<li>
// // 								<input
// // 									id="show_bullets"
// // 									type="checkbox"
// // 									onChange={this._handleCheckboxChange.bind(this, 'showBullets')}
// // 									checked={this.state.showBullets}
// // 								/>
// // 								<label htmlFor="show_bullets">show bullets</label>
// // 							</li>
// // 							<li>
// // 								<input
// // 									id="show_thumbnails"
// // 									type="checkbox"
// // 									onChange={this._handleCheckboxChange.bind(this, 'showThumbnails')}
// // 									checked={this.state.showThumbnails}
// // 								/>
// // 								<label htmlFor="show_thumbnails">show thumbnails</label>
// // 							</li>
// // 							<li>
// // 								<input
// // 									id="show_navigation"
// // 									type="checkbox"
// // 									onChange={this._handleCheckboxChange.bind(this, 'showNav')}
// // 									checked={this.state.showNav}
// // 								/>
// // 								<label htmlFor="show_navigation">show navigation</label>
// // 							</li>
// // 							<li>
// // 								<input
// // 									id="show_index"
// // 									type="checkbox"
// // 									onChange={this._handleCheckboxChange.bind(this, 'showIndex')}
// // 									checked={this.state.showIndex}
// // 								/>
// // 								<label htmlFor="show_index">show index</label>
// // 							</li>
// // 							<li>
// // 								<input
// // 									id="is_rtl"
// // 									type="checkbox"
// // 									onChange={this._handleCheckboxChange.bind(this, 'isRTL')}
// // 									checked={this.state.isRTL}
// // 								/>
// // 								<label htmlFor="is_rtl">is right to left</label>
// // 							</li>
// // 							<li>
// // 								<input
// // 									id="slide_on_thumbnail_hover"
// // 									type="checkbox"
// // 									onChange={this._handleCheckboxChange.bind(this, 'slideOnThumbnailOver')}
// // 									checked={this.state.slideOnThumbnailOver}
// // 								/>
// // 								<label htmlFor="slide_on_thumbnail_hover">slide on mouse over thumbnails</label>
// // 							</li>
// // 							<li>
// // 								<input
// // 									id="use_window_keydown"
// // 									type="checkbox"
// // 									onChange={this._handleCheckboxChange.bind(this, 'useWindowKeyDown')}
// // 									checked={this.state.useWindowKeyDown}
// // 								/>
// // 								<label htmlFor="use_window_keydown">use window keydown</label>
// // 							</li>
// // 						</ul>
// // 					</div>
// // 				</div>
// // 			</section>
// // 		);
// // 	}
// // }
// // export default hotelPage;

// // import React from 'react';
// // import { MDBGallery, MDBGalleryList} from 'mdbreact';

// // function Gallery() {
// //   const dataImg = [
// //     {
// //       img:
// //         'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
// //       cols: 1,
// //       title: 'image',
// //     },
// //     {
// //       img:
// //         'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).webp',
// //       cols: 2,
// //       title: 'image',
// //     },
// //     {
// //       img:
// //         'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).webp',
// //       cols: 1,
// //       title: 'image',
// //     },
// //     {
// //       img:
// //         'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).webp',
// //       cols: 2,
// //       title: 'image',
// //     },
// //     {
// //       img:
// //         'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
// //       cols: 2,
// //       title: 'image',
// //     },

// //     {
// //       img:
// //         'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).webp',
// //       cols: 1,
// //       title: 'image',
// //     },
// //     {
// //       img:
// //         'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).webp',
// //       cols: 2,
// //       title: 'image',
// //     },
// //     {
// //       img:
// //         'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).webp',
// //       cols: 1,
// //       title: 'image',
// //     }
// //   ];

// //   return (
// //     <MDBGallery cols={4}>
// //       {dataImg.map(({ cols, img, title }, i) => {
// //         return (
// //           <MDBGalleryList
// //             key={i}
// //             cols={cols || 1}
// //             titleClasses='rounded'
// //             styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)' }}
// //           >
// //             <img src={img} alt={title} />
// //           </MDBGalleryList>
// //         );
// //       })}
// //     </MDBGallery>
// //   );
// // }

// // export default Gallery;

// import React, { Component } from 'react';

// import ReactBnbGallery from 'react-bnb-gallery';

// import { Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';

// const photos = [
// 	{
// 		photo: 'https://source.unsplash.com/aZjw7xI3QAA/1144x763',
// 		caption: 'Viñales, Pinar del Río, Cuba',
// 		subcaption: 'Photo by Simon Matzinger on Unsplash',
// 		thumbnail: 'https://source.unsplash.com/aZjw7xI3QAA/100x67'
// 	},
// 	{
// 		photo: 'https://source.unsplash.com/c77MgFOt7e0/1144x763',
// 		caption: 'La Habana, Cuba',
// 		subcaption: 'Photo by Gerardo Sanchez on Unsplash',
// 		thumbnail: 'https://source.unsplash.com/c77MgFOt7e0/100x67'
// 	},
// 	{
// 		photo: 'https://source.unsplash.com/QdBHnkBdu4g/1144x763',
// 		caption: 'Woman smoking a tobacco',
// 		subcaption: 'Photo by Hannah Cauhepe on Unsplash',
// 		thumbnail: 'https://source.unsplash.com/QdBHnkBdu4g/100x67'
// 	}
// ];

// class hotelPage extends Component {
// 	constructor() {
// 		super(...arguments);
// 		this.state = { galleryOpened: false };
// 		this.toggleGallery = this.toggleGallery.bind(this);
// 	}

// 	toggleGallery() {
// 		this.setState((prevState) => ({
// 			galleryOpened: !prevState.galleryOpened
// 		}));
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.toggleGallery}>Open photo gallery</button>
// 				<ReactBnbGallery show={this.state.galleryOpened} photos={photos} onClose={this.toggleGallery} />

// 				<Card>
// 					<Card.Header>Featured</Card.Header>
// 					<Card.Body>
// 						<Card.Title>Special title treatment</Card.Title>
// 						<Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
// 						<Button variant="primary">Go somewhere</Button>
// 					</Card.Body>
// 				</Card>
// 			</div>
// 		);
// 	}
// }

// export default hotelPage;

// App.js

// import React, { Component } from 'react';

// import image_gallery from './image_gallery';
// class hotelPage extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	state = {};
// 	render() {
// 		return (
// 			<div className="App">
// 				<h2>Responsive React Carousel Image Gallery with Thumbs</h2>
// 				<image_gallery></image_gallery>
// 				<div>_handleThumbnailPositionChange</div>
// 			</div>
// 		);
// 	}
// }

// export default hotelPage;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
		
			<Box sx={{ flexGrow: 1, padding : '100px' }}>
				<Grid container spacing={0}>
					<Grid item lg={6} sm={1} xs={6} md={4}>
						<img src={pic1} alt="this is car image" />
					</Grid>

					<Grid item lg={3} sm={1} xs={3} md={8}>
						<img src={pic2} width={100} height={250} alt="this is car image" />
					</Grid>
					<Grid item lg={3} sm={1} xs={3} md={4}>
						<img src={pic3}  width={250} height={250} alt="this is car image" />
					</Grid>
					<Grid item lg={6} sm={1} xs={6} md={4} />

					<Grid item xs={3} md={8} lg={3} sm={1}>
						<img src={pic4} alt="this is car image"  width={250} height={250} />
					</Grid>
					<Grid item xs={3} md={8} lg={3} sm={1}>
						<img src={pic5} alt="this is car image"  width={250} height={250} />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}

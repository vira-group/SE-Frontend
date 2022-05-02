import React, { Component } from 'react';

import '../../css/Hotelpage.css';
import Carousel from './carousel';
import '../../css/Reserve.css';
class reservation extends Component {
	constructor(props) {
		super(props);
	}
	state = {};
	render() {
		return (
			<div>
				<div className="containter m-5">
					<div className="row justify-content-center">
						{/* <div className="">
							<hr className="ms-3 me-1 hr-text" />
						</div> */}
						<div className="col-12 col-md-4">
							<div className="card-containter ">
								<div className="card-body">
									<div
										class="shadow p-3 mb-5 bg-body rounded"
										style={{ borderRadius: '50%', backgroundColor: 'red' }}
									>
										<div className="row   m-3">
											<div className="col" style={{ display: 'flex', alignItems: 'left' }}>
												<div
													className="col-md-6"
													style={{ display: 'flex', alignItems: 'center' }}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-calendar-date-fill "
														viewBox="0 0 16 16"
														color="#cd9a2d"
													>
														<path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
														<path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
													</svg>

													<div className="col-md-6 m-2
											">dskd</div>
												</div>
												<div
													className="col-md-6"
													style={{ display: 'flex', alignItems: 'center' }}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-calendar-date-fill"
														viewBox="0 0 16 16"
														color="#cd9a2d"
													>
														<path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
														<path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
													</svg>
													<div className="col-md-6 m-2 ">dfs</div>
												</div>
											</div>
											{/* <div className="col-md-6 m-2 ">dskd</div> */}

											{/* <div className="card-subtitle mb-2 text-muted">dskd</div> */}
										</div>

										<div className="">
											<hr className="m-3 hr-text" />
										</div>

										<div
											className="col-12  col-md-2 m-4"
											style={{ display: 'flex', alignItems: 'center' }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-person-fill"
												viewBox="0 0 16 16"
												color="#cd9a2d"
											>
												<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
											</svg>

											<div className="col m-2">dskd</div>
										</div>

										<div className="">
											<hr className="m-3 hr-text" />
										</div>

										<div
											className="col-12  col-md-2 m-4"
											style={{ display: 'flex', alignItems: 'center' }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-wallet2"
												viewBox="0 0 16 16"
												color="#cd9a2d"
											>
												<path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
											</svg>

											<div className="col m-2`">dskd</div>
										</div>

										{/* <div className="">
											<hr className="m-3 hr-text" />
										</div> */}
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-8 ">
							<div className="row">
										<div
												style={{
													maxWidth: 3500,
													maxHeight: 300,
													marginLeft: 'auto',
													marginRight: 'auto',
													marginTop: 64
												}}
											>
												<Carousel show={4}>
													<div>
														<div style={{ padding: 8 , borderRadius : '50%' }}>
															<img
																src="https://picsum.photos/400/280?random=0"
																alt="placeholder"
																style={{ width: '100%' }}
															/>
														</div>
													</div>
													<div>
														<div style={{ padding: 8 }}>
															<img
																src="https://picsum.photos/400/280?random=0"
																alt="placeholder"
																style={{ width: '100%' }}
															/>
														</div>
													</div>
													<div>
														<div style={{ padding: 8 }}>
															<img
																src="https://picsum.photos/400/280?random=0"
																alt="placeholder"
																style={{ width: '100%' }}
															/>
														</div>
													</div>
													<div>
														<div style={{ padding: 8 }}>
															<img
																src="https://picsum.photos/400/280?random=0"
																alt="placeholder"
																style={{ width: '100%' }}
															/>
														</div>
													</div>
													<div>
														<div style={{ padding: 8 }}>
															<img
																src="https://picsum.photos/400/280?random=0"
																alt="placeholder"
																style={{ width: '100%' }}
															/>
														</div>
													</div>
													<div>
														<div style={{ padding: 8 }}>
															<img
																src="https://picsum.photos/400/280?random=0"
																alt="placeholder"
																style={{ width: '100%' }}
															/>
														</div>
													</div>
													<div>
														<div style={{ padding: 8 }}>
															<img
																src="https://picsum.photos/400/280?random=0"
																alt="placeholder"
																style={{ width: '100%' }}
															/>
														</div>
													</div>
													<div>
														<div style={{ padding: 8 }}>
															<img
																src="https://picsum.photos/400/280?random=0"
																alt="placeholder"
																style={{ width: '100%' }}
															/>
														</div>
													</div>
												</Carousel>
										
								</div>
							</div>
							<div className="">
								<hr className="m-3 hr-text" />
							</div>{' '}
							<div className="row mx-3">
								<h4>tilte</h4>
							</div>
							<div className="row mx-3">
								<p>
									وارد کردن اطلاعات یکی از مسافران به عنوان سرپرست کافی است. همچنین می‌توانید از لیست
									مسافرین سابق خود انتخاب کنید.
								</p>
							</div>
							<div className="row">
								<form className="row g-3 needs-validation mx-3" noValidate>
									<div class="col-md-4 ">
										<input
											type="text"
											class="form-control form-control-lg"
											placeholder="First name"
											aria-label="First name"
										/>
									</div>
									<div class="col-md-4 ">
										<input
											type="text"
											class="form-control form-control-lg"
											placeholder="First name"
											aria-label="First name"
										/>
									</div>
									<div class="col-md-4 ">
										<input
											type="tel"
											id="phone"
											name="phone"
											placeholder="phone number"
											class="form-control form-control-lg"
											pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
										/>
									</div>
									<div class="col-md-4 ">
										<input
											type="tel"
											id="phone"
											name="phone"
											placeholder="natioanal code"
											class="form-control form-control-lg"
											pattern="[0-9]{10}"
										/>
									</div>
									<div className="">
										<hr className="hr-text" />
									</div>{' '}
									<div class="form-check col-md-4 m-3">
										<input
											class="form-check-input form-control-huge"
											type="checkbox"
											value=""
											id="flexCheckDefault"
										/>
										<label class="form-check-label" for="flexCheckDefault">
											Default checkbox
										</label>
									</div>
									<div className="">
										<hr className="hr-text" />
									</div>
									<div class="form-check col-md-4 m-3">
										<input
											class="form-check-input form-control-huge"
											type="checkbox"
											value=""
											id="flexCheckDefault"
										/>
										<label class="form-check-label" for="flexCheckDefault">
											Default checkbox
										</label>
									</div>
									<div class="gap-7 mx-auto m-3  " style={{}}>
										<button class="btn btn-primary" type="submit">
											Button
										</button>
									</div>
									{/* <button type="submit" class="btn btn-primary"  style={{ width: '30%' , height: "20%" }}>
										Submit
									</button> */}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default reservation;

// import React from 'react';
// import ReactDOM from 'react-dom';

// import ImageGallery from 'src/ImageGallery';

// const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

// class reservation extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       showIndex: false,
//       showBullets: true,
//       infinite: true,
//       showThumbnails: true,
//       showFullscreenButton: true,
//       showGalleryFullscreenButton: true,
//       showPlayButton: true,
//       showGalleryPlayButton: true,
//       showNav: true,
//       isRTL: false,
//       slideDuration: 450,
//       slideInterval: 2000,
//       slideOnThumbnailOver: false,
//       thumbnailPosition: 'bottom',
//       showVideo: {},
//       useWindowKeyDown: true,
//     };

//     this.images = [
//       {
//         thumbnail: `${PREFIX_URL}4v.jpg`,
//         original: `${PREFIX_URL}4v.jpg`,
//         embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
//         description: 'Render custom slides (such as videos)',
//         renderItem: this._renderVideo.bind(this)
//       },
//       {
//         original: `${PREFIX_URL}1.jpg`,
//         thumbnail: `${PREFIX_URL}1t.jpg`,
//         originalClass: 'featured-slide',
//         thumbnailClass: 'featured-thumb',
//         description: 'Custom class for slides & thumbnails',
//       },
//     ].concat(this._getStaticImages());
//   }

//   _onImageClick(event) {
//     console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
//   }

//   _onImageLoad(event) {
//     console.debug('loaded image', event.target.src);
//   }

//   _onSlide(index) {
//     this._resetVideo();
//     console.debug('slid to index', index);
//   }

//   _onPause(index) {
//     console.debug('paused on index', index);
//   }

//   _onScreenChange(fullScreenElement) {
//     console.debug('isFullScreen?', !!fullScreenElement);
//   }

//   _onPlay(index) {
//     console.debug('playing from index', index);
//   }

//   _handleInputChange(state, event) {
//     if (event.target.value > 0) {
//       this.setState({[state]: event.target.value});
//     }
//   }

//   _handleCheckboxChange(state, event) {
//     this.setState({[state]: event.target.checked});
//   }

//   _handleThumbnailPositionChange(event) {
//     this.setState({thumbnailPosition: event.target.value});
//   }

//   _getStaticImages() {
//     let images = [];
//     for (let i = 2; i < 12; i++) {
//       images.push({
//         original: `${PREFIX_URL}${i}.jpg`,
//         thumbnail:`${PREFIX_URL}${i}t.jpg`
//       });
//     }

//     return images;
//   }

//   _resetVideo() {
//     this.setState({showVideo: {}});

//     if (this.state.showPlayButton) {
//       this.setState({showGalleryPlayButton: true});
//     }

//     if (this.state.showFullscreenButton) {
//       this.setState({showGalleryFullscreenButton: true});
//     }
//   }

//   _toggleShowVideo(url) {
//     this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
//     this.setState({
//       showVideo: this.state.showVideo
//     });

//     if (this.state.showVideo[url]) {
//       if (this.state.showPlayButton) {
//         this.setState({showGalleryPlayButton: false});
//       }

//       if (this.state.showFullscreenButton) {
//         this.setState({showGalleryFullscreenButton: false});
//       }
//     }
//   }

//   _renderVideo(item) {
//     return (
//       <div>
//         {
//           this.state.showVideo[item.embedUrl] ?
//             <div className='video-wrapper'>
//                 <a
//                   className='close-video'
//                   onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
//                 >
//                 </a>
//                 <iframe
//                   width='560'
//                   height='315'
//                   src={item.embedUrl}
//                   frameBorder='0'
//                   allowFullScreen
//                 >
//                 </iframe>
//             </div>
//           :
//             <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
//               <div className='play-button'></div>
//               <img className='image-gallery-image' src={item.original} />
//               {
//                 item.description &&
//                   <span
//                     className='image-gallery-description'
//                     style={{right: '0', left: 'initial'}}
//                   >
//                     {item.description}
//                   </span>
//               }
//             </a>
//         }
//       </div>
//     );
//   }

//   render() {
//     return (

//       <section className='app'>
//         <ImageGallery
//           ref={i => this._imageGallery = i}
//           items={this.images}
//           onClick={this._onImageClick.bind(this)}
//           onImageLoad={this._onImageLoad}
//           onSlide={this._onSlide.bind(this)}
//           onPause={this._onPause.bind(this)}
//           onScreenChange={this._onScreenChange.bind(this)}
//           onPlay={this._onPlay.bind(this)}
//           infinite={this.state.infinite}
//           showBullets={this.state.showBullets}
//           showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
//           showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
//           showThumbnails={this.state.showThumbnails}
//           showIndex={this.state.showIndex}
//           showNav={this.state.showNav}
//           isRTL={this.state.isRTL}
//           thumbnailPosition={this.state.thumbnailPosition}
//           slideDuration={parseInt(this.state.slideDuration)}
//           slideInterval={parseInt(this.state.slideInterval)}
//           slideOnThumbnailOver={this.state.slideOnThumbnailOver}
//           additionalClass="app-image-gallery"
//           useWindowKeyDown={this.state.useWindowKeyDown}
//         />

//         <div className='app-sandbox'>

//           <div className='app-sandbox-content'>
//             <h2 className='app-header'>Settings</h2>

//             <ul className='app-buttons'>
//               <li>
//                 <div className='app-interval-input-group'>
//                   <span className='app-interval-label'>Play Interval</span>
//                   <input
//                     className='app-interval-input'
//                     type='text'
//                     onChange={this._handleInputChange.bind(this, 'slideInterval')}
//                     value={this.state.slideInterval}/>
//                 </div>
//               </li>

//               <li>
//                 <div className='app-interval-input-group'>
//                   <span className='app-interval-label'>Slide Duration</span>
//                   <input
//                     className='app-interval-input'
//                     type='text'
//                     onChange={this._handleInputChange.bind(this, 'slideDuration')}
//                     value={this.state.slideDuration}/>
//                 </div>
//               </li>

//               <li>
//                 <div className='app-interval-input-group'>
//                   <span className='app-interval-label'>Thumbnail Bar Position</span>
//                   <select
//                     className='app-interval-input'
//                     value={this.state.thumbnailPosition}
//                     onChange={this._handleThumbnailPositionChange.bind(this)}
//                   >
//                     <option value='bottom'>Bottom</option>
//                     <option value='top'>Top</option>
//                     <option value='left'>Left</option>
//                     <option value='right'>Right</option>
//                   </select>
//                 </div>
//               </li>
//             </ul>

//             <ul className='app-checkboxes'>
//               <li>
//                 <input
//                   id='infinite'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'infinite')}
//                   checked={this.state.infinite}/>
//                   <label htmlFor='infinite'>allow infinite sliding</label>
//               </li>
//               <li>
//                 <input
//                   id='show_fullscreen'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showFullscreenButton')}
//                   checked={this.state.showFullscreenButton}/>
//                   <label htmlFor='show_fullscreen'>show fullscreen button</label>
//               </li>
//               <li>
//                 <input
//                   id='show_playbutton'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showPlayButton')}
//                   checked={this.state.showPlayButton}/>
//                   <label htmlFor='show_playbutton'>show play button</label>
//               </li>
//               <li>
//                 <input
//                   id='show_bullets'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showBullets')}
//                   checked={this.state.showBullets}/>
//                   <label htmlFor='show_bullets'>show bullets</label>
//               </li>
//               <li>
//                 <input
//                   id='show_thumbnails'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showThumbnails')}
//                   checked={this.state.showThumbnails}/>
//                   <label htmlFor='show_thumbnails'>show thumbnails</label>
//               </li>
//               <li>
//                 <input
//                   id='show_navigation'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showNav')}
//                   checked={this.state.showNav}/>
//                   <label htmlFor='show_navigation'>show navigation</label>
//               </li>
//               <li>
//                 <input
//                   id='show_index'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showIndex')}
//                   checked={this.state.showIndex}/>
//                   <label htmlFor='show_index'>show index</label>
//               </li>
//               <li>
//                 <input
//                   id='is_rtl'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'isRTL')}
//                   checked={this.state.isRTL}/>
//                   <label htmlFor='is_rtl'>is right to left</label>
//               </li>
//               <li>
//                 <input
//                   id='slide_on_thumbnail_hover'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'slideOnThumbnailOver')}
//                   checked={this.state.slideOnThumbnailOver}/>
//                   <label htmlFor='slide_on_thumbnail_hover'>slide on mouse over thumbnails</label>
//               </li>
//               <li>
//                 <input
//                   id='use_window_keydown'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'useWindowKeyDown')}
//                   checked={this.state.useWindowKeyDown}/>
//                   <label htmlFor='use_window_keydown'>use window keydown</label>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </section>
//     );
//   }
// }

// export default reservation ;

import React, { useState, useEffect } from 'react';
import './Components/Styles/App.scss';
import Comment from './Components/Comment';
import AddComment from './Components/AddComment';
import references from "../../assets/References.json";
import axios from 'axios';
// import { cookies, makeURL, set_cookie } from '../../../Utils/common';
import { makeURL } from '../../Utils/common';


const Feedback = (props) => {
	const [ comments, updateComments ] = useState([]);
	const [ comments1, updateComments1 ] = useState([]);
	const [ comments2, updateComments2 ] = useState([]);
	const [ deleteModalState, setDeleteModalState ] = useState(false);

	const getData = async () => {
		const res = await fetch('./data/data.json');
		const data = await res.json();
		updateComments(data.comments);
	};

	useEffect(() => {
		// const queryString = window.location.toString();
		const hotelid = props.id
		
		axios
		.get(makeURL(references.url_address + '/'  + hotelid + '/' + 'comments/'), {
			// headers: {
			// 	Authorization: cookies.get('Authorization')
			// }
		})
		.then((response) => {
			console.log('hotel comments', response.data);
			updateComments(response.data);
			updateComments1(response.data.slice(0,10));
			updateComments2(response.data.slice(11,49));


			console.log(comments ,"commsetes") ;
		})
		.catch((error) => {
			console.log(error, 'comment error');
		
		});

		
	}, []);



	useEffect(() => {
	
		localStorage.getItem('comments') !== null
			? updateComments(JSON.parse(localStorage.getItem('comments')))
			: getData();
	}, []);

	useEffect(
		() => {
			localStorage.setItem('comments', JSON.stringify(comments));
			deleteModalState
				? document.body.classList.add('overflow--hidden')
				: document.body.classList.remove('overflow--hidden');
		},
		[ comments, deleteModalState ]
	);

	// update score
	let updateScore = (score, id, type) => {
		let updatedComments = [ ...comments ];

		if (type === 'comment') {
			updatedComments.forEach((data) => {
				if (data.id === id) {
					data.score = score;
				}
			});
		} else if (type === 'reply') {
			updatedComments.forEach((comment) => {
				comment.replies.forEach((data) => {
					if (data.id === id) {
						data.score = score;
					}
				});
			});
		}
		updateComments(updatedComments);
	};

	// add comments
	let addComments = (newComment) => {
		let updatedComments = [ ...comments, newComment ];
		updateComments(updatedComments);
	};

	// add replies
	let updateReplies = (replies, id) => {
		let updatedComments = [ ...comments ];
		updatedComments.forEach((data) => {
			if (data.id === id) {
				data.replies = [ ...replies ];
			}
		});
		updateComments(updatedComments);
	};

	// edit comment
	let editComment = (content, id, type) => {
		let updatedComments = [ ...comments ];

		if (type === 'comment') {
			updatedComments.forEach((data) => {
				if (data.id === id) {
					data.content = content;
				}
			});
		} else if (type === 'reply') {
			updatedComments.forEach((comment) => {
				comment.replies.forEach((data) => {
					if (data.id === id) {
						data.content = content;
					}
				});
			});
		}

		updateComments(updatedComments);
	};

	// delete comment
	let commentDelete = (id, type, parentComment) => {
		let updatedComments = [ ...comments ];
		let updatedReplies = [];

		if (type === 'comment') {
			updatedComments = updatedComments.filter((data) => data.id !== id);
		}
		//  else if (type === 'reply') {
		// 	comments.forEach((comment) => {
		// 		if (comment.id === parentComment) {
		// 			updatedReplies = comment.replies.filter((data) => data.id !== id);
		// 			comment.replies = updatedReplies;
		// 		}
		// 	});
		// }

		updateComments(updatedComments);
	};

	return (

<main className="Feedback">
				{' '}
				<div className="col-lg-8">
					<div className="row">
						<div className="col">
							<div className="mb-3 row">
								<div className="col">
									{comments.map((comment) => (
										<Comment
											key={comment.id}
											commentData={comment}
											updateScore={updateScore}
											updateReplies={updateReplies}
											editComment={editComment}
											commentDelete={commentDelete}
											setDeleteModalState={setDeleteModalState}
										/>
									))}
									<AddComment buttonValue={'send'} addComments={addComments} />
									{/* {f1 ? (
											f1.map((f) => (
												<div className="mb-3 row">
													<div className="col">{f.name}</div>
													<div className="col">{Icons[f.name]}</div>
												</div>
											))
										) : null} */}
								</div>
							</div>
						</div>
					</div>
					<button
						type="button"
						className="mb-3 btn btn-secondary room-facilities"
						data-bs-toggle="modal"
						data-bs-target="#exampleModal1"
					>
						See all comment
					</button>
					<div
						className="modal fade"
						id="exampleModal1"
						tabindex="-1"
						aria-labelledby="AllFacilities"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered  modal-lg  modal-dialog-scrollable">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="AllFacilities">
										comment of the hotel
									</h5>
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									/>
								</div>
								<div className="modal-body">
									<div className="container">
										{comments.map((comment) => (
											<div>
												<Comment
													key={comment.id}
													commentData={comment}
													updateScore={updateScore}
													updateReplies={updateReplies}
													editComment={editComment}
													commentDelete={commentDelete}
													setDeleteModalState={setDeleteModalState}
												/>
												<hr className="mb-0 mt-0 hr-text" />
											</div>
										))}
										{/* {facility ? (
												facility.map((f) => (
													<div className="mb-3 row">
														<div className="col">{f.name}</div>
														<div className="col" style={{ textAlign: 'right' }}>
															{Icons[f.name]}
														</div>
													</div>
												))
											) : null}
						 */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
		</main>

	);
};

export default Feedback;

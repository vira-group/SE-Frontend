import React, { useState, useEffect } from 'react';
import './Components/Styles/App.scss';
import Comment from './Components/Comment';
import AddComment from './Components/AddComment';
import axios from 'axios';
import { cookies, makeURL, set_cookie } from '../../Utils/common';
import references from "../../assets/References.json";

const Feedback = (props) => {
	const [ comments, updateComments ] = useState([]);
	const [ comments1, updateComments1 ] = useState([]);
	const [ comments2, updateComments2 ] = useState([]);
	const [ deleteModalState, setDeleteModalState ] = useState(false);

	const [ c, setc ] = useState(null);
	const [ first, setFirst ] = useState("");
	const [ last, setlast ] = useState("");
	const [ avatar, setAvatar ] = useState(null);
	const [ hotelid, sethotelid ] = useState(null);
	const [ comId, setComid ] = useState(null);

	// const getData = async () => {
	// 	const res = await fetch('./data/data.json');
	// 	const data = await res.json();
	// 	updateComments(data.comments);
	// };

	
	useEffect(() => {
		axios
		  .get(makeURL(references.url_edit_profile), {
			headers: {
			  Authorization: cookies.get("Authorization"),
			},
		  })
		  .then((res) => {
			console.log('response of profile: ',res.data);
			setAvatar(res.data.avatar);
			setFirst(res.data.firstName);
			setlast(res.data.lastName);
		
		  });
	  }, []);

	  console.log(first);
	  console.log(last);

	useEffect(() => {
		const hotelid = props.id;
		sethotelid(props.id);
		//get al hotel
		axios
			.get(makeURL('/hotel/' + hotelid + '/' + 'comments/'))
			.then((response) => {
				console.log('hotel comments', response.data);
				setc(response.data);
				// console.log(comments, 'comments get all hotel');
				// updateComments1(response.data.slice(0, 10).text);
				// updateComments2(response.data.slice(11, 49).text);
			})
			.catch((error) => {
				console.log(error, 'comment error');
			});

		// //get my comments
		// axios
		// 	.get(makeURL('/hotel/' + hotelid + '/' + 'comments/'), {
		// 		headers: {
		// 			Authorization: cookies.get('Authorization')
		// 		}
		// 	})
		// 	.then((response) => {
		// 		console.log('my hotel comments', response.data);
		// 		// console.log('hotel comments', response.data);
		// 		// console.log('hotel comments', response.data);
		// 		// console.log('hotel comments', response.data);
		// 		setc1(response.data[0].text);
		// 		// console.log(comments, "comment in the update")
		// 		console.log(comments, 'my comments ');
		// 		// updateComments1(response.data.slice(0, 10).text);
		// 		// updateComments2(response.data.slice(11, 49).text);

		// 		// console.log(comments, 'commsetes');
		// 	})
		// 	.catch((error) => {
		// 		console.log(error, 'comment error');
		// 	});

		//send comment
		// axios
		// 	.post(
		// 		makeURL('/hotel/' + hotelid + '/' + 'comments/'),
		// 		{
		// 			rate :3 ,
		// 			text :"ouuuii"
		// 		},
		// 		{
		// 			headers: {
		// 				Authorization: cookies.get('Authorization')
		// 			}
		// 		}
		// 	)
		// 	.then((response) => {
		// 		console.log(response, 'posted');
		// 	})
		// 	.catch((error) => {
		// 		console.log(error, 'post error');
		// 	});

		//update
		// axios
		// 	.put(

		// 		makeURL("/hotel/1/comments/2/"),
		// 		{
		// 			rate:1,
		// 			text: "dsffffd"
		// 		},
		// 		{
		// 			headers: {
		// 				Authorization: cookies.get('Authorization')
		// 			}
		// 		}
		// 	)
		// 	.then((response) => {
		// 		console.log(response, 'commnet changed');
		// 	})
		// 	.catch((error) => {
		// 		console.log(error, 'comment change error');
		// 	});

		// 	//delete

		// axios
		// 	.delete(makeURL('/hotel/' + hotelid + '/' + 'comments/17/'), {
		// 		headers: {
		// 			Authorization: cookies.get('Authorization')
		// 		}
		// 	})
		// 	.then((response) => {
		// 		console.log(response, 'commnet delted');
		// 	})
		// 	.catch((error) => {
		// 		console.log(error, 'comment delete error');
		// 	});
	}, []);

	// console.log(c, 'setc');
	// console.log(c1, 'setc111111');

	useEffect(() => {
		// localStorage.getItem('comments') !== null
		// 	? updateComments(JSON.parse(localStorage.getItem('comments')))
		// 	: getData();
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

	console.log(comments, 'commmmmmmmmmmmmmmm');
	
										// console.log((c[0].created_at.split("T"))[0]   , 'commmmmmmmmmmmmmmm');

	return (
		<main className="Feedback">
			{' '}
			<div className="col-lg-8">
				<div className="row">
					<div className="col">
						<div className="mb-3 row">
							<div className="col">
								{/* <div>{c}</div> */}
								{/* <div>{c1}</div> */}

								{/* {c? (c.map((comment) => (
									<Comment
										key={comment.id}
										commentData={comment}
										// updateScore={updateScore}
										// updateReplies={updateReplies}
										// editComment={editComment}
										// commentDelete={commentDelete}
										// setDeleteModalState={setDeleteModalState}
									/>
								))) : "hello mistake"} */}


								{Array.isArray(c) ? (c).map(e => 	<Comment
										key={e.id}
										commentData={e.text}
										rate={e.rate}
										time = {(((e.created_at.split("T"))[1]).split("."))[0]}
										first = {first}
										last={last}
										avatar={avatar}
										hotelid={hotelid}
										comId={comId}
										// updateScore={updateScore}
										// updateReplies={updateReplies}
										// editComment={editComment}
										// commentDelete={commentDelete}
										// setDeleteModalState={setDeleteModalState}
									/>
								) : null};



								{/* {((c) => (
									<Comment
										key={1}
										commentData={c}
										updateScore={updateScore}
										updateReplies={updateReplies}
										editComment={editComment}
										commentDelete={commentDelete}
										setDeleteModalState={setDeleteModalState}
									/>
								))} */}
								<AddComment buttonValue={'send'} addComments={addComments} />
								{/* {f1 ? (
											f1.map((f) => (
												<div className="mb-3 row">
													<div className="col">{f.name}</div>
													<div className="col">{Icons[f.name]}</div>
												</div>
											))
										) : null} */}

								{/* { c? (  c.map((a) => <div>{a.text}</div>))  : "m" } */}
								{/* {c ? (
											c.map((f) => (
												<div className="mb-3 row">
													<div className="col">{f.text}</div>
													<div className="col">{f.rate}</div>
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
									{/* {(comment) => ( */}
									{/* <div> */}
									{/* <Comment
											hotelid={props.id}
											commentid = {comment.id}
												
												
												key={comment.id}
												commentData={comment.text}
												updateScore={updateScore}
												updateReplies={updateReplies}
												editComment={editComment}
												commentDelete={commentDelete}
												setDeleteModalState={setDeleteModalState}
											/> */}

									{/* <hr className="mb-0 mt-0 hr-text" /> */}
									{/* </div> */}
									{/* )} */}
									{/* {c ? (
										c.map((f) => (
											<div className="mb-3 row">
												<div className="col">{f.text}</div>
												<div className="col" style={{ textAlign: 'right' }}>
													{f.rate}
												</div>
											</div>
										))
									) : null} */}
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

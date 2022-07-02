import { useState } from 'react';

import './Styles/AddComment.scss';

import Rating from '@mui/material/Rating';

const AddComment = ({ buttonValue, addComments, replyingTo }) => {
	const replyingToUser = replyingTo ? `@${replyingTo}, ` : '';
	const [ comment, setComment ] = useState('');

	const clickHandler = () => {
		if (comment === '' || comment === ' ') return;

		const newComment = {
			id: Math.floor(Math.random() * 100) + 5,
			content: replyingToUser + comment,
			createdAt: new Date(),
			score: 0,
			username: 'juliusomo',
			currentUser: true,
			replies: []
		};

		addComments(newComment);
		setComment('');
	};

	return (
		<div className="add-comment">
			<div className="profile-pic" />{' '}
			{/* <Rating
				name="simple-controlled"
				value={5}
				// onChange={(event, newValue) => {
				// 	setValue(newValue);
				// 	// console.log('star value:',newValue);
				// }}
			/> */}
			<textarea
				className="comment-input"
				placeholder="Add a comment"
				value={replyingToUser + comment}
				onChange={(e) => {
					setComment(e.target.value.replace(replyingTo ? `@${replyingTo}, ` : '', ''));
				}}
			/>
			<div className="send-btn-container">
				<div className="profile-pic" />

				<button
					// className="add-btn"
					className="btn btn-primary hotel-roomc"
					onClick={clickHandler}
				>
					{buttonValue}
				</button>
			</div>
		</div>
	);
};

export default AddComment;

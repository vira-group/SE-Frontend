import { useState } from 'react';
import './Styles/AddComment.scss';
import { Rating } from 'react-simple-star-rating';

const AddComment = ({ buttonValue, addComments, replyingTo }) => {
	const replyingToUser = replyingTo ? `@${replyingTo}, ` : '';
	const [ comment, setComment ] = useState('');
	const [ ratingValue, setRatingValue ] = useState(0);

	const handleRating = (rate) => {
		setRatingValue(rate);
	};

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
			<div>
				<div className="profile-pic" />
			</div>
			<Rating onClick={handleRating} ratingValue={ratingValue} size={20} />
			<textarea
				className="comment-input"
				placeholder="Add a comment"
				value={replyingToUser + comment}
				onChange={(e) => {
					setComment(e.target.value.replace(replyingTo ? `@${replyingTo}, ` : '', ''));
				}}
			/>
			<div className="send-btn-container">
				{/* <div className="profile-pic" /> */}

				<button className="btn btn-primary hotel-roomc" onClick={clickHandler}>
					{buttonValue}
				</button>
			</div>
		</div>
	);
};

export default AddComment;

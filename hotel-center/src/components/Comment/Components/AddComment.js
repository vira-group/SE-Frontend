import { useState } from 'react';
import './Styles/AddComment.scss';
import { Rating } from 'react-simple-star-rating';

const AddComment = ({ buttonValue, addComments}) => {

	const [ comment, setComment ] = useState('');
	const [ ratingValue, setRatingValue ] = useState(0);

	const handleRating = (rate) => {
		setRatingValue(rate);
	};

	const clickHandler = () => {
		if (comment === '' || comment === ' ') return;

		
		const newComment = {
			id: Math.floor(Math.random() * 100) + 5,
			content:  comment,
			createdAt: new Date(),
			rate:  ratingValue ,
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
				value={ comment}
				onChange={(e) => {
					setComment(e.target.value.replace('', ''));
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

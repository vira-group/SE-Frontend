import { useState } from 'react';
import './Styles/AddComment.scss';
import { Rating } from 'react-simple-star-rating';
import references from '../../../assets/References.json';



const AddComment = ({ buttonValue, addComments , avatar}) => {

	const [ comment, setComment ] = useState('');
	const [ text, setText ] = useState('');
	const [ ratingValue, setRatingValue ] = useState(0);
	
	const handleRating = (rate) => {
		setRatingValue(rate);
	};

	const clickHandler = () => {
		if (comment === '' || comment === ' ') return;

		
		const newComment = {
			content:  comment,
			rate:  ratingValue ,
			currentUser: true,
		};

		addComments(newComment, comment,ratingValue);
		setComment('');
	};

	return (
		<div className="add-comment">
			<div>
				<img   className={`profile-pic`} src={avatar}></img>
    
			</div>
			<Rating onClick={handleRating} ratingValue={ratingValue} size={20} />
			<textarea
				className="comment-input"
				placeholder="Add a comment"
				value={comment}
				onChange={(e) => {
					setComment(e.target.value);
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

import { useEffect, useState } from 'react';

import './Styles/Comment.scss';

import AddComment from './AddComment';
import ReplyContainer from './ReplyContainer';
import DeleteModal from './DeleteModal';
import CommentVotes from './CommentVotes';
import CommentHeader from './CommentHeader';
import CommentFooter from './CommentFooter';

import { commentPostedTime } from '../utils';

const Comment = ({
	commentData,
	rate,
	time,
	first,
	last,
	avatar,
  hotelid,
  comId
	// updateScore,
	// updateReplies,
	// editComment,
	// commentDelete,
	// setDeleteModalState,
}) => {
	// const [replying, setReplying] = useState(false);
	// const [time, setTime] = useState("");
	// const [vote, setVoted] = useState(false);
	// const [score, setScore] = useState(commentData.score);
	// const [editing, setEditing] = useState(false);
	// const [content, setContent] = useState(commentData);
	// const [content, setContent] = useState(commentData);
	// const [deleting, setDeleting] = useState(false);

	// get time from comment posted

	// const updateComment = () => {
	//   editComment(content, commentData.id, "comment");
	//   setEditing(false);
	// };

	// const deleteComment = (id, type) => {
	//   const finalType = type !== undefined ? type : "comment";
	//   const finalId = id !== undefined ? id : commentData.id;
	//   commentDelete(finalId, finalType, commentData.id);
	//   setDeleting(false);
	// };

	return (
		<div className={`comment-container ${''}`}>
			<div className="comment">
				<div className="comment--body">
					<CommentHeader
						commentData={commentData}
						rate={rate}
						time={time}
						first={first}
						last={last}
						avatar={avatar}

						// setReplying={setReplying}
						// setDeleting={setDeleting}
						// setDeleteModalState={setDeleteModalState}
						// setEditing={setEditing}
					/>

					<div className="comment-content">{commentData}</div>

					{/* {!editing ? (
            <div className="comment-content">{commentData.content}</div>
          ) : (
            <textarea
              className="content-edit-box"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          )}
          {editing && (
            <button className="update-btn" onClick={updateComment}>
              update
            </button>
          )} */}
				</div>
				<CommentFooter
					// setVoted={setVoted}

					// setScore={setScore}
					// updateScore={updateScore}
					commentData={commentData}
					time={time}
					// setReplying={setReplying}
					// setDeleting={setDeleting}
					// setDeleteModalState={setDeleteModalState}
					// setEditing={setEditing}
				/>{' '}
			</div>

			
      {/* {deleting && ( */}
    
    
        <DeleteModal
    		hotelid={hotelid}
										comId={comId}
    
          // setDeleting={setDeleting}
          // deleteComment={deleteComment}
          // setDeleteModalState={setDeleteModalState}
        />
    
    
      {/* )} */}
		</div>
	);
};

export default Comment;

import './Styles/DeleteModal.scss';

const DeleteModal = ({ setDeleting, deleteComment, setDeleteModalState }) => {
	const cancelDelete = () => {
		setDeleting(false);
		setDeleteModalState(false);
	};

	const deleteBtnClick = () => {
		deleteComment();
		setDeleteModalState(false);
	};

	return (
		<div className="delete-confirmation-wrapper">
			<div className="delete-container">
				<div className="title">Delete comment</div>

				<div class="modal-body">
					Are you sure you want to delete this comment? This will remove the comment and can't be undone.
				</div>

				{/* <div className="confirmation-message">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </div> */}

				{/* <div className="btn-container"> */}
				<div class="modal-footer" style={{ color: '#cd9a2d' }}>
					<button
						// className="cancel-btn"
						class="btn btn-outline-dark"
						data-bs-dismiss="modal"
						style={{ color: '#cd9a2d' }}
						onClick={cancelDelete}
					>
						No, cancel
					</button>
					<button
						//  className="delete-btn"
						class="btn btn-dark"
						style={{ backgroundColor: '#cd9a2d' }}
						onClick={deleteBtnClick}
					>
						Yes, delete
					</button>
				</div>
				{/*       
        <div className="btn-container">
          <button 
          
          className="cancel-btn"
          
           onClick={cancelDelete}>
            No, cancel
          </button>
          <button
          
           className="delete-btn"
          
           onClick={deleteBtnClick}>
            Yes, delete
          </button>
        </div> */}
			</div>
		</div>
	);
};

export default DeleteModal;

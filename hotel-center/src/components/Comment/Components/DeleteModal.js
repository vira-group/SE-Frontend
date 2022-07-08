import './Styles/DeleteModal.scss';
import axios from 'axios';
import { cookies, makeURL, set_cookie } from '../../../Utils/common';

const DeleteModal = ({ hotelid, comId, setDeleting, deleteComment, setDeleteModalState }) => {
	const cancelDelete = () => {
		setDeleting(false);
		setDeleteModalState(false);
	};

	const deleteBtnClick = () => {
		axios
			.delete(makeURL('/hotel/' + hotelid + '/' + 'comments/' + comId  +"/" ), {
				headers: {
					Authorization: cookies.get('Authorization')
				}
			})
			.then((response) => {
				console.log(response, 'commnet delted');
			})
			.catch((error) => {
				console.log(error, 'comment delete error');
			});

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
				<div class="modal-footer" style={{ color: '#000000' }}>
					<button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal" onClick={cancelDelete}>
						No, cancel
					</button>

					<button
						className="btn btn-primary hotel-room"
						style={{ backgroundColor: '#cd9a2d' }}
						onClick={deleteBtnClick}
					>
						Yes, delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;

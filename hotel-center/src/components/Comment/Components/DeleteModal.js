import './Styles/DeleteModal.scss';
import axios from 'axios';
import { cookies, makeURL, set_cookie } from '../../../Utils/common';
import { commentPostedTime } from '../utils';

const DeleteModal = ({ hotelid, comId, setDeleting, deleteComment, setDeleteModalState }) => {
	const cancelDelete = () => {
		setDeleting(false);
		setDeleteModalState(false);
	};

	const deleteBtnClick = () => {

		if(comId !== null)
		{

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
			axios
			.get(makeURL('/hotel/' + hotelid + '/' + 'comments/'))
			.then((response) => {
				console.log('hotel comments', response.data);
				// setc(response.data);
				// setCart([...cart, item]);
				localStorage.setItem( 'deleteAll', JSON.stringify(response.data));

				localStorage.setItem( 'delete', JSON.stringify(response.data.slice(0, 4)));
				
				// setc1(response.data.slice(0, 4));
			})
			.catch((error) => {
				console.log(error, 'comment error');
			});

	
			// window.location.reload(true);

		}
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

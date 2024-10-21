// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/operations";
import s from "./DeleteContacts.module.css";
// import toast, { Toaster } from "react-hot-toast";

const DeleteContacts = ({ handleDelete, close }) => {
	// const dispatch = useDispatch();
	// const successfuly = () => toast("You have successfully deleted the contact!");

	// const handleDelete = () => {
	// 	dispatch(deleteContact(id));
	// 	successfuly();
	// };
	// const handleSubmit = {
	// 	dispatch(deleteContact(id));
	// }

	return (
		<div className={s.modalDel}>
			Delete contact?
			<button className={s.btn} onClick={() => handleDelete()}>
				Yes
			</button>
			<button className={s.btnNot} onClick={() => close()}>
				No
			</button>
		</div>
	);
};

export default DeleteContacts;

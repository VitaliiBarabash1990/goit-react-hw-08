import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./DeleteContacts.module.css";

const DeleteContacts = ({ id, close }) => {
	const dispatch = useDispatch();

	return (
		<div className={s.modalDel}>
			Delete contact?
			<button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
				Yes
			</button>
			<button className={s.btnNot} onClick={() => close()}>
				No
			</button>
		</div>
	);
};

export default DeleteContacts;

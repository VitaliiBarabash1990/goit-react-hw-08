import s from "./DeleteContacts.module.css";

const DeleteContacts = ({ handleDelete, close }) => {
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

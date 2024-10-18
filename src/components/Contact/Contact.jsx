import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
const Contact = ({ ...contact }) => {
	const dispatch = useDispatch();

	return (
		<>
			<li className={s.listItem} key={contact.id}>
				<div className={s.listData}>
					<div className={s.item}>
						<BsFillPersonFill /> {contact.name}
					</div>
					<div className={s.item}>
						<BsFillTelephoneFill /> {contact.number}
					</div>
				</div>
				<button
					className={s.btn}
					onClick={() => dispatch(deleteContact(contact.id))}
				>
					Delete
				</button>
			</li>
		</>
	);
};

export default Contact;

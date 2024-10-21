import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { motion } from "framer-motion";
import { slideInFromBot } from "../motion/motion";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
const Contact = ({ ...contact }) => {
	const dispatch = useDispatch();

	return (
		<>
			<motion.li
				initial="hidden"
				animate="visible"
				variants={slideInFromBot(0.4)}
				className={s.listItem}
				key={contact.id}
			>
				<div className={s.listData}>
					<div className={s.item}>
						<BsFillPersonFill /> {contact.name}
					</div>
					<div className={s.item}>
						<BsFillTelephoneFill /> {contact.number}
					</div>
				</div>
				<div className={s.btnGroup}>
					<button
						className={s.btnEdit}
						onClick={() => dispatch(deleteContact(contact.id))}
					>
						<MdOutlineModeEditOutline className={s.editBlack} />
					</button>
					<button
						className={s.btn}
						onClick={() => dispatch(deleteContact(contact.id))}
					>
						<MdDeleteOutline className={s.editBlack} />
					</button>
				</div>
			</motion.li>
		</>
	);
};

export default Contact;

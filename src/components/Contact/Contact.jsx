import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { motion } from "framer-motion";
import { slideInFromBot } from "../motion/motion";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import useToggle from "../hooks/useToggle";
import Modal from "../Modal/Modal";
import DeleteContacts from "../DeleteContacts/DeleteContacts";
import EditContacts from "../EditContacts/EditContacts";
import toast, { Toaster } from "react-hot-toast";
const Contact = ({ ...contact }) => {
	const dispatch = useDispatch();

	const {
		isOpen,
		isOpenDel,
		openModal,
		closeModal,
		openModalDel,
		closeModalDel,
	} = useToggle();
	const successfuly = () => toast("You have successfully deleted the contact!");

	const handleDelete = () => {
		dispatch(deleteContact(contact.id));
		successfuly();
	};

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
					{/* <button
						className={s.btnEdit}
						onClick={() => dispatch(deleteContact(contact.id))}
					>
						<MdOutlineModeEditOutline className={s.editBlack} />
					</button> */}

					<button className={s.btnEdit} onClick={openModal}>
						<MdOutlineModeEditOutline className={s.editBlack} />
					</button>
					{isOpen && (
						<Modal onClose={closeModal}>
							<EditContacts contact={contact} onClose={closeModal} />
						</Modal>
					)}

					<button className={s.btn} onClick={openModalDel}>
						<MdDeleteOutline className={s.editBlack} />
					</button>
					{isOpenDel && (
						<Modal onClose={closeModalDel}>
							<DeleteContacts
								close={closeModalDel}
								handleDelete={handleDelete}
							/>
						</Modal>
					)}
				</div>
			</motion.li>
			<Toaster />
		</>
	);
};

export default Contact;

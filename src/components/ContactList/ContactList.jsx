import s from "./ContactsList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { AnimatePresence } from "framer-motion";

const ContactList = () => {
	const filteredData = useSelector(selectFilteredContacts);
	return (
		<>
			<ul className={s.contain}>
				<AnimatePresence>
					{filteredData.map((contact) => (
						<Contact key={contact.id} {...contact} />
					))}
				</AnimatePresence>
			</ul>
		</>
	);
};

export default ContactList;

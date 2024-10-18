import s from "./ContactsList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
	const filteredData = useSelector(selectFilteredContacts);
	return (
		<>
			<ul className={s.contain}>
				{filteredData.map((contact) => (
					<Contact key={contact.id} {...contact} />
				))}
			</ul>
		</>
	);
};

export default ContactList;

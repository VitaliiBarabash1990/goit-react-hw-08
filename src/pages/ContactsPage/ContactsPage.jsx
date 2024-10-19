import { useEffect } from "react";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selecterror, selectloading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectloading);
	const error = useSelector(selecterror);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);
	return (
		<div>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			{loading && <h2>Loading...</h2>}
			{error && <h2>Error...</h2>}
			<ContactList />
		</div>
	);
};

export default ContactsPage;

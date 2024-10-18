import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";
import { useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { selecterror, selectloading } from "./redux/contacts/slice";

const App = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectloading);
	const error = useSelector(selecterror);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);
	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			{loading && <h2>Loading...</h2>}
			{error && <h2>Error...</h2>}
			<ContactList />
		</>
	);
};
export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="contacts" element={<ContactsPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegistrationPage />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
export default App;

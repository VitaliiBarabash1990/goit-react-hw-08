import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refresh } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const dispatch = useDispatch();
	const isRefreshing = useSelector(selectIsRefreshing);
	useEffect(() => {
		dispatch(refresh());
	}, [dispatch]);
	return isRefreshing ? null : (
		<AnimatePresence>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route
						path="contacts"
						element={
							<PrivateRoute component={<ContactsPage />} redirectTo="/login" />
						}
					/>
					{/* <Route path="contacts" element={<ContactsPage />} /> */}
					<Route
						path="login"
						element={
							<RestrictedRoute
								component={<LoginPage />}
								redirectTo="/contacts"
							/>
						}
					/>
					<Route
						path="register"
						element={
							<RestrictedRoute
								component={<RegistrationPage />}
								redirectTo="/contacts"
							/>
						}
					/>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	);
};
export default App;

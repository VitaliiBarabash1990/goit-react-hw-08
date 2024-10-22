import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
const Navigation = ({ buildLinkClass }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<>
			<NavLink className={buildLinkClass} to="/">
				Home
			</NavLink>
			{isLoggedIn && (
				<NavLink className={buildLinkClass} to="/contacts">
					Contacts
				</NavLink>
			)}
		</>
	);
};
export default Navigation;

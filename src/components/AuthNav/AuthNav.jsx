import { NavLink } from "react-router-dom";
const AuthNav = ({ buildLinkClass }) => {
	return (
		<>
			<NavLink className={buildLinkClass} to="/login">
				Login
			</NavLink>
			<NavLink className={buildLinkClass} to="/register">
				Register
			</NavLink>
		</>
	);
};
export default AuthNav;

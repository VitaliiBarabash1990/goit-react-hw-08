import { NavLink } from "react-router-dom";
const Navigation = ({ buildLinkClass }) => {
	return (
		<>
			<NavLink className={buildLinkClass} to="/">
				Home
			</NavLink>
			<NavLink className={buildLinkClass} to="/contacts">
				Contacts
			</NavLink>
		</>
	);
};
export default Navigation;

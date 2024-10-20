import s from "./AppBar.module.css";

import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
const AppBar = () => {
	const user = useSelector(selectUser);
	const isLoggedIn = useSelector(selectIsLoggedIn);

	const buildLinkClass = ({ isActive }) => {
		return clsx(s.link, isActive && s.activeLink);
	};
	return (
		<div className={s.wrapper}>
			<div>AppContacts</div>
			{isLoggedIn && <div>Welcome, {user.name}</div>}
			<div className={s.wrapperLinks}>
				<Navigation buildLinkClass={buildLinkClass} />
				{!isLoggedIn && <AuthNav buildLinkClass={buildLinkClass} />}
				{isLoggedIn && <UserMenu />}
			</div>
		</div>
	);
};
export default AppBar;

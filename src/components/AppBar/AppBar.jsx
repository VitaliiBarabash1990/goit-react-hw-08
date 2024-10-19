import s from "./AppBar.module.css";

import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import clsx from "clsx";
const AppBar = () => {
	const buildLinkClass = ({ isActive }) => {
		return clsx(s.link, isActive && s.activeLink);
	};
	return (
		<div className={s.wrapper}>
			<div>AppContacts</div>
			<div>Welcome, John</div>
			<div className={s.wrapperLinks}>
				<Navigation buildLinkClass={buildLinkClass} />
				<AuthNav buildLinkClass={buildLinkClass} />
			</div>
		</div>
	);
};
export default AppBar;

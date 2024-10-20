import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
	const dispatch = useDispatch();
	return (
		<button className="btn btn-secondary" onClick={() => dispatch(logout())}>
			Exit
		</button>
	);
};

export default UserMenu;

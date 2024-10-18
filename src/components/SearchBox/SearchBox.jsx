import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeSearch } from "../../redux/filters/slice";
import { selectSearchStr } from "../../redux/filters/selectors";

const SearchBox = () => {
	const search = useSelector(selectSearchStr);

	const dispatch = useDispatch();
	return (
		<label className={s.label}>
			<span className={s.text}>Find contacts by name</span>
			<input
				type="text"
				placeholder="Search..."
				value={search}
				onChange={(e) => dispatch(changeSearch(e.target.value))}
			/>
		</label>
	);
};

export default SearchBox;

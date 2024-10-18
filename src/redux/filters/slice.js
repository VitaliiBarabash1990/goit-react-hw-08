import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
};
const slice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		changeSearch: (state, action) => {
			state.name = action.payload;
		},
	},
});

export const searchFilterReducer = slice.reducer;
export const { changeSearch } = slice.actions;

// export const selectSearchStr = (state) => state.filters.name;

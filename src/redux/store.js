import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/slice";
import { searchFilterReducer } from "./filters/slice";

export const store = configureStore({
	reducer: {
		contacts: contactsReduser,
		filters: searchFilterReducer,
	},
});

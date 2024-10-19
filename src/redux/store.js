import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/slice";
import { searchFilterReducer } from "./filters/slice";
import { authSlice } from "./auth/slice";

export const store = configureStore({
	reducer: {
		contacts: contactsReduser,
		filters: searchFilterReducer,
		auth: authSlice,
	},
});

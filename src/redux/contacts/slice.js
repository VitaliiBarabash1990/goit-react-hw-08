import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
	addContact,
	deleteContact,
	fetchContacts,
	updateContact,
} from "./operations";
import { logout } from "../auth/operations";

const initialState = {
	items: [],
	loading: false,
	error: false,
};

const slice = createSlice({
	name: "contacts",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.items = action.payload;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.items = state.items.filter((item) => item.id !== action.payload);
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.items.push(action.payload);
			})
			.addCase(updateContact.fulfilled, (state, action) => {
				state.items = state.items.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								name: action.payload.name,
								number: action.payload.number,
						  }
						: item
				);
			})
			.addCase(logout.fulfilled, () => initialState)
			.addMatcher(
				isAnyOf(
					fetchContacts.pending,
					deleteContact.pending,
					addContact.pending
				),
				(state) => {
					state.loading = true;
				}
			)
			.addMatcher(
				isAnyOf(
					fetchContacts.fulfilled,
					deleteContact.fulfilled,
					addContact.fulfilled
				),
				(state) => {
					state.loading = false;
				}
			)
			.addMatcher(
				isAnyOf(
					fetchContacts.rejected,
					deleteContact.rejected,
					addContact.rejected
				),
				(state, action) => {
					state.loading = false;
					state.error = action.payload;
				}
			);
	},
});

export const contactsReduser = slice.reducer;
// export const selectContacts = (state) => state.contacts.items;
// export const selectloading = (state) => state.contacts.loading;
// export const selecterror = (state) => state.contacts.error;

// export const selectFilteredContacts = createSelector(
// 	[selectContacts, selectSearchStr],
// 	(contacts, filterName) => {
// 		const filteredData = contacts.filter((contact) =>
// 			contact.name
// 				.toLowerCase()
// 				.trim()
// 				.includes(filterName.toLowerCase().trim())
// 		);

// 		return filteredData;
// 	}
// );

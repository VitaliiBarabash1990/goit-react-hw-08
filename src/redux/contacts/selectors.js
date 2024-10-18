import { createSelector } from "@reduxjs/toolkit";
import { selectSearchStr } from "../filters/selectors";

export const selectloading = (state) => state.contacts.loading;
export const selecterror = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
	[selectContacts, selectSearchStr],
	(contacts, filterName) => {
		const filteredData = contacts.filter((contact) =>
			contact.name
				.toLowerCase()
				.trim()
				.includes(filterName.toLowerCase().trim())
		);

		return filteredData;
	}
);

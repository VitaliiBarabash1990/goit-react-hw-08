// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";

// axios.defaults.baseURL = "https://67097641af1a3998baa19406.mockapi.io/";

export const fetchContacts = createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkApi) => {
		try {
			const { data } = await goitApi.get("/contacts");
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (id, thunkApi) => {
		try {
			const { data } = await goitApi.delete(`/contacts/${id}`);
			return data.id;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (body, thunkApi) => {
		try {
			const { data } = await goitApi.post(`/contacts`, body);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const updateContact = createAsyncThunk(
	"contacts/updateContact",
	async (value, thunkApi) => {
		const id = value.id;
		const body = { name: value.name, number: value.number };

		try {
			const { data } = await goitApi.patch(`/contacts/${id}`, body);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

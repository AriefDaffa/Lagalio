import { createSlice } from '@reduxjs/toolkit';

export const searchResultSlice = createSlice({
	name: 'searchResult',
	initialState: {
		result: [],
	},
	reducers: {
		insertResult: (state, action) => {
			state.result = action.payload;
		},
	},
});

export const { insertResult } = searchResultSlice.actions;

export default searchResultSlice.reducer;

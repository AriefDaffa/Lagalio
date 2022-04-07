import { createSlice } from '@reduxjs/toolkit';

export const searchResultSlice = createSlice({
	name: 'searchResult',
	initialState: {
		result: [],
		trending: [],
	},
	reducers: {
		insertResult: (state, action) => {
			state.result = action.payload;
		},
		insertTrendingResult: (state, action) => {
			state.trending = action.payload;
		},
	},
});

export const { insertResult, insertTrendingResult } = searchResultSlice.actions;

export default searchResultSlice.reducer;

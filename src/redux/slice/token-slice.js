import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
	name: 'token',
	initialState: {
		token: window.location.hash
			.substring(1, window.location.hash.length - 1)
			.split('&')[0]
			.split('=')[1],
		expiredToken: false,
	},
	reducers: {
		resetToken: (state, action) => {
			state.expiredToken = action.payload;
		},
	},
});

export const { resetToken } = tokenSlice.actions;

export default tokenSlice.reducer;

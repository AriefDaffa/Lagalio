import { configureStore } from '@reduxjs/toolkit';
import searchResultSlice from './slice/result-slice';

const store = configureStore({
	reducer: {
		searchResult: searchResultSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
import { configureStore } from '@reduxjs/toolkit';
import searchResultSlice from './slice/result-slice';

export default configureStore({
	reducer: {
		searchResult: searchResultSlice,
	},
});

import { configureStore } from '@reduxjs/toolkit';
// import AccountReducer from "./account-slice";
import tokenSlice from './slice/token-slice';

export default configureStore({
	reducer: {
		token: tokenSlice,
	},
});

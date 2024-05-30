import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filter from '@src/redux/slises/filterSlice';

const rootReducer = combineReducers({
	filter,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

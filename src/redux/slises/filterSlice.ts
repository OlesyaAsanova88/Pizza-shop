import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CATEGORY } from '@src/const';
import { IFilterState, TCategory } from '@src/types/Filter';

const initialState: IFilterState = {
	category: CATEGORY[0],
	sort: {
		name: 'по популярности',
		sortProperty: 'raiting',
	},
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategory(state, action: PayloadAction<TCategory>) {
			console.log(action);
			state.category = action.payload;
		},
	},
});

export const { setCategory } = filterSlice.actions;

export default filterSlice.reducer;

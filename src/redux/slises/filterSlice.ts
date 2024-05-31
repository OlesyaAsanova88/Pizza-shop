import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CATEGORY } from '@src/const';
import { IFilterState, TCategory, TSort } from '@src/types/Filter';

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
			
			state.category = action.payload;
		},
		setSort(state, action: PayloadAction<TSort>) {
			
			state.sort = action.payload;
		},
	},
});

export const { setCategory, setSort } = filterSlice.actions;

export default filterSlice.reducer;

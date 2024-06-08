import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CATEGORY } from '@src/const';
import { IFilterState, TCategory, TSort } from '@src/types/Filter';

const initialState: IFilterState = {
	category: CATEGORY[0],
	pageCount: 1,
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
		setPageCount(state, action) {
			state.pageCount = action.payload
		},
		setFilters(state, action) {
			state.pageCount = action.payload.pageCount
			state.category = action.payload.categoryId
			state.sort = action.payload.sort
		}
	},
});

export const { setCategory, setSort, setPageCount, setFilters } = filterSlice.actions;

export default filterSlice.reducer;

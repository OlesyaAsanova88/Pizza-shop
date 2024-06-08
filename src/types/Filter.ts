export type TSort = {
	name: string;
	sortProperty: string;
};

export interface IFilterState {
	category: TCategory;
	sort: TSort;
	pageCount: number;
}

export type TCategory = { id: number; name: string };

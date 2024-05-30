export type TSort = {
	name: string;
	sortProperty: string;
};

export interface IFilterState {
	category: TCategory;
	sort: TSort;
}

export type TCategory = { id: number; name: string };

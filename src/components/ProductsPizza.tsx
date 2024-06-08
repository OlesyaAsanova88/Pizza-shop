import { useState, useEffect, FC, useContext } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useAppSelector, useAppDispatch } from '@src/App/hooks/index';

import { SearchContext } from '@src/App/App';
//import {products} from '@src/assets/db.json'
import { setCategory, setPageCount } from '@src/redux/slises/filterSlice';
import { TCategory } from '@src/types/Filter';
import Categories from './Categories';
import Sort from './Sort';
import Sceleton from '@components/Sceleton';
import { CardPizza } from './CardPizza';
import { Product } from '@src/types/Product';
import Pagination from './Pagination';

type Loading = boolean;

interface Props {
	searchValue: string;
}

const ProductsPizza: FC<Props> = () => {
	const category = useAppSelector((state) => state.filter.category);
	const sortType = useAppSelector((state) => state.filter.sort.sortProperty);
	const pageCount = useAppSelector((state) => state.filter.pageCount);
	const dispatch = useAppDispatch();
	

	const setCategoryHandler = (cat: TCategory) => {
		dispatch(setCategory(cat));
	};

	const onChangePage = (p: number) => {
		dispatch(setPageCount(p))
	}

	// const [currentPage, setCurrentPage] = useState(1);
	const { searchValue } = useContext(SearchContext);
	const [products, setProducts] = useState<Product[] | null>([]);
	const [isLoading, setIsLoading] = useState<Loading>(false);

	useEffect(() => {
		setIsLoading(true);

		const sortBy = sortType;
		const categoryId = category.id > 0 ? `category=${category.id}` : '';

		axios.get(`https://66276664b625bf088c08362b.mockapi.io/products?page=${pageCount}&limit=6&${categoryId}&sortBy=${sortBy}`)
		.then((res) => {
			setProducts(res.data);
			setIsLoading(false);
		})
	}, [category, sortType, pageCount]);

	useEffect(() => {
		const queryString = qs.stringify({
			categoryId:category,
			sortBy:sortType,
			pageCount
		})
		console.log(queryString)
	}, [category, sortType, pageCount])


	const items =
		products &&
		products
			.filter((product) => {
				if (product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
					return true;
				}

				return false;
			})
			?.map((product) => <CardPizza key={product.id} {...product} />);

	const skeletons = [...new Array(8)].map((_, index) => <Sceleton key={index} />);

	return (
		<>
			<div className="wrapper">
				<div className="content">
					<div className="container">
						<div className="content__top">
							<Categories value={category} onClickCategory={(cat: TCategory) => setCategoryHandler(cat)} />
							<Sort  />
						</div>

						<h2 className="content__title">Все пиццы</h2>
						<div className="content__items">{isLoading ? skeletons : items}</div>
					</div>
				</div>

				<Pagination value={pageCount} onChangePage={onChangePage} />
			</div>
		</>
	);
};

export default ProductsPizza;

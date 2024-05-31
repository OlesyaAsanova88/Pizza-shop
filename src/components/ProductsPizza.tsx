import Categories from './Categories';
import Sort from './Sort';
import { useState, useEffect, FC, useContext } from 'react';
import Sceleton from '@components/Sceleton';
import { CardPizza } from './CardPizza';
import { Product } from '@src/types/Product';
import Pagination from './Pagination';
import { SearchContext } from '@src/App/App';
//import {products} from '@src/assets/db.json'
import { useAppSelector, useAppDispatch } from '@src/App/hooks/index';
import { setCategory } from '@src/redux/slises/filterSlice';
import { TCategory } from '@src/types/Filter';

type Loading = boolean;

interface Props {
	searchValue: string;
}

const ProductsPizza: FC<Props> = () => {
	const category = useAppSelector((state) => state.filter.category);

	const dispatch = useAppDispatch();
	const sortType = useAppSelector((state) => state.filter.sort.sortProperty);

	const { searchValue } = useContext(SearchContext);
	const [products, setProducts] = useState<Product[] | null>([]);
	const [isLoading, setIsLoading] = useState<Loading>(false);

	const setCategoryHandler = (cat: TCategory) => {
		dispatch(setCategory(cat));
	};

	// const [categoryId, setCategoryId] = useState(0);
	// const [sortType, setSortType] = useState({
	// 	name: 'популярности',
	// 	sortProperty: 'raiting',
	// });

	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setIsLoading(true);

		const sortBy = sortType;
		const categoryId = category.id > 0 ? `category=${category.id}` : '';

		fetch(
			`https://66276664b625bf088c08362b.mockapi.io/products?page=${currentPage}&limit=6&${categoryId}&sortBy=${sortBy}`,
		)
			.then((res) => {
				if (!res.ok) {
					throw new Error('Failed to fetch products');
				}
				return res.json();
			})
			.then((json) => {
				setProducts(json);
			})
			.catch((err) => {
				console.error('Error fetching products:', err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [category, sortType, currentPage]);


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

				<Pagination onChangePage={(number) => setCurrentPage(number)} />
			</div>
		</>
	);
};

export default ProductsPizza;

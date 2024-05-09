import Categories from './Categories';
import Sort from './Sort';
import { useState, useEffect, FC } from 'react';
import Sceleton from '@components/Sceleton';
import { CardPizza } from './CardPizza';
import { Product } from '@src/types/Product';
import Pagination from './Pagination';

//import {products} from '@src/assets/db.json'

type Loading = boolean;

interface Props {
	searchValue: string;
}

const ProductsPizza: FC<Props> = ({ searchValue }) => {
	const [products, setProducts] = useState<Product[] | null>([]);
	const [isLoading, setIsLoading] = useState<Loading>(false);

	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState({
		name: 'популярности',
		sortProperty: 'raiting',
	});

	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		setIsLoading(true);

		const sortBy = sortType.sortProperty;
		const category = categoryId > 0 ? `category=${categoryId}` : '';

		// const url =
		// 	categoryId !== 0
		// 		? `https://66276664b625bf088c08362b.mockapi.io/products?category=${categoryId}`
		// 		: 'https://66276664b625bf088c08362b.mockapi.io/products';

		fetch(
			`https://66276664b625bf088c08362b.mockapi.io/products?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}`,
		)
			// fetch(url)
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
		console.log('productsUseEffect');
	}, [categoryId, sortType, currentPage]);

	console.log(products);

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
							<Categories value={categoryId} onClickCategory={(i: number) => setCategoryId(i)} />
							<Sort sortValue={sortType} onClickSort={(i) => setSortType(i)} />
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

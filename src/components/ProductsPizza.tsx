import Categories from './Categories';
import Sort from './Sort';
import { useState, useEffect } from 'react';
import Sceleton from '@components/Sceleton';
import { CardPizza } from './CardPizza';
import { Product } from '@src/types/Product';
//import {products} from '@src/assets/db.json'

type Loading = boolean;

//настроить сервер , исп-ть .env(скрытое окружение),

export default function ProductsPizza() {
	const [products, setProducts] = useState<Product[] | null>([]);
	const [isLoading, setIsLoading] = useState<Loading>(false);

	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState({
		name: 'популярности',
		sortProperty: 'raiting',
	});

	useEffect(() => {
		setIsLoading(true);

		const sortBy = sortType.sortProperty;
		const category = categoryId > 0 ? `category=${categoryId}` : '';

		// const url =
		// 	categoryId !== 0
		// 		? `https://66276664b625bf088c08362b.mockapi.io/products?category=${categoryId}`
		// 		: 'https://66276664b625bf088c08362b.mockapi.io/products';

		fetch(`https://66276664b625bf088c08362b.mockapi.io/products?${category}&sortBy=${sortBy}`)
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
	}, [categoryId, sortType]);

	console.log(products);

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
						<div className="content__items">
							{isLoading
								? [...new Array(8)].map((_, index) => <Sceleton key={index} />)
								: products && products?.map((product) => <CardPizza key={product.id} {...product} />)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// {products?.length &&
// 	products.map((product) =>
// 		 <ItemPizza key={product.id} {...product} />
// 	)}

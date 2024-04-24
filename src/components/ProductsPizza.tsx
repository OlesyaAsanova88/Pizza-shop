import Categories from './Categories';
import Sort from './Sort';
//import { ItemPizza } from './ItemPizza';
import { useState, useEffect } from 'react';
import Sceleton from '@components/Sceleton';
import { ItemPizza } from './ItemPizza';
//import {products} from '@src/assets/db.json'

interface Product {
	id: number;
	imgUrl: string;
	name: string;
	types: number[];
	price: number;
	sizes: number[];
	caregory: number;
	raiting: number;
}

type Loading = boolean;
//настроить сервер , исп-ть .env(скрытое окружение),

export default function CreatePizza() {
	const [products, setProducts] = useState<Product[] | null>(null);
	const [isLoading, setIsLoading] = useState<Loading>(true);

	useEffect(() => {
		fetch(`https://66276664b625bf088c08362b.mockapi.io/products`)
			.then((res) => res.json())
			.then((json) => setProducts(json));
		setIsLoading(false);
	}, []);

	console.log(products);

	return (
		<>
			<div className="wrapper">
				<div className="content">
					<div className="container">
						<div className="content__top">
							<Categories />
							<Sort />
						</div>

						<h2 className="content__title">Все пиццы</h2>
						<div className="content__items">
							{isLoading
								? [...new Array(8)].map((_, index) => <Sceleton key={index} />)
								: products?.length &&
								  products.map((product) => <ItemPizza key={product.id} {...product} />)}
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

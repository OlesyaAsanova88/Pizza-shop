
import Categories from './Categories';
import Sort from './Sort';
import { ItemPizza } from './ItemPizza';
import { useState, useEffect } from 'react';
//import {products} from '@src/assets/db.json'

interface Product {
	id: number;
	imgUrl: string,
	name: string;
    types: number[],
    price: number,
    sizes: number[],
    caregory: number,
    raiting: number

}

//настроить сервер , исп-ть .env(скрытое окружение), 

export default function CreatePizza() {
	const [products, setProducts] = useState<Product[] | null>(null);

	useEffect(() => {
		fetch(`https://66276664b625bf088c08362b.mockapi.io/products`)
			.then((res) => res.json())
			.then((json) => setProducts(json));
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
							{products?.length && products.map((product) => (
								<ItemPizza 
								key={product.id}
								{...product}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

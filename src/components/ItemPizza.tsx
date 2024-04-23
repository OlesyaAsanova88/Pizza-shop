import { FC, useState } from 'react';
import PlusSvg from '../assets/svg/PlusSvg';

interface Product {
	name: string;
	price: number;
	imgUrl: string;
	sizes: number[];
	types: number[];
}

export const  ItemPizza: FC<Product> = ({ name, price, imgUrl, sizes, types }) => {
	const [count, setCount] = useState(0);
	const [activeType, setActiveType] = useState(0);
	const [activeSyze, setActiveSize] = useState(0);

	const nemeTypes = ['тонкое', 'традиционное']

	const plusCount = () => {
		setCount(count + 1);
	};

	return (
		<div className="pizza-block">
			<img
				className="pizza-block__image"
				src={imgUrl}
				alt="Pizza"
			/>
			<h4 className="pizza-block__title">{name}</h4>
			<div className="pizza-block__selector">
				<ul>
					{types.map((type: number) => (
						<li 
						onClick={() => setActiveType(type)}
						className={activeType === type ? 'active' : ''}
						key={type}>
							{ nemeTypes[type] }
						</li>
					))}
				</ul>
				<ul>
					{
					sizes.map((size: number) =>(
						<li 
						onClick={() => setActiveSize(size) }
						className={activeSyze === size ? 'active' : ''}
						key={size}>
							{ size } cm
						</li>
					))
					}
					
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {price} ₽</div>
				<button onClick={plusCount} className="button button--outline button--add">
					<PlusSvg />
					<span>Добавить</span>
					<i>{count}</i>
				</button>
			</div>
		</div>
	);
}

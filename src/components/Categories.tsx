//import { useState } from 'react';

import { FC } from 'react';

interface Props {
	value: number;
	onClickCategory: (n: number) => void;
}

const Categories: FC<Props> = ({ value, onClickCategory }) => {
	//const [tabCategories, setTabCategories] = useState(value);

	// const activeCategory = (index: number) => {
	// 	setTabCategories(index);
	// };

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
	return (
		<div className="categories">
			<ul>
				{categories.map((category, i) => (
					<li
						key={category}
						// onClick={() => activeCategory(index)}
						onClick={() => onClickCategory(i)}
						className={value === i ? 'active' : ''}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;

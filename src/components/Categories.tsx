import { useState } from 'react';

export default function Categories() {
	const [tabCategories, setTabCategories] = useState(0);

	const activeCategory = (index: number) => {
		setTabCategories(index);
	};

	const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
	return (
		<div className="categories">
			<ul>
				{categories.map((category, index) => (
					<li
						key={category}
						onClick={() => activeCategory(index)}
						className={tabCategories === index ? 'active' : ''}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}

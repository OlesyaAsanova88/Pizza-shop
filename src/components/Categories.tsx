//import { useState } from 'react';

import { CATEGORY } from '@src/const';
import { TCategory } from '@src/types/Filter';
import { FC } from 'react';

interface Props {
	value: TCategory;
	onClickCategory: (category: TCategory) => void;
}

const Categories: FC<Props> = ({ value, onClickCategory }) => {
	return (
		<div className="categories">
			<ul>
				{CATEGORY.map((category) => (
					<li
						key={category.id}
						onClick={() => onClickCategory(category)}
						className={value.id === category.id ? 'active' : ''}
					>
						{category.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;

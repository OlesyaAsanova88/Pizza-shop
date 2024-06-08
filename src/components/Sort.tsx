import { FC, useState } from 'react';
import { TSort } from '@src/types/Filter';
import ArrowSortSvg from '@src/assets/svg/ArrowSortSvg';
import { useAppSelector, useAppDispatch } from '@src/App/hooks/index';
import { setSort } from '@src/redux/slises/filterSlice';

export const sortList = [
	{ name: 'популярности', sortProperty: 'raiting' },
	{ name: 'цене', sortProperty: 'price' },
	{ name: 'алфавиту', sortProperty: 'title' },
];

const Sort: FC = () => {
const dispatch = useAppDispatch();
const sort = useAppSelector((state) => state.filter.sort);

const [open, setOpen] = useState(false);
	
const selectedHendler = (obj: TSort) => {
		dispatch(setSort(obj))
		setOpen(false);
	};

	return (
		<div className="sort">
			<div className="sort__label">
				<ArrowSortSvg />
				<b>Сортировка по:</b>
				<span onClick={() => setOpen(!open)}>{sort.name}</span>
			</div>
			{open && (
				<div className="sort__popup">
					<ul>
						{sortList.map((obj: TSort) => (
							<li onClick={() => selectedHendler(obj)} className={sort.sortProperty === obj.sortProperty ? 'active' : ''} key={obj.name}>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Sort;

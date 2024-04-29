import { FC, useState } from 'react';
import ArrowSortSvg from '@src/assets/svg/ArrowSortSvg';

interface SortItem {
	name: string;
	sortsortProperty: string;
}
interface Props {
	sortValue: SortItem;
	onClickSort: (sortItem: SortItem) => void;
}

const Sort: FC<Props> = ({ sortValue, onClickSort }) => {
	const [open, setOpen] = useState(false);
	const sortList = [
		{ name: 'популярности', sortProperty: 'raiting' },
		{ name: 'цене', sortProperty: 'price' },
		{ name: 'алфавиту', sortProperty: 'title' },
	];
	//const sortName = sortList[sortValue].name;

	const selectedHendler = (selectedSort: SortItem) => {
		onClickSort(selectedSort);
		setOpen(false);
	};

	return (
		<div className="sort">
			<div className="sort__label">
				<ArrowSortSvg />
				<b>Сортировка по:</b>
				<span onClick={() => setOpen(!open)}>{sortValue.name}</span>
			</div>
			{open && (
				<div className="sort__popup">
					<ul>
						{sortList.map((obj: SortItem) => (
							<li onClick={() => selectedHendler(obj)} className={sortValue.sortsortProperty === obj.sortsortProperty ? 'active' : ''} key={obj.name}>
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

import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';
import { FC } from 'react';

interface Props {
	value: number;
	onChangePage: (n: number) => void;
}

const Pagination: FC<Props> = ({ value, onChangePage }) => {
	return (
		<ReactPaginate
			className={style.block}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={6}
			pageCount={2}
			fourcePage={value -1}
			previousLabel="<"
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;

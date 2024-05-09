import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';
import { FC } from 'react';

interface Props {
	onChangePage: (n: number) => void;
}

const Pagination: FC<Props> = ({ onChangePage }) => {
	return (
		<ReactPaginate
			className={style.block}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={6}
			pageCount={2}
			previousLabel="<"
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;

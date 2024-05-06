import { FC } from 'react';
import styles from './Search.module.scss';

interface Props {
	searchValue: string;
	setSearchValue: (s: string) => void;
}

const Search: FC<Props> = ({ searchValue, setSearchValue }) => {
	return (
		<input
			value={searchValue}
			onChange={(event) => setSearchValue(event.target.value)}
			className={styles.input}
			placeholder="Search..."
		/>
	);
};
export default Search;

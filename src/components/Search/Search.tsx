import { useContext } from 'react';
import styles from './Search.module.scss';
import { SearchContext } from '@src/App/App';

// interface Props {
// 	searchValue: string;
// 	setSearchValue: (s: string) => void;
// }

const Search = () => {
	const { searchValue, setSearchValue } = useContext(SearchContext);

	return (
		<div className={styles.block}>
			<input
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				className={styles.input}
				placeholder="Search..."
			/>

			{searchValue && (
				<svg
					onClick={() => setSearchValue('')}
					className={styles.icon}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1019_194217)">
						<path
							d="M7 7L17 17M7 17L17 7"
							stroke="#292929"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1019_194217">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)}
		</div>
	);
};
export default Search;

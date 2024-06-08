import { FC, useCallback, useContext, useRef, useState } from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import { SearchContext } from '@src/App/App';

interface Props {
	searchValue: string;
	setSearchValue: (s: string) => void;
}

const Search: FC <Props> = () => {
	const [value, setValue] = useState('');
	const { searchValue, setSearchValue } = useContext(SearchContext);

	const inputRef = useRef<React.RefAttributes<HTMLInputElement>>(); 

	const updateSearchValue = useCallback(
		
		debounce((str: string) => {
			console.log('first');
			setSearchValue(str);
		}, 1000),
		[]
		
	)

	const onChangeInput = (event) => {
		setValue(event.target.value);
		updateSearchValue(event.target.value)
		
};

	const onClickClear = () => {
		setSearchValue('');
		inputRef.current.focus()
	}

	return (
		<div className={styles.block}>
			<input
			ref={inputRef}
				value={value}
				onChange={onChangeInput}
				className={styles.input}
				placeholder="Search..."
			/>

			{searchValue && (
				<svg
					onClick={onClickClear}
					className={styles.icon}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1019_194217)">
						<path
							d="M7 7L17 17M7 17L17 7"
							stroke="#292929"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
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

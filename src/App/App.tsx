import React, { createContext, useState, Dispatch, SetStateAction, FC } from 'react';
import Header from '@components/Header';
import Home from '@src/pages/Home';
import Cart from '@src/pages/Cart';
import { Route, Routes } from 'react-router-dom';
import NoteFaund from '@src/pages/NotFaund';

// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '@src/redux/slises/filterSlice';

interface SearchContextProps {
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);

const App: FC = () => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<SearchContext.Provider value={{ searchValue, setSearchValue }}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<NoteFaund />} />
			</Routes>
		</SearchContext.Provider>
	);
};

export default App;

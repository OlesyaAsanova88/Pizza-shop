import Header from '@components/Header';
import Home from '@src/pages/Home';
import Cart from '@src/pages/Cart';
import { Route, Routes } from 'react-router-dom';
import NoteFaund from '@src/pages/NotFaund';
import { useState } from 'react';

export default function App() {
	const [searchValue, setSearchValue] = useState('');

	return (
		<>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<Routes>
				<Route path="/" element={<Home/>}
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<NoteFaund />} />
			</Routes>

			{/* <div>footer</div> */}
		</>
	);
}

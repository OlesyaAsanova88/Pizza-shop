import Header from '@components/Header';
import Home from '@src/pages/Home';
import Cart from '@src/pages/Cart';
import { Route, Routes } from 'react-router-dom';
import NoteFaund from '@src/pages/NotFaund';
export default function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<NoteFaund />} />
			</Routes>

			{/* <div>footer</div> */}
		</>
	);
}

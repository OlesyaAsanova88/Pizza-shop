import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-pizza.png';
import BoxSvg from '../assets/svg/BoxSvg';
import Search from './Search/Search';
import { FC } from 'react';

interface Search {
	searchValue: string;
	setSearchValue: (s: string) => void;
}

const Header: FC<Search> = ({ searchValue, setSearchValue }) => {
	return (
		<div className="header">
			<div className="container">
				<Link to="/">
					<div className="header__logo">
						<img width="38" height="38" src={logo} alt="Pizza logo" />
						<div>
							<h1>React Pizza</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</Link>
				<Search searchValue={searchValue} setSearchValue={setSearchValue} />
				<div className="header__cart">
					<Link to="/cart" className="button button--cart">
						<span>520 ₽</span>
						<div className="button__delimiter"></div>
						<BoxSvg />
						<span>3</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;

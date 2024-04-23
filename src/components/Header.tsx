import logo from '../assets/img/logo-pizza.png';
import BoxSvg from '../assets/svg/BoxSvg';

export default function Header() {
	return (
		<div className="header">
			<div className="container">
				<div className="header__logo">
					<img width="38" height="38" src={logo} alt="Pizza logo" />
					<div>
						<h1>React Pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</div>
				<div className="header__cart">
					<a href="/cart.html" className="button button--cart">
						<span>520 ₽</span>
						<div className="button__delimiter"></div>
						<BoxSvg />
						<span>3</span>
					</a>
				</div>
			</div>
		</div>
	);
}

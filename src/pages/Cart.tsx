import { Link } from 'react-router-dom';
import CartBoxSvg from '@src/assets/svg/CartBoxSvg';
import TrushSvg from '@src/assets/svg/TrushSvg';
import ArrowLeftSvg from '@src/assets/svg/ArrowLeftSvg';

const Cart = () => {
	return (
		<div className="container container--cart">
			<div className="cart">
				<div className="cart__top">
					<h2 className="content__title">
						<CartBoxSvg />
						Корзина
					</h2>
					<div className="cart__clear">
						<TrushSvg />
						<span>Очистить корзину</span>
					</div>
				</div>
				<div className="content__items">
					{/* {items.map((item: any) => (
						<CartItem key={item.id} {...item} />
					))} */}
				</div>
				<div className="cart__bottom">
					<div className="cart__bottom-details">
						<span>
							{' '}
							Всего пицц: <b>{} шт.</b>{' '}
						</span>
						<span>
							{' '}
							Сумма заказа: <b>{} ₽</b>{' '}
						</span>
					</div>
					<div className="cart__bottom-buttons">
						<Link to="/" className="button button--outline button--add go-back-btn">
							<ArrowLeftSvg />
							<span>Вернуться назад</span>
						</Link>
						<div className="button pay-btn">
							<span>Оплатить сейчас</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;

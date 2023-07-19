import { FC } from 'react';
import cls from './cart.module.css';
import cart from '../../../assets/img/cart.svg';

const Cart: FC = () => {
	return (
		<div className={cls.container}>
			<img src={cart} alt="cart" draggable={false}/>
			<p className={cls.counter}>0</p>
		</div>
	);
};

export default Cart;

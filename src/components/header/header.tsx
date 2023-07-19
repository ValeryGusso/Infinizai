import { FC } from 'react';
import cls from './header.module.css';
import Cart from './cart/cart';
import logo from '../../assets/img/logo.svg';
import Navigation from './navigation/navigation';
import Button from '../UI/button/button';

const navigation = [
	{ id: 0, title: 'Home', href: '#' },
	{ id: 1, title: 'About', href: '#' },
	{ id: 2, title: 'Team', href: '#' },
	{ id: 3, title: 'Shop', href: '#' },
	{ id: 4, title: 'Pages', href: '#' },
];

const Header: FC = () => {
	return (
		<header className={cls.container}>
			<img src={logo} alt="logo" draggable={false} />
			<Navigation items={navigation} />
			<div className={cls.right__block}>
				<Cart />
				<Button text="Contact Us" type="transparent" width={178} />
			</div>
		</header>
	);
};

export default Header;

import { FC } from 'react';
import cls from './header.module.css';
import Cart from './cart/cart';
import logo from '../../assets/img/logo.svg';
import Navigation from './navigation/navigation';
import Button from '../UI/button/button';
import { navigationLinks } from '../../assets/constants';

const Header: FC = () => {
	return (
		<header className={cls.container}>
			<img src={logo} alt="logo" draggable={false} />
			<Navigation items={navigationLinks} />
			<div className={cls.right__block}>
				<Cart />
				<Button text="Contact Us" type="transparent" width={178} />
			</div>
		</header>
	);
};

export default Header;

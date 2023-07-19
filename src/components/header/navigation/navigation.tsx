import { FC } from 'react';
import cls from './navigation.module.css';

interface NavItem {
	id: number;
	title: string;
	href: string;
}

interface NavigationProps {
	items: NavItem[];
}

const Navigation: FC<NavigationProps> = ({ items }) => {
	return (
		<nav className={cls.container}>
			{items.map((link, i) => (
				<a className={i === 0 ? cls.active : ''} key={link.id} href={link.href}>
					{link.title}
				</a>
			))}
		</nav>
	);
};

export default Navigation;

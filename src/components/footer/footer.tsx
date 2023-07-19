import { FC } from 'react';
import cls from './footer.module.css';
import logo from '../../assets/img/logo.svg';
import Column from './column/column';

const list1 = [
	{ id: 0, title: 'About', href: '#' },
	{ id: 1, title: 'Blog', href: '#' },
	{ id: 2, title: 'Shop', href: '#' },
	{ id: 3, title: 'Contact us', href: '#' },
];

const list2 = [
	{ id: 0, title: 'Styleguide', href: '#' },
	{ id: 1, title: 'Changelog', href: '#' },
	{ id: 2, title: 'Licenses', href: '#' },
	{ id: 3, title: 'Team', href: '#' },
];

const Footer: FC = () => {
	return (
		<div className={cls.container}>
			<div>
				<img src={logo} alt="logo" draggable={false} />
				<p className={cls.text}>
					Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed
					massa non .
				</p>
			</div>
			<Column title="Menu Items" items={list1} />
			<Column title="Other Pages" items={list2} />
		</div>
	);
};

export default Footer;

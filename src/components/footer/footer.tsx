import { FC } from 'react';
import cls from './footer.module.css';
import logo from '../../assets/img/logo.svg';
import Column from './column/column';
import { menuList, otherList } from '../../assets/constants';

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
			<Column title="Menu Items" items={menuList} />
			<Column title="Other Pages" items={otherList} />
		</div>
	);
};

export default Footer;

import { FC } from 'react';
import cls from './column.module.css';

interface ILink {
	id: number;
	title: string;
	href: string;
}

interface ColumnProps {
	title: string;
	items: ILink[];
}

const Column: FC<ColumnProps> = ({ title, items }) => {
	return (
		<div className={cls.container}>
			<h2 className={cls.title}>{title}</h2>
			<ul className={cls.list}>
				{items.map(link => (
					<li key={link.id} className={cls.list__item}>
						<a href={link.href}>{link.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Column;

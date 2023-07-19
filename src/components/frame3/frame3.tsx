import { FC } from 'react';
import cls from './frame3.module.css';
import Future from '../UI/future/future';
import image1 from '../../assets/img/frame3_img1.png';
import Card from './card/card';
import Button from '../UI/button/button';
import { cards } from '../../assets/constants';

const Frame3: FC = () => {
	return (
		<div className={cls.container}>
			<div className={cls.header}>
				<div>
					<Future />
					<p className={cls.text__main}>Latest News & Articles</p>
				</div>
				<Button text="Read More" type="fill" width={175} />
			</div>
			<div className={cls.content}>
				<div className={cls.left__block}>
					<img src={image1} alt="gamepad" draggable={false} />
					<p className={cls.date}>April 2, 2021</p>
					<p className={cls.description}>Esports Group teams up with the Indianapolis Colts</p>
				</div>
				<div className={cls.right__block}>
					{cards.map(card => (
						<Card card={card} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Frame3;

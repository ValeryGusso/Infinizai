import { FC } from 'react';
import cls from './frame3.module.css';
import Future from '../UI/future/future';
import image1 from '../../assets/img/frame3_img1.png';
import image2 from '../../assets/img/frame3_img2.png';
import image3 from '../../assets/img/frame3_img3.png';
import image4 from '../../assets/img/frame3_img4.png';
import image5 from '../../assets/img/frame3_img5.png';
import Card from './card/card';
import Button from '../UI/button/button';

const cards = [
	{ img: image2, alt: 'gamer', date: 'April 2, 2021', description: 'NAVI reveals s1mple fifth anniversary' },
	{ img: image3, alt: 'PC', date: 'April 2, 2021', description: 'A1esports Shares new picture' },
	{ img: image4, alt: 'keyboard', date: 'April 2, 2021', description: 'T1 unveil partnership with Razer' },
	{ img: image5, alt: 'headphones', date: 'April 2, 2021', description: 'RX secures content partnership with' },
];

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

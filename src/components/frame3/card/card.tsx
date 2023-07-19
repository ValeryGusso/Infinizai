import { FC } from 'react';
import cls from './card.module.css';

interface ICard {
	img: string;
	alt: string;
	date: string;
	description: string;
}

interface CardProps {
	card: ICard;
}

const Card: FC<CardProps> = ({ card }) => {
	return (
		<div className={cls.container}>
			<img src={card.img} alt={card.alt} draggable={false} />
			<p className={cls.date}>{card.date}</p>
			<p className={cls.description}>{card.description}</p>
		</div>
	);
};

export default Card;

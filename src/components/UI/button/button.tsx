import { FC } from 'react';
import cls from './button.module.css';

interface ButtonProps {
	text: string;
	type: 'transparent' | 'fill';
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, type }) => {
	return <button className={`${cls.button}${type === 'fill' ? ' ' + cls.fill : ''}`}>{text}</button>;
};

export default Button;

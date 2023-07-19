import { CSSProperties, FC } from 'react';
import cls from './button.module.css';

interface ButtonProps {
	text: string;
	type: 'transparent' | 'fill';
	width: number;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, type, width }) => {
	return (
		<button
			className={`${cls.button}${type === 'fill' ? ' ' + cls.fill : ''}`}
			style={{ '--w': width + 'px' } as CSSProperties}
		>
			{text}
		</button>
	);
};

export default Button;

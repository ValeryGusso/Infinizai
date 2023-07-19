import { FC } from 'react';
import cls from './future.module.css';
import flame from '../../../assets/img/flame.svg';

const Future: FC = () => {
	return (
		<div className={cls.container}>
			<img src={flame} alt="flame" />
			<p>FUTURE OF eSPORTS</p>
		</div>
	);
};

export default Future;

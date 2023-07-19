import { FC } from 'react';
import cls from './frame1.module.css';
import image1 from '../../assets/img/frame1_img1.png';
import Future from '../UI/future/future';
import Button from '../UI/button/button';

const Frame1: FC = () => {
	return (
		<div className={cls.container}>
			<div className={cls.left__block}>
				<Future />
				<p className={cls.text__main}>
					Unleash the Next{' '}
					<span>
						Generation
						<svg
							className={cls.line}
							xmlns="http://www.w3.org/2000/svg"
							width="435"
							height="16"
							viewBox="0 0 435 16"
							fill="none"
						>
							<path
								d="M2.5 13.9265C33.1667 4.92648 162.1 -7.67352 432.5 13.9265"
								stroke="#FDD048"
								stroke-width="4"
								stroke-linecap="round"
							/>
						</svg>
					</span>
					Of Gaming
				</p>
				<p className={cls.text__second}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar
					neque.
				</p>
				<div className={cls.footer}>
					<Button text="Explore More" type="fill" />
					<p>View our team</p>
				</div>
				<ul className={cls.socials}>
					<li>
						<a href="#">FACEBOOK</a>
					</li>
					<li>
						<a href="#">INSTAGRAM</a>
					</li>
					<li>
						<a href="#">TWITCH</a>
					</li>
				</ul>
			</div>
			<div className={cls.right__block}>
				<img src={image1} alt="game character" />
			</div>
		</div>
	);
};

export default Frame1;

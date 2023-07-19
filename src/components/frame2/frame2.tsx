import { FC } from 'react';
import cls from './frame2.module.css';
import Future from '../UI/future/future';
import image1 from '../../assets/img/frame2_img1.png';
import image2 from '../../assets/img/frame2_img2.png';
import image3 from '../../assets/img/frame2_img3.png';
import image4 from '../../assets/img/frame2_img4.png';

const Frame2: FC = () => {
	return (
		<div className={cls.container}>
			<div className={cls.left__block}>
				<img src={image1} alt="game character" draggable={false} />
			</div>
			<div className={cls.right__block}>
				<Future />
				<p className={cls.text__main}>Customize your Own Character</p>
				<p className={cls.text__second}>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
				</p>
				<ul className={cls.images}>
					<li className={cls.active}>
						<img src={image2} alt="game character" draggable={false} />
					</li>
					<li>
						<img src={image3} alt="game character" draggable={false} />
					</li>
					<li>
						<img src={image4} alt="game character" draggable={false} />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Frame2;

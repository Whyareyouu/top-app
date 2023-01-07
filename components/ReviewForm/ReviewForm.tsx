import style from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
export const ReviewForm = ({
	productId,
	className,
	...props
}: ReviewFormProps): JSX.Element => {
	return (
		<>
			<div className={cn(style.reviewForm, className)} {...props}>
				<Input placeholder='Имя' />
				<Input placeholder='Заголовок отзыва' className={style.title} />
				<div className={style.rating}>
					<span>Оценка:</span>
					<Rating rating={0} />
				</div>
				<Textarea placeholder='Текст отзыва' className={style.description} />
				<div className={style.submit}>
					<Button appearance='primary'>Отправить</Button>
					<span className={style.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			<div className={style.success}>
				<div className={style.successTitle}>Ваш отзыв отправлен</div>
				<div className={style.successDescription}>
					Спасибо, ваш отзыв будет опубликован после проверки.
				</div>
				<CloseIcon className={style.close} />
			</div>
		</>
	);
};

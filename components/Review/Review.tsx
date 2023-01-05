import style from './Review.module.css';
import { ReviewProps } from './Review.props';
import UserIcon from './user.svg';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Rating } from '../Rating/Rating';
export const Review = ({
	review,
	className,
	...props
}: ReviewProps): JSX.Element => {
	return (
		<div className={cn(style.review, className)} {...props}>
			<UserIcon className={style.user} />
			<div className={style.title}>
				<span className={style.name}>{review.name}:</span>&nbsp;&nbsp;
				<span>{review.title}</span>
			</div>
			<div className={style.date}>
				{format(new Date(review.createdAt), 'dd MMMM yyyy', { locale: ru })}
			</div>
			<div className={style.rating}>
				<Rating rating={review.rating} />
			</div>
			<div className={style.description}>{review.description}</div>
		</div>
	);
};

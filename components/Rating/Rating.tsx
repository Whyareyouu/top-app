import {
	useEffect,
	useState,
	KeyboardEvent,
	forwardRef,
	ForwardedRef,
} from 'react';
import style from './Rating.module.css';
import StarIcon from './Star.svg';
import cn from 'classnames';
import { RatingProps } from './Rating.props';
export const Rating = forwardRef(
	(
		{ rating, setRating, isEditeble = false, error, ...props }: RatingProps,
		ref: ForwardedRef<HTMLDivElement>
	): JSX.Element => {
		const [ratingArray, setRaitingArray] = useState<JSX.Element[]>(
			new Array(5).fill(<></>)
		);
		useEffect(() => {
			constructRating(rating);
		}, [rating]);
		const constructRating = (currentRating: number) => {
			const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
				<span
					className={cn(style.star, {
						[style.filed]: i < currentRating,
						[style.editable]: isEditeble,
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onHandleChange(i + 1)}>
					<StarIcon
						tabIndex={isEditeble ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGAElement>) => {
							isEditeble && onHandleSpace(i + 1, e);
						}}
					/>
				</span>
			));
			setRaitingArray(updatedArray);
		};
		const changeDisplay = (i: number) => {
			if (!isEditeble) return;
			constructRating(i);
		};
		const onHandleChange = (i: number) => {
			if (!isEditeble || !setRating) return;
			setRating(i);
		};
		const onHandleSpace = (i: number, event: KeyboardEvent) => {
			if (event.code !== 'Space' || !setRating) return;
			setRating(i);
		};
		return (
			<div
				{...props}
				ref={ref}
				className={cn(style.starWrapper, { [style.error]: error })}>
				{error && <span className={style.errorSpan}>{error.message}</span>}
				{ratingArray.map((r, i) => (
					<span key={i}>{r}</span>
				))}
			</div>
		);
	}
);

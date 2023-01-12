import style from './Card.module.css';
import cn from 'classnames';
import { CardProps } from './Card.props';
import { ForwardedRef, forwardRef } from 'react';
export const Card = forwardRef(
	(
		{ color = 'white', children, className, ...props }: CardProps,
		ref: ForwardedRef<HTMLDivElement>
	): JSX.Element => {
		return (
			<div
				className={cn(style.card, className, {
					[style.blue]: color === 'blue',
				})}
				ref={ref}
				{...props}>
				{children}
			</div>
		);
	}
);

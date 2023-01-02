import style from './Card.module.css';
import cn from 'classnames';
import { CardProps } from './Card.props';
export const Card = ({
	color = 'white',
	children,
	className,
	...props
}: CardProps): JSX.Element => {
	return (
		<div
			className={cn(style.card, className, { [style.blue]: color === 'blue' })}
			{...props}>
			{children}
		</div>
	);
};

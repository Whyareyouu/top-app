import style from './Ptag.module.css';
import { PtagProps } from './Ptag.props';
import cn from 'classnames';
export const Ptag = ({
	children,
	size = 'base',
	className,
	...props
}: PtagProps): JSX.Element => {
	return (
		<p
			className={cn(style.p, className, {
				[style.sm]: size === 'sm',
				[style.base]: size === 'base',
				[style.lg]: size === 'lg',
			})}
			{...props}>
			{children}
		</p>
	);
};

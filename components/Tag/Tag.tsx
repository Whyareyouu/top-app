import { TagProps } from './Tag.props';
import style from './Tag.module.css';
import cn from 'classnames';
export const Tag = ({
	size,
	children,
	color = 'ghost',
	href,
	className,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(style.tag, className, {
				[style.sm]: size === 'sm',
				[style.lg]: size === 'lg',
				[style.ghost]: color === 'ghost',
				[style.green]: color === 'green',
				[style.red]: color === 'red',
				[style.gray]: color === 'gray',
				[style.primary]: color === 'primary',
			})}
			{...props}>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};

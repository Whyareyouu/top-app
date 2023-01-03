import style from './Divider.module.css';
import { DividerProps } from './Divider.props';
import cn from 'classnames';
export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
	return <hr className={cn(style.hr, className)} {...props} />;
};

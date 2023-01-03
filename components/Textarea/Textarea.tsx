import style from './Textarea.module.css';
import cn from 'classnames';
import { TextAreaProps } from './Textarea.props';
export const Textarea = ({
	className,
	...props
}: TextAreaProps): JSX.Element => {
	return <textarea className={cn(className, style.textarea)} {...props} />;
};

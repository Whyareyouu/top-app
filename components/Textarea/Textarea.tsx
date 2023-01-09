import style from './Textarea.module.css';
import cn from 'classnames';
import { TextAreaProps } from './Textarea.props';
import { ForwardedRef, forwardRef } from 'react';
export const Textarea = forwardRef(
	(
		{ className, ...props }: TextAreaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<textarea
				className={cn(className, style.textarea)}
				ref={ref}
				{...props}
			/>
		);
	}
);

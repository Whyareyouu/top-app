import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';
export interface PtagProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	size?: 'sm' | 'base' | 'lg';
}

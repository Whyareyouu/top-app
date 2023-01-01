import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface TagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size?: 'sm' | 'lg';
	color?: 'red' | 'gray' | 'ghost' | 'green' | 'primary';
	href?: string;
}

import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface AdvantagesProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	description: string;
	id: string;
}

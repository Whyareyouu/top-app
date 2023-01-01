import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { format } from 'date-fns';
import style from './Footer.module.css';
export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(style.footer, className)} {...props}>
			<div className={style.footer_wrapper}>
				<p className={style.author}>
					OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
				</p>
				<a href='#' target='_blank' className={style.agreement}>
					Пользовательское соглашение
				</a>
				<a href='#' target='_blank' className={style.privacy}>
					Политика конфиденциальности
				</a>
			</div>
		</footer>
	);
};

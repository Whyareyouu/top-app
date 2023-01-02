import { SortEnum, SortProps } from './Sort.props';
import style from './Sort.module.css';
import SortIcon from './Sort.svg';
import cn from 'classnames';
export const Sort = ({
	sort,
	setSort,
	className,
	...props
}: SortProps): JSX.Element => {
	return (
		<div className={cn(style.sort, className)} {...props}>
			<span
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({ [style.Active]: sort === SortEnum.Rating })}>
				<SortIcon className={style.sortIcon} /> По рейтингу
			</span>
			<span
				onClick={() => setSort(SortEnum.Price)}
				className={cn({ [style.Active]: sort === SortEnum.Price })}>
				<SortIcon className={style.sortIcon} /> По цене
			</span>
		</div>
	);
};

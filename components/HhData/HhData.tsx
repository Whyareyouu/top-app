import style from './HhData.module.css';
import cn from 'classnames';
import { HhDataProps } from './HhData.props';
import { Card } from '../Card/Card';
import StarIcon from './Star.svg';
import { priceRu } from '../../helpers/helpers';
export const HhData = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
	...props
}: HhDataProps): JSX.Element => {
	return (
		<div className={cn(style.hh)} {...props}>
			<Card className={style.count}>
				<div className={style.Title}>Всего вакансий</div>
				<div className={style.countValue}>{count}</div>
			</Card>
			<Card className={style.salary}>
				<div>
					<div className={style.Title}>Начальный</div>
					<div className={style.salaryValue}>{priceRu(juniorSalary)}</div>
					<div className={style.rate}>
						<StarIcon className={style.filled} />
						<StarIcon />
						<StarIcon />
					</div>
				</div>
				<div>
					<div className={style.Title}>Средний</div>
					<div className={style.salaryValue}>{priceRu(middleSalary)}</div>
					<div className={style.rate}>
						<StarIcon className={style.filled} />
						<StarIcon className={style.filled} />
						<StarIcon />
					</div>
				</div>
				<div>
					<div className={style.Title}>Профессионал</div>
					<div className={style.salaryValue}>{priceRu(seniorSalary)}</div>
					<div className={style.rate}>
						<StarIcon className={style.filled} />
						<StarIcon className={style.filled} />
						<StarIcon className={style.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};

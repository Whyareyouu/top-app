import style from './Product.module.css';
import { ProductProps } from './Product.props';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { Htag } from '../HTag/Htag';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
export const Product = ({
	product,
	className,
	...props
}: ProductProps): JSX.Element => {
	return (
		<Card className={style.product}>
			<div className={style.logo}>
				<img
					src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
					alt={product.title}
				/>
			</div>
			<div className={style.title}>
				<Htag tag='h3'>{product.title}</Htag>
			</div>
			<div className={style.price}>
				{priceRu(product.price)}
				{product.oldPrice && (
					<Tag color='green' size='sm' className={style.oldPrice}>
						{priceRu(product.price - product.oldPrice)}
					</Tag>
				)}
			</div>
			<div className={style.credit}>
				{priceRu(product.credit)}/<span className={style.month}>мес</span>{' '}
			</div>
			<div className={style.rating}>
				<Rating rating={product.reviewAvg ?? product.initialRating} />
			</div>
			<div className={style.tags}>
				{product.categories.map((category) => (
					<Tag
						color='ghost'
						key={category}
						size='sm'
						className={style.category}>
						{category}
					</Tag>
				))}
			</div>
			<div className={style.priceTitle}>цена</div>
			<div className={style.creditTitle}>в кредит</div>
			<div className={style.rateTitle}>
				{product.reviewCount}{' '}
				{declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
			</div>
			<Divider className={style.hr} />
			<div className={style.description}>{product.description}</div>
			<div className={style.feature}>
				{product.characteristics.map((c) => (
					<div className={style.characteristics} key={c.name}>
						<span className={style.characteristicsName}>{c.name}</span>
						<span className={style.characteristicsDots}></span>
						<span className={style.characteristicsValue}>{c.value}</span>
					</div>
				))}
			</div>
			<div className={style.advBlock}>
				{product.advantages && (
					<div className={style.advantages}>
						<div className={style.advTitle}>Преимущества</div>{' '}
						{product.advantages}
					</div>
				)}
				{product.disadvantages && (
					<div className={style.disadvantages}>
						<div className={style.advTitle}>Недостатки</div>
						{product.disadvantages}
					</div>
				)}
			</div>
			<Divider className={style.hr} />
			<div className={style.actions}>
				<Button appearance='primary'>Узнать подробнее</Button>
				<Button
					appearance='ghost'
					arrow={'right'}
					className={style.reviewButton}>
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
};
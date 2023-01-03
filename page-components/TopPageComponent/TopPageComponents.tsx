import { Advantages, HhData, Htag, Product, Sort, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponents.props';
import style from './TopPageComponents.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reduce';

export const TopPageComponents = ({
	page,
	products,
	firstCategory,
}: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(
		sortReducer,
		{
			products,
			sort: SortEnum.Rating,
		}
	);
	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};
	return (
		<div className={style.wrapper}>
			<div className={style.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{sortedProducts && (
					<Tag color='gray' size='lg'>
						{sortedProducts.length}
					</Tag>
				)}
				<span>
					<Sort sort={sort} setSort={setSort} />
				</span>
			</div>
			<div>
				{sortedProducts &&
					sortedProducts.map((product) => (
						<Product product={product} key={product._id} />
					))}
			</div>
			<div className={style.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='lg'>
					hh.ru
				</Tag>
			</div>
			{firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
			{page.advantages && page.advantages.length > 0 && (
				<div>
					<Htag tag='h2'>Преимущества</Htag>
					{page.advantages.map((advantage) => (
						<Advantages
							id={advantage._id}
							title={advantage.title}
							description={advantage.description}
						/>
					))}
				</div>
			)}
			{page.seoText && (
				<div
					className={style.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}></div>
			)}
			<Htag tag='h2'> Получаемые навыки</Htag>
			{page.tags.map((tag) => (
				<Tag key={tag} color='primary' size='lg'>
					{tag}
				</Tag>
			))}
		</div>
	);
};

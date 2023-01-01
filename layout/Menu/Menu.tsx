import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import style from './Menu.module.css';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductIcon from './icons/product.svg';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import Link from 'next/link';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CoursesIcon />,
		id: TopLevelCategory.Courses,
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services,
	},
	{
		route: 'books',
		name: 'Книги',
		icon: <BooksIcon />,
		id: TopLevelCategory.Books,
	},
	{
		route: 'products',
		name: 'Товары',
		icon: <ProductIcon />,
		id: TopLevelCategory.Products,
	},
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((menu) => (
					<div key={menu.route}>
						<Link href={`/${menu.route}`}>
							<div
								className={cn(style.firstLevel, {
									[style.firstLevelActive]: menu.id === firstCategory,
								})}>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</Link>
						{menu.id === firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={style.secondBlock}>
				{menu.map((menu) => (
					<div key={menu._id.secondCategory}>
						<div className={style.secondLevel}>{menu._id.secondCategory}</div>
						<div
							className={cn(style.secondLevelBlock, {
								[style.secondLevelBlockOpened]: menu.isOpened,
							})}>
							{buildThirdLevel(menu.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((page) => (
			<Link
				href={`/${route}/${page.alias}`}
				className={cn(style.thirdLevel, {
					[style.thirdLevelActive]: false,
				})}>
				{page.category}
			</Link>
		));
	};

	return (
		<div className={style.menu}>
			<ul>{buildFirstLevel()}</ul>
		</div>
	);
};

import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import {
	Button,
	Htag,
	Input,
	Ptag,
	Rating,
	Tag,
	Textarea,
} from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
function Home({ menu, firstCategory }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag='h1'>Text</Htag>
			<Button appearance='primary' arrow='right'>
				Узнать подробнее
			</Button>
			<Button appearance='ghost' arrow='right'>
				Читать отзывы
			</Button>
			<Ptag size='sm'>
				Напишу сразу в двух курсах, так как проходил оба. Java будет многим
				непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего
				положения языка как самого популярного в программировании. Выбор мой пал
				на эту профессию еще и потому, что Java-разработчики получают самую
				большую зарплату. Хотя Python начинает догонять Java по многим моментам,
				но вот в крупном екоме разработке Джава все-таки остается главенствующей
				сейчас. Скажу так – полнота программы и интенсивность присуща обоим
				курсам GeekBrains. Хочу отметить, что с первого дня занятий вы
				приступаете к практике и получаете опыт коммерческой разработки уже в
				свое резюме. Скажу вам как прошедший это – реально помогло в
				трудоустройстве!
			</Ptag>
			<Tag size='sm' color='primary'>
				маленький
			</Tag>
			<Rating rating={rating} isEditeble={true} setRating={setRating} />
			<Input placeholder='Имя' />
			<Textarea placeholder='Текст отзыва' />
		</>
	);
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory,
	});
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};
interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

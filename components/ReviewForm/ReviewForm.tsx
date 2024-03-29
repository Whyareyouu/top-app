import style from './ReviewForm.module.css';
import React, { useState } from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';
export const ReviewForm = ({
	productId,
	className,
	...props
}: ReviewFormProps): JSX.Element => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setIsError] = useState<string>();
	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(
				API.review.createDemo,
				{
					...formData,
					productId,
				}
			);
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setIsError('Что-то пошло не так');
			}
		} catch (e: any) {
			setIsError(e?.message);
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(style.reviewForm, className)} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Вы не заполнили поле имя' },
					})}
					error={errors.name}
					placeholder='Имя'
				/>
				<Input
					{...register('title', {
						required: {
							value: true,
							message: 'Вы не заполнили поле заголовок',
						},
					})}
					error={errors.name}
					placeholder='Заголовок отзыва'
					className={style.title}
				/>
				<div className={style.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{
							required: {
								value: true,
								message: 'Вы не заполнили поле оценка',
							},
						}}
						render={({ field }) => (
							<Rating
								isEditeble
								ref={field.ref}
								rating={field.value}
								setRating={field.onChange}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description')}
					placeholder='Текст отзыва'
					className={style.description}
				/>
				<div className={style.submit}>
					<Button appearance='primary'>Отправить</Button>
					<span className={style.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={style.success}>
					<div className={style.successTitle}>Ваш отзыв отправлен</div>
					<div className={style.successDescription}>
						Спасибо, ваш отзыв будет опубликован после проверки.
					</div>
					<CloseIcon
						className={style.close}
						onClick={() => setIsSuccess(false)}
					/>
				</div>
			)}
			{error && (
				<div className={style.error}>
					Что-то пошло не так, попробуйте обновить страницу.
					<CloseIcon
						className={style.close}
						onClick={() => setIsError(undefined)}
					/>
				</div>
			)}
		</form>
	);
};

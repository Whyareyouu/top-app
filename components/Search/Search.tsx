import style from './Search.module.css';
import { SearchProps } from './Search.props';
import cn from 'classnames';
import SearchIcon from './Search.svg';
import { Input } from '../Input/Input';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { useRouter } from 'next/router';
export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();
	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search,
			},
		});
	};
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			goToSearch();
		}
	};
	return (
		<div className={cn(className, style.search)} {...props}>
			<Input
				placeholder='Поиск...'
				value={search}
				className={style.input}
				onChange={(event) => setSearch(event.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance='primary'
				className={style.button}
				onClick={goToSearch}>
				<SearchIcon />
			</Button>
		</div>
	);
};

import { Menu } from '../Menu/Menu';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import style from './Sidebar.module.css';
import Logo from '../logo.svg';
import { Search } from '../../components';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, style.sidebar)} {...props}>
			<Logo className={style.logo} />
			<Search />
			<Menu />
		</div>
	);
};

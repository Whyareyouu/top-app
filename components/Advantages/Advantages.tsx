import { AdvantagesProps } from './Advantages.props';
import style from './Advantages.module.css';
import CheckIcon from './check.svg';
export const Advantages = ({
	title,
	description,
	id,
	...props
}: AdvantagesProps): JSX.Element => {
	return (
		<div key={id} {...props} className={style.advantage}>
			<CheckIcon />
			<div className={style.title}>{title}</div>
			<div className={style.vline}></div>
			<div>{description}</div>
		</div>
	);
};

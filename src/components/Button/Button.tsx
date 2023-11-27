import { IButton } from '../../interfaces';
import st from './Button.module.scss';

export const Button = ({ title, onClick }: IButton) => {
	return (
		<button onClick={onClick} className={st.btn}>
			{title}
		</button>
	);
};

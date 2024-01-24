import { IInput } from '../../interfaces';
import st from './Input.module.scss';

export const Input = ({ value, name, type, onChange }: IInput) => {
	return (
		<label htmlFor={name} className={st.label}>
			<span className={st.label_text}>{name}</span>
			<input className={st.input} name={name} type={type} value={value} onChange={onChange} />
		</label>
	);
};

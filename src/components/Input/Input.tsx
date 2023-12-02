import { Event, IInput } from '../../interfaces';
import st from './Input.module.scss';

export const Input = ({ value, placehoder, type, onChange }: IInput) => {
	const handleChange = (e: Event) => {
		onChange(e);
	};
	return (
		<label htmlFor={placehoder} className={st.label}>
			<span className={st.label_text}>{placehoder}</span>
			<input
				className={st.input}
				name={placehoder}
				type={type}
				placeholder={placehoder}
				value={value}
				onChange={handleChange}
			/>
		</label>
	);
};

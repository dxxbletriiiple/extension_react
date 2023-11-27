import { IInput } from '../../interfaces';
import st from './Input.module.scss';

export const Input = ({ value, placehoder, onChange }: IInput) => {
	return (
		<>
			<input className={st.input} type='text' placeholder={placehoder} onChange={onChange} value={value} />
		</>
	);
};

import { ChangeEvent } from 'react';
import { IInput } from '../../interfaces';
import st from './Input.module.scss';

export const Input = ({ value, placehoder, onChange }: IInput) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const numberValue = parseInt(e.target.value);
		if (isNaN(numberValue)) {
			return onChange(numberValue);
		}
		onChange(e.target.value);
	};
	return (
		<>
			<input className={st.input} type='text' placeholder={placehoder} value={value} onChange={handleChange} />
		</>
	);
};

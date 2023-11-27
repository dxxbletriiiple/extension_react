import { Input } from '../Input';
import { IInputWrapper } from '../../interfaces';
import Delete from '../../assets/delete.svg';
import st from './InputWrapper.module.scss';

export const InputWrapper = ({ index, onChange, onDelete }: IInputWrapper) => {
	return (
		<div className={st.wrapper}>
			<div className={st.title}>
				Experiment № {index}
				<span className={st.delete} onClick={onDelete}>
					<Delete />
				</span>
			</div>
			<Input value='default' placehoder='type' onChange={onChange} />
			<Input value='' placehoder='selector' onChange={onChange} />
			<Input value='1' placehoder='variant' onChange={onChange} />
		</div>
	);
};

import { IInputWrapper } from '../../interfaces';
import Delete from '../../assets/delete.svg';
import st from './InputWrapper.module.scss';

export const InputWrapper = ({ index, children, onDelete }: IInputWrapper) => {
	return (
		<div className={st.wrapper}>
			<div className={st.title}>
				Experiment № {index + 1}
				<span className={st.delete} onClick={() => onDelete(index)}>
					<Delete />
				</span>
			</div>
			{children}
		</div>
	);
};

import { Button } from '../Button';
import { InputWrapper } from '../InputWrapper';
import st from './App.module.scss';

export const App = () => {
	const onAdd = () => {};
	const onSave = () => {};

	return (
		<div className={st.app}>
			<div className={st.title}>Add Experiments</div>
			<div className={st.wrapper}>
				<InputWrapper
					index={1}
					onChange={() => {}}
					onDelete={() => {
						console.log(222);
					}}
				/>
			</div>
			<div className={st.btn_wrapper}>
				<Button title='Add' onClick={onAdd} />
				<Button title='Save' onClick={onSave} />
			</div>
		</div>
	);
};

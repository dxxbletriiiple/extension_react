import { useState } from 'react';
import { IExperiment } from '../../interfaces/Experiment.interface';
import { Button } from '../Button';
import { InputWrapper } from '../InputWrapper';
import st from './App.module.scss';
import { Input } from '../Input';

const initialState: IExperiment = {
	type: 'default',
	selector: 'kek',
	variant: 1,
};

export const App = () => {
	const [experimentList, setExperimentList] = useState<IExperiment[]>([initialState]);

	const onAdd = () => {
		setExperimentList((prev) => {
			return [...prev, initialState];
		});
	};

	const onDelete = (index: number) => {
		setExperimentList((prev) => {
			const head = prev.slice(0, index);
			const tail = prev.slice(index + 1);
			return [...head, ...tail];
		});
	};

	const onSave = () => {
		document.cookie = `xo-front/experiments=${encodeURIComponent(JSON.stringify(experimentList))}`;
	};

	const onChange = (index: number, experiment: IExperiment) => {
		setExperimentList((prev) => {
			return prev.filter((el, i) => (i === index ? experiment : el));
		});
	};
	return (
		<div className={st.app}>
			<div className={st.title}>Add Experiments</div>
			<div className={st.wrapper}>
				{experimentList.length ? (
					experimentList.map((experiment, index) => (
						<InputWrapper key={index} onDelete={onDelete} index={index}>
							<Input
								placehoder='type'
								value={experiment.type}
								onChange={() => onChange(index, experiment)}
							/>
							<Input
								placehoder='selector'
								value={experiment.selector}
								onChange={() => onChange(index, experiment)}
							/>
							<Input
								placehoder='variant'
								value={experiment.variant}
								onChange={() => onChange(index, experiment)}
							/>
						</InputWrapper>
					))
				) : (
					<span style={{ textAlign: 'center' }}>Click "Add" to edit experiments</span>
				)}
			</div>
			<div className={st.btn_wrapper}>
				<Button title='Add' onClick={onAdd} />
				<Button title='Save' onClick={onSave} disabled={!!experimentList.length} />
			</div>
		</div>
	);
};

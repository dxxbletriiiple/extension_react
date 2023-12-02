import { useState } from 'react';
import { Button } from '../Button';
import { InputWrapper } from '../InputWrapper';
import { Input } from '../Input';
import { IExperiment } from '../../interfaces/Experiment.interface';
import { Event } from '../../interfaces';
import st from './App.module.scss';

const initialState: IExperiment = {
	type: 'default',
	selector: '',
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

	const onChange = (event: Event, index: number, key: string) => {
		setExperimentList((prev) => {
			return prev.map((el, i) => {
				if (i === index) {
					return key === 'variant'
						? {
								...el,
								[key]: Number(event.target.value),
						  }
						: {
								...el,
								[key]: event.target.value,
						  };
				}
				return el;
			});
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
								type='text'
								value={experiment.type}
								onChange={(e: Event) => onChange(e, index, 'type')}
							/>
							<Input
								placehoder='selector'
								type='text'
								value={experiment.selector}
								onChange={(e: Event) => onChange(e, index, 'selector')}
							/>
							<Input
								placehoder='variant'
								type='number'
								value={experiment.variant}
								onChange={(e: Event) => onChange(e, index, 'variant')}
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

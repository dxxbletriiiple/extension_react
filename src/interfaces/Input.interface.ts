import { IExperiment } from './Experiment.interface';

export interface IInput {
	value: string | number;
	placehoder: 'type' | 'selector' | 'variant';
	onChange: (value: IExperiment['type'] | IExperiment['selector'] | IExperiment['variant']) => void;
}

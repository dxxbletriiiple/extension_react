import { ChangeEvent } from 'react';

export interface IInput {
	value: string | number;
	placehoder: 'type' | 'selector' | 'variant';
	type: string;
	onChange: (e: Event) => void;
}

export type Event = ChangeEvent<HTMLInputElement>;

import { ChangeEvent } from 'react';

export interface IInput {
	value: string | number;
	name: 'type' | 'selector' | 'variant';
	type: string;
	onChange: (e: Event) => void;
}

export type Event = ChangeEvent<HTMLInputElement>;

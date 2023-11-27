import { ReactNode } from 'react';

export interface IInputWrapper {
	children: ReactNode;
	index: number;
	onDelete: (index: number) => void;
}

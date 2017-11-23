import { ITodoState } from './todo-state';
import { IDetailState } from './detail-state';

export interface IAppState {
	todo: ITodoState;
	detail: IDetailState;  
}
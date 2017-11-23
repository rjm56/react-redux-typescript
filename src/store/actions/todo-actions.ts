import { IAppAction } from '../app-action';

export const todoActions = {
  ADD_TODO: `ADD_TODO`
};

export const addTodo = (todoName: string): IAppAction => ({
  type: todoActions.ADD_TODO,
  payload: todoName
});
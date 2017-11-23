import { IAppAction } from '../app-action';

export const todoActions = {
  FETCH_TODO_LIST: `FETCH_TODO_LIST`,
  FETCH_TODO_LIST_SUCCESS: `FETCH_TODO_LIST_SUCCESS`,
  FETCH_TODO_LIST_ERROR: `FETCH_TODO_LIST_ERROR`,
  ADD_TODO: `ADD_TODO`,
  REMOVE_TODO: `REMOVE_TODO`
};

export const fetchTodoList = (): IAppAction => ({
  type: todoActions.FETCH_TODO_LIST,
});

export const fetchTodoListSuccess = (todoList: any): IAppAction => ({
  type: todoActions.FETCH_TODO_LIST_SUCCESS,
  payload: todoList
});

export const fetchTodoListError = (error: any): IAppAction => ({
  type: todoActions.FETCH_TODO_LIST_ERROR,
  payload: error
});

export const addTodo = (todoName: string): IAppAction => ({
  type: todoActions.ADD_TODO,
  payload: todoName
});

export const removeTodo = (todoName: string): IAppAction => ({
  type: todoActions.REMOVE_TODO,
  payload: todoName
});
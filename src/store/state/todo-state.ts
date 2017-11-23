export interface ITodoState {
  toDoToList: Array<string>;
  loading: boolean;
}

export const defaultTodoState: ITodoState = {
  toDoToList: [],
  loading: false
};
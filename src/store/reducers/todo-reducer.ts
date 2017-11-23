import { ITodoState, defaultTodoState } from '../state';
import { IAppAction } from '../app-action';
import { todoActions } from '../actions';

const handlers = {
  [todoActions.ADD_TODO]: (state: ITodoState, payload: string): ITodoState => ({
    ...state,
    toDoToAdd: payload
  })
};

const toDoReducer = (state: ITodoState = defaultTodoState, action: IAppAction) => {
  return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action.payload) : state;
};

export default toDoReducer;
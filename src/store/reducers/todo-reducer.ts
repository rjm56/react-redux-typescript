import { ITodoState, defaultTodoState } from '../state';
import { IAppAction } from '../app-action';
import { todoActions } from '../actions';

const handlers = {

  [todoActions.FETCH_TODO_LIST]: (state: ITodoState): ITodoState => ({
    ...state,
    loading: true
  }),

  [todoActions.FETCH_TODO_LIST_SUCCESS]: (state: ITodoState, payload: any): ITodoState => ({
    ...state,
    toDoToList: payload,
    loading: false
  }),

  [todoActions.FETCH_TODO_LIST_ERROR]: (state: ITodoState): ITodoState => ({
    ...state,
    loading: false
  }),

  [todoActions.ADD_TODO]: (state: ITodoState, payload: string): ITodoState => ({
    ...state,
    toDoToList: state.toDoToList ? state.toDoToList.concat(payload) : []
  }),

  [todoActions.REMOVE_TODO]: (state: ITodoState, payload: string): ITodoState => ({
    ...state,
    toDoToList: state.toDoToList ? state.toDoToList.filter(todo => todo !== payload) : []
  })

};

const toDoReducer = (state: ITodoState = defaultTodoState, action: IAppAction) => {
  return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action.payload) : state;
};

export default toDoReducer;
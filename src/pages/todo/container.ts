import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAppState } from '../../store/state';
import { TodoWrapper } from './todo-wrapper';
import { addTodo, removeTodo } from '../../store/actions';
import { push } from 'react-router-redux';
import { routes } from '../../routes';

const mapStateToProps = (state: IAppState) => {
  return {
    todoItems: state.todo.toDoToList
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => {
  return {
    addTodo(todo: string) {
      dispatch(addTodo(todo));
    },
    removeTodo(todo: string) {
      dispatch(removeTodo(todo));
    },
    onItemSelect(index: number) {
      dispatch(push(routes.details(index.toString())));
    }
  };
};

export const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoWrapper);
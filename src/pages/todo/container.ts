import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAppState } from '../../store/state';
import { TodoWrapper } from './todo-wrapper';
import { addTodo, removeTodo } from '../../store/actions';

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
    }
  };
};

export const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoWrapper);
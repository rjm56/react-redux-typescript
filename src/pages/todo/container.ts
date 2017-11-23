import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAppState } from '../../store/state';
import { TodoWrapper } from './todo-wrapper';
import { addTodo } from '../../store/actions';

const mapStateToProps = (state: IAppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => {
  return {
    addTodo() {
      dispatch(addTodo('Added!'));
    }
  };
};

export const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoWrapper);
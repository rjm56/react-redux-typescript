import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { Store } from 'redux';
import { IAppAction } from '../app-action';
import { IAppState } from '../state';
import { todoActions, fetchTodoListSuccess, fetchTodoListError } from '../actions';

const getData = () => {
  return Observable.of([
    'Test task 1', 'Test task 2', 'Test task 3'
  ]);
};

export const fetchTodosEpic = (action$: ActionsObservable<IAppAction>, store: Store<IAppState>): Observable<IAppAction> => {

  return action$.ofType(todoActions.FETCH_TODO_LIST)
    .mergeMap(() => {
      return getData()
      .map(data => fetchTodoListSuccess(data))    
      .catch(error => {
        return Observable.of(fetchTodoListError(error));
      });
    });
};
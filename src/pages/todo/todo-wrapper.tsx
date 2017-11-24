import * as React from 'react';
import { AddToDo } from './add-todo';
import { TodoList } from './todo-list';

interface ITodoProps {
  todoItems: Array<string>;
  addTodo(todo: string): void;
  removeTodo(todo: string): void;
  onItemSelect(index: number): void;
}

export const TodoWrapper = (props: ITodoProps) => {
  return (
    <div style={{padding: 30}}>
      <AddToDo addTodo={props.addTodo} />
      <TodoList 
        removeTodo={props.removeTodo} 
        onItemSelect={(index: number) => props.onItemSelect(index)} 
        todoItems={props.todoItems} 
      />
    </div>
  );
};
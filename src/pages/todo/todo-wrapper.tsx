import * as React from 'react';

interface ITodoProps {
  addTodo(): void;
}

export const TodoWrapper = (props: ITodoProps) => {
  return (
    <div onClick={() => props.addTodo()}>Test</div>
  );
};
import * as React from 'react';

interface ITodoListProps {
  todoItems: Array<string>;
  removeTodo(todo: string): void;
}

const deleteStyle: React.CSSProperties = {
  cursor: 'pointer',
  paddingLeft: 20
};

export const TodoList = (props: ITodoListProps) => {

  const handleClick = () => {};

  const renderList = () => {
    return props.todoItems.map((item, index) => {
      return (
        <li
          key={index}
          style={{ listStyle: 'none' }}
          onClick={() => handleClick()}
        >
          <div style={{display: 'flex'}}>
            <p>{item}</p>
            <p style={deleteStyle} onClick={() => props.removeTodo(item)}>X</p>
          </div>
        </li>);
    });
  };

  return (
    <div>
      <ul>
        {props.todoItems.length ? renderList() : undefined}
      </ul>
    </div>
  );
};
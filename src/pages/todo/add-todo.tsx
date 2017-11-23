import * as React from 'react';

interface IAddToDoProps {
  addTodo(todo: string): void;
}

interface IAddToDoState {
  todoName: string;
}

export class AddToDo extends React.Component<IAddToDoProps, IAddToDoState> {
  constructor(props: IAddToDoProps) {
    super(props);
    this.state = {
      todoName: ''
    };
  }

  handleChange(value: string) {
    this.setState({
      todoName: value
    });
  }

  handleEnter(event: any) {
    if (event.key === 'Enter') {
      this.handleAdd();
    }
  }

  handleAdd() {
    this.props.addTodo(this.state.todoName);
    this.setState({todoName: ''});
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.todoName}
          onChange={(e) => this.handleChange(e.currentTarget.value)} 
          onKeyPress={(event) => this.handleEnter(event)} 
        />
        <button onClick={() => this.handleAdd()}>Add todo</button>
      </div>
    );
  }
}
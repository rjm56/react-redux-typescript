import * as React from 'react';
import { mount } from 'enzyme';
import { AddToDo, IAddToDoProps } from './add-todo';

describe('<AddToDo />', () => {

  it('should render without crashing', () => {

    let props: IAddToDoProps = {
      addTodo: () => {}
    }

    const wrapper = mount(<AddToDo {...props}/>)

    expect(wrapper).toMatchSnapshot()
  });

  it('should call addTodo onClick of <button/>', () => {
    const addTodo = jest.fn();

    let newProps: IAddToDoProps = {
      addTodo
    }

    const wrapper = mount(<AddToDo {...newProps}/>);
    wrapper.find('button').simulate('click');
    expect(addTodo).toHaveBeenCalledTimes(1);
  });
})
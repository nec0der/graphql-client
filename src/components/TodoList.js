import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, actions }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  );
};

export default TodoList;

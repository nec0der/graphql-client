import React from 'react';

const Todo = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={todo.completed}
        className='toggle'
        id={`todo-${todo.id}`}
        onChange={() => updateTodo(todo.id, !todo.completed)}
      />
      <label htmlFor={`todo-${todo.id}`} className='checkbox'>
        {todo.text}
      </label>
      <button onClick={() => deleteTodo(todo.id)} className='destroy'></button>
    </li>
  );
};

export default Todo;

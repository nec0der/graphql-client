import React from 'react';
import { gql, useMutation } from '@apollo/client';
import {UPDATE_TODO, DELETE_TODO, TODOS_QUERY} from './TodoQueries';



const Todo = ({ completed, text, id }) => {
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const handleChange = () => {
    updateTodo({ variables: { id, completed: !completed } });
  };

  const handleDelete = () => {
    deleteTodo({
      variables: { id },
      update: (cache) => {
        const data = cache.readQuery({ query: TODOS_QUERY });
        const filtered = data.todos.filter(({ id: itemId }) => itemId !== id);

        cache.writeQuery({ 
            query: TODOS_QUERY, 
            data: {
                todos: filtered
            }
        });
      },
    });
  };

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        className='toggle'
        id={`todo-${id}`}
        onChange={handleChange}
      />
      <label htmlFor={`todo-${id}`} className='checkbox'>
        {text}
      </label>
      <button onClick={handleDelete} className='destroy'></button>
    </li>
  );
};

export default Todo;

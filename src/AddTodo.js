import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TODO, TODOS_QUERY } from './TodoQueries';

const AddTodo = () => {
  let input;
  const [createTodo] = useMutation(CREATE_TODO);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo({
      variables: { text: input.value },
      update: (cache, { data: { createTodo } }) => {
        const data = cache.readQuery({ query: TODOS_QUERY });

        cache.writeQuery({
          query: TODOS_QUERY,
          data: {
            todos: [...data.todos, createTodo],
          },
        });
      },
    });
    input.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='What needs to be done?'
        className='new-todo'
        autoFocus={true}
        ref={(node) => {
          input = node;
        }}
      />
    </form>
  );
};

export default AddTodo;

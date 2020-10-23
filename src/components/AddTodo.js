import React from 'react';
import { useAddTodo } from '../operations/mutations/addTodo';

const AddTodo = () => {
  const {addTodo} = useAddTodo();
  let input;

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = input.value;

    addTodo(text);
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

import React from 'react';

const AddTodo = ({addTodo}) => {
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

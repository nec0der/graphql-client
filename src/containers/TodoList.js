import React from 'react';
import TodoList from '../components/TodoList';
import { useDeleteTodo } from '../operations/mutations/deleteTodo';
import { useUpdateTodo } from '../operations/mutations/updateTodo';
import { GET_TODOS } from '../operations/queries/getTodos';
import { useQuery } from '@apollo/client';

export default function () {
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: updateTodo } = useUpdateTodo();
  const { loading, data, error } = useQuery(GET_TODOS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Oops... Something went wrong =(</div>;

  return (
    <TodoList
      todos={data.todos}
      actions={{
        deleteTodo: (id) => deleteTodo({ variables: { id } }),
        updateTodo: (id, completed) =>
          updateTodo({ variables: { id, completed } }),
      }}
    />
  );
}

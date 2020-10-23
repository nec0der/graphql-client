import React from 'react';
import AddTodo from '../components/AddTodo';
import { useAddTodo } from '../operations/mutations/addTodo';

export default function () {
  const { mutate } = useAddTodo();
  return <AddTodo addTodo={(text) => mutate({ variables: { text } })} />;
};


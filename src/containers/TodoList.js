import React from 'react';
import TodoList from '../components/TodoList';
import { useDeleteTodo } from '../operations/mutations/deleteTodo';
import { useUpdateTodo } from '../operations/mutations/updateTodo';
import { GET_TODOS } from '../operations/queries/getTodos';
import { useQuery } from '@apollo/client';
import ReactPullToRefresh from 'react-pull-to-refresh'

export default function () {
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: updateTodo } = useUpdateTodo();
  const { loading, data, error, refetch } = useQuery(GET_TODOS, {
    // pollInterval: 1000,
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <div className="lds-wrapper"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>;
  if (error) return <div>Oops... Something went wrong =(</div>;

  return (
    <ReactPullToRefresh onRefresh={() => refetch()}>
      <TodoList
        todos={data.todos}
        actions={{
          deleteTodo: (id) => deleteTodo({ variables: { id } }),
          updateTodo: (id, completed) =>
            updateTodo({ variables: { id, completed } }),
          refetch
        }}
      />
    </ReactPullToRefresh>
  );
}

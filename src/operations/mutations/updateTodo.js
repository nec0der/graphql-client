import { gql, useMutation } from '@apollo/client';
import { GET_TODOS } from '../queries/getTodos';

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $completed: Boolean!) {
    updateTodo(where: { id: $id }, data: { completed: $completed }) {
      id
      completed
      text
    }
  }
`;

export function useUpdateTodo() {
  const [mutate, { data, error }] = useMutation(UPDATE_TODO, {
    update(cache, { data }) {
      const existingData = cache.readQuery({ query: GET_TODOS }) || [];
      const todoFromResponse = data.updateTodo;

      const newData = existingData.todos.map((todo) => {
        return todo.id === todoFromResponse.id ? { ...todoFromResponse } : todo;
      });

      cache.writeQuery({
        query: GET_TODOS,
        data: {
          todos: newData,
        },
      });
    },
  });

  return { mutate, data, error };
}

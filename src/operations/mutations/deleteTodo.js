import { gql, useMutation } from '@apollo/client';
import { GET_TODOS } from '../queries/getTodos';

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(where: { id: $id }) {
      id
    }
  }
`;

export function useDeleteTodo() {
  const [mutate, { data, error }] = useMutation(DELETE_TODO, {
    update(cache, { data }) {
      const deletedTodoId = data.deleteTodo.id;
      const existingData = cache.readQuery({ query: GET_TODOS });
      const newData = existingData.todos.filter(
        ({ id: itemId }) => itemId !== deletedTodoId
      );

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

import { gql, useMutation } from '@apollo/client';
import { GET_TODOS } from '../queries/getTodos';

export const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    createTodo(data: { text: $text, completed: false }) {
      id
      text
      completed
    }
  }
`;

export function useAddTodo() {
  const [mutate, { data, error }] = useMutation(ADD_TODO, {
    update: (cache, { data }) => {
      const newTodoFromResponse = data?.createTodo;
      const existingData = cache.readQuery({ query: GET_TODOS });

      cache.writeQuery({
        query: GET_TODOS,
        data: {
          todos: [...existingData.todos, newTodoFromResponse],
        },
      });
    },
  });

  return { mutate, data, error };
}

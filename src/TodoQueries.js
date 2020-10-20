import {gql} from '@apollo/client'

export const CREATE_TODO = gql`
  mutation createTodo($text: String!) {
    createTodo(data: { text: $text, completed: false }) {
      id
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $completed: Boolean!) {
    updateTodo(where: { id: $id }, data: { completed: $completed }) {
      id
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(where: { id: $id }) {
      id
    }
  }
`;

export const TODOS_QUERY = gql`
  query allPosts {
    todos {
      id,
      text,
      completed
    }
  }
`;
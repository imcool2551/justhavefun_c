import { gql } from '@apollo/client';

const addTodoMutation = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      done
      deleted
      user {
        id
        displayName
      }
    }
  }
`

const toggleTodoMutation = gql`
  mutation ToggleTodo($id: ID!) {
    toggleTodo(id: $id) {
      id
      text
      done
      deleted
      user {
        id
        displayName
      }
    }
  }
`

const deleteTodoMutation = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      text
      done
      deleted
      user {
        id
        displayName
      }
    }
  }
`

const myTodosQuery = gql`
  query {
    myTodos {
      id
      text
      done
      deleted
      user {
        id
        displayName
      }
    }
  }
`

const allUsersQuery = gql`
  query {
    allUsers {
      id
      displayName
    }
  }
`

const todosQuery = gql`
  query Todos($id: String!) {
    todos(id: $id) {
      id
      text
      done
      user {
        id
        displayName
      }
    }
  }
`

export { addTodoMutation, toggleTodoMutation, myTodosQuery, deleteTodoMutation, allUsersQuery, todosQuery };
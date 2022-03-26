const { gql } = require('apollo-server');

module.exports = gql` 
  type Mutation {
    toggleIsDone(id: ID!): ToDo
    addTodo(todo: ToDoInput!): ToDo
  }

  input ToDoInput {
    title: String!
  }

  type Query {
    todos: [ToDo]
    todoById(id: ID!): ToDo
    users: [User]
    userById(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type ToDo {
    id: ID!
    title: String!
    isDone: Boolean!
    followers: [User]
  }
`;

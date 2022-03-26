import React from "react";
import Todo from "../Todo/Todo";
import { gql, useQuery } from "@apollo/client";

const TODOS = gql`
  query todosQuery {
    todos {
      id
      title
      isDone
    }
  }
`;

export default function TodosList() {
  const { loading, data } = useQuery(TODOS);

  if (loading) return <p>Loading todos...</p>;

  return data.todos.map((todo, index) => <Todo key={index} todo={todo} />);
}

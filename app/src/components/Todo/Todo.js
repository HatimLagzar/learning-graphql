import { gql, useMutation } from "@apollo/client";
import React from "react";
import "./todo.css";

const ToggleStatusMutation = gql`
  mutation ToggleStatusMutation($todoId: ID!) {
    toggleIsDone(id: $todoId) {
      id
      title
      isDone
    }
  }
`;

export default function Todo({ todo }) {
  const [toggleIsDone, { loading, data, error }] = useMutation(
    ToggleStatusMutation,
    {
      todoId: todo.id,
    }
  );

  if (loading) {
    return (
      <div className="todo">
        <span>{todo.title}</span>
        <label>Updating ...</label>
      </div>
    );
  }

  return (
    <div className={"todo" + (todo.isDone ? " done" : "")}>
      <span>{todo.title}</span>
      <label>
        Done ?
        <input
          type="checkbox"
          defaultChecked={todo.isDone}
          onChange={() => toggleIsDone({ variables: { todoId: todo.id } })}
        />
      </label>
    </div>
  );
}

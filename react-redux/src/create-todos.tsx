import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducers/todo-reducer";
import type { Todo } from "./App";
import { nanoid } from "@reduxjs/toolkit";

export function CreateTodos() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        placeholder="Enter task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={(e) => {
          dispatch(
            addTodo({ id: nanoid(), text: task, isCompleted: false } as Todo),
          );
        }}
      >
        Add Task
      </button>
    </>
  );
}

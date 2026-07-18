import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "./App";
import { removeTodo, toggleTodo } from "./reducers/todo-reducer";
import { useFetchData } from "./customHook/useFetchData";

export const TodoList = () => {
  const todos = useSelector((state: RootState) => {
    return state.todo;
  });
  const dispatch = useDispatch();
  const { data, error, loading } = useFetchData(
    "https://dummyjson.com/todos",
    "GET",
  );
  console.log(data);
  return (
    <>
      <div>
        {loading
          ? "Loading..."
          : error
            ? "Error occurred"
            : JSON.stringify(data?.todos, null, 2)}
      </div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              onClick={() => {
                dispatch(toggleTodo({ id: todo.id }));
              }}
            />
            {todo.text} - {todo.isCompleted ? "Completed" : "Not Completed"}
            <button
              onClick={() => {
                dispatch(removeTodo({ id: todo.id }));
              }}
            >
              ❌
            </button>
          </div>
        );
      })}
    </>
  );
};

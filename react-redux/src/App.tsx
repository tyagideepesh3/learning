import { useSelector } from "react-redux";
import "./App.css";
import { CreateTodos } from "./create-todos";
import { TodoList } from "./todo-list";

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};
export interface RootState {
  todo: Todo[];
}

function App() {
  return (
    <>
      <CreateTodos />
      Hellow this is deepesh tyagi learning react-redux
      <br />
      <TodoList />
    </>
  );
}

export default App;

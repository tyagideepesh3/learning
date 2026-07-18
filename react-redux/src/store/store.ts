import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducers/todo-reducer";

export const store = configureStore({
  reducer: {
    todo: todosReducer,
  },
});

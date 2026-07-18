import { createSlice } from "@reduxjs/toolkit";
import type { Todo } from "../App";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state: Todo[], action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo: (state: Todo[], action) => {
      const idx = state.findIndex((todo) => todo.id === action.payload.id);
      state[idx].isCompleted = !state[idx].isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;

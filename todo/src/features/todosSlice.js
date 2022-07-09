import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, isChecked: false, text: "First todo" },
    { id: 2, isChecked: true, text: "Second todo" }
  ],
  active: 2,
  filter: "all" // "active"   "completed"
  // add filter best pracice
  // add property filter to state of slice
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    clearTodos: state => {
      state.todos = [];
    },
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter(todo => {
        return todo.id !== payload;
      });
    },
    toggleIsCompleted: (state, { payload }) => {
      console.log(payload);
      let todo = state.todos.find(todo => todo.id === payload);
      todo.isChecked = !todo.isChecked;
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    }
  }
});

export const {
  addTodo,
  removeTodo,
  toggleIsCompleted,
  clearTodos,
  changeFilter
} = todosSlice.actions;
export default todosSlice.reducer;

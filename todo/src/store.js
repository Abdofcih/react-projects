import { configureStore } from "@reduxjs/toolkit";
import ModeReducer from "./features/modeSlice";
import TodosReducer from "./features/todosSlice.js";
const Store = configureStore({
  reducer: {
    mode: ModeReducer,
    todos:TodosReducer
  }
});

export default Store;

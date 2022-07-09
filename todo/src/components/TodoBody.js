import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../features/modeSlice";
import { addTodo } from "../features/todosSlice";
import "./TodoBody.css";
import { CheckCircle } from "./CheckCircle";
import { TodoItem } from "./TodoItem";
import { TodoBodyFooter } from "./todoBodyFooter";
import { Moon } from "../icons/moon";
import { Sun } from "../icons/sun";
const TodoBody = () => {
  const todo_body_ref = useRef();
  const input_ref = useRef();
  const dispatch = useDispatch();
  const { mode } = useSelector(state => state.mode);
  const todos = useSelector(({ todos }) => {
    // after every filter change we will do this logic
    if (todos.filter != "all") {
      let isChecked = todos.filter == "completed" ? true : false;
      return todos.todos.filter(todo => todo.isChecked == isChecked);
    }

    return todos.todos;
  });

  useEffect(() => {
    //give todo body the all rest width of all body
    let doc_height = document.documentElement.clientHeight;
    todo_body_ref.current.style.minHeight = `${doc_height - 100}px`;
  }, []);

  const addItemTodo = e => {
    e.preventDefault();

    let todo = {
      id: Date.now().toString(),
      isChecked: false,
      text: input_ref.current.value
    };
    input_ref.current.value = "";
    dispatch(addTodo(todo));
  };

  return (
    <section className="todo-body " ref={todo_body_ref}>
      <div className="todo-body-container">
        <div className="todo-title-wrapper">
          <h4 className="todo-title-text">Todo</h4>
          <span className="todo-mode" onClick={() => dispatch(toggleMode())}>
            {mode === "light" ? <Moon /> : <Sun />}
          </span>
        </div>

        <div className="todo-input-wrapper todo-item border-radius-small ">
          <CheckCircle />
          <form onSubmit={addItemTodo}>
            <input
              type="text"
              className="todo-input"
              placeholder="Type a new todo...."
              ref={input_ref}
            />
          </form>
        </div>

        <div className="todo-items border-radius-medium  box-shadow">
          {todos.map(todo => {
            return <TodoItem key={todo.id} {...todo} />;
          })}
          <TodoBodyFooter />
        </div>
      </div>
    </section>
  );
};

export default TodoBody;

import React, { useState, useEffect } from "react";
import "./TodoBodyFooter.css";
import { useDispatch, useSelector } from "react-redux";
import { clearTodos, changeFilter } from "../features/todosSlice";

export const TodoBodyFooter = () => {
  const [activeTodos, setActiveTodos] = useState(0);
  const dispatch = useDispatch();
  const { todos, filter } = useSelector(state => state.todos);
  const filters = ["all", "active", "completed"];

  useEffect(() => {
    setActiveTodos(todos.filter(todo => todo.isChecked == false).length);
  }, [todos]);

  if (todos.length > 0)
    return (
      <article className="todo-item TodoBodyFooter">
        <span className="left-todos">{activeTodos} items left</span>
        <ul className="filter-btns">
          {filters.map((filterValue, index) => {
            return (
              <li
                key={index}
                className={filter == filterValue ? "active" : ""}
                onClick={() => dispatch(changeFilter(filterValue))}
              >
                {filterValue.charAt(0).toUpperCase() + filterValue.slice(1)}
              </li>
            );
          })}
        </ul>
        <span className="clear-btn" onClick={() => dispatch(clearTodos())}>
          Clear Completed
        </span>
      </article>
    );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todosSlice";
import { CheckCircle } from "./CheckCircle";
import CrossIcon from "../images/icon-cross.svg";

export const TodoItem = ({ id, isChecked, text }) => {
  const dispatch = useDispatch();
  return (
    <article className={`todo-item underline ${isChecked ? "checked" : ""}`}>
      <CheckCircle id={id} isChecked={isChecked} />
      <p className="todo-text">{text}</p>
      <img
        src={CrossIcon}
        className="todo-item-cross"
        onClick={() => dispatch(removeTodo(id))}
      />
    </article>
  );
};

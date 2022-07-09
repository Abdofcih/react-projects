import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsCompleted } from "../features/todosSlice";
import "./CheckCircle.css";
import CheckIcon from "../images/icon-check.svg";

export const CheckCircle = ({ id, isChecked }) => {
  const dispatch = useDispatch();
  return (
    <p
      className={`check-circle ${isChecked ? "checked" : ""}`}
      onClick={() => dispatch(toggleIsCompleted(id))}
    >
      {isChecked && <img src={CheckIcon} alt="" />}
    </p>
  );
};

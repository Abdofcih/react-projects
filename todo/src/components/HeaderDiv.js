import React from "react";
import {useSelector} from "react-redux"
import "./HeaderDiv.css";
import bg_light from "../images/bg-desktop-light.jpg";
import bg_dark from "../images/bg-desktop-dark.jpg";
const HeaderDiv = () => {
  const {mode} = useSelector(state=>state.mode)
  return (
    <section className="todo-header">
      <img src={mode==="light"?bg_light:bg_dark} alt="header image" />
    </section>
  );
};

export default HeaderDiv;

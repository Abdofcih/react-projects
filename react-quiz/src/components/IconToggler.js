import React from "react";
import { useGlobalContext } from "../context";

import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
const IconToggler = () => {
  const { mode, toggleMode } = useGlobalContext();
  return (
    <span onClick={toggleMode}>
      {mode == "light" ? (
        <img src={moon} className="icon" />
      ) : (
        <img src={sun} className="icon" />
      )}
    </span>
  );
};
export default IconToggler;

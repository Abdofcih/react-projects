import React from "react";
import { useGlobalContext } from "../context";

import moon from "./moon.svg";
import sun from "./sun.svg";
export const IconToggler = () => {
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

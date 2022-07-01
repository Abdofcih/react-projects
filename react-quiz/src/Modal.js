import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const {
    questions,
    correct,
    isModelOpen,
    closeModel,
    userInfo
  } = useGlobalContext();
  return (
    <div className={`modal-container ${isModelOpen ? "isOpen" : ""} `}>
      <div className="modal-content">
        <h2>Congrats !</h2>
        {/*      <p>you answered {(correct / questions.length) * 100} % questions</p> */}
        <p>We have sent your result to your email</p>
        <p>{userInfo.email}</p>
        <button className="close-btn" onClick={closeModel}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;

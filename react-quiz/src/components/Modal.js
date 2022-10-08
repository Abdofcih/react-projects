import React from "react";
import { useGlobalContext } from "../context";
import { useHistory } from "react-router-dom";
const Modal = () => {
  const history = useHistory();
  const { isModelOpen, closeModel, userInfo } = useGlobalContext();

  const redirectCallback = () => {
    history.push("/quiz/start");
  };
  return (
    <div className={`modal-container ${isModelOpen ? "isOpen" : ""} `}>
      <div className="modal-content">
        <h2>Congrats !</h2>
        {/*      <p>you answered {(correct / questions.length) * 100} % questions</p> */}
        <p>We have sent your result to your email</p>
        <p>{userInfo.email}</p>
        <button
          className="close-btn"
          onClick={() => closeModel(redirectCallback)}
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;

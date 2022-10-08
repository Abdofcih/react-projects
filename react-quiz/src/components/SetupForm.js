import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useGlobalContext } from "../context";
import IconToggler from "./IconToggler";
const SetupForm = () => {
  const history = useHistory();
  const {
    userInfo,
    handleInputChange,
    handleFormSubmit,
    error
  } = useGlobalContext();

  const redirectCallback = () => {
    history.push("/quiz");
  };
  return (
    <main>
      <section className="quiz quiz-small">
        <p className="text-align-right">
          <IconToggler />
        </p>
        <p className="setup-form-title">Learning First Academy</p>
        <form className="setup-form">
          <div className="form-control">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              value={userInfo.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Email to recieve the result</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              value={userInfo.email}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          {error && <p className="error">Can't get and display questions</p>}
          <Link
            onClick={e => handleFormSubmit(e, redirectCallback)}
            to="/start-quiz/123quizId"
            className="submit-btn"
          >
            Start
          </Link>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;

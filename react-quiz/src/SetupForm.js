import React from "react";
import { useGlobalContext } from "./context";
import { IconToggler } from "./components/IconToggler";
const SetupForm = () => {
  const {
    userInfo,
    handleInputChange,
    handleFormSubmit,
    error
  } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <p className="text-align-right">
          <IconToggler />
        </p>
        <p className="setup-form-title">
          Learning First <span>(Eng. Mohamed waheed)</span>
        </p>
        <form className="setup-form" onSubmit={handleFormSubmit}>
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
          <button type="submit" className="submit-btn">
            Start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;

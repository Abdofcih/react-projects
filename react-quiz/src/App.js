import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Questions from "./Questions";
import Modal from "./Modal";

import { IconToggler } from "./components/IconToggler";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    nextQuestion
  } = useGlobalContext();

  if (waiting) return <SetupForm />; // if true then you are waiting user info
  if (loading) return <Loading />;

  /*   const allAnswers = [...incorrect_answers, correct_answer]; */
  /* const allAnswers = [...incorrect_answers]; */

  const handleNext = () => {
    nextQuestion();
  };
  return (
    <main>
      {/*  {isModelOpen && <Modal />} */}
      <Modal />
      <section className="quiz">
        <p className="quize-header ">
          <span>
            {" "}
            Questions : {index + 1} / {questions.length}
          </span>
          <IconToggler />
        </p>
        <Questions />
        <button className="next-question" onClick={handleNext}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;

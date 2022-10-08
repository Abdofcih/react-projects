import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Questions, Modal, IconToggler } from "../components";
import "./Quiz.css";
const Quiz = () => {
  const { quizId } = useParams();
  const { questions, index, nextQuestion } = useGlobalContext();

  useEffect(() => {
    console.log(quizId);
  });
  /*   const allAnswers = [...incorrect_answers, correct_answer]; */
  /* const allAnswers = [...incorrect_answers]; */

  const handleNext = () => {
    nextQuestion();
  };
  return (
    <main>
      {/*  {isModelOpen && <Modal />} */}
      <Modal />
      <section className="Comp">
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
};

export default Quiz;

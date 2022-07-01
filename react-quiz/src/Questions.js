import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

const Questions = () => {
  const [allAnswers, setAllAnswers] = useState([]);
  const { questions, index, checkAnswer } = useGlobalContext();
  const { question, incorrect_answers, correct_answer } = questions[index];
  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * 4);
    console.log(randomIndex);

    if (randomIndex === 3)
      setAllAnswers([...incorrect_answers, correct_answer]);
    else {
      let tempAnswers = [...incorrect_answers, incorrect_answers[randomIndex]];
      tempAnswers[randomIndex] = correct_answer;
      setAllAnswers(tempAnswers);
    }
  }, [index]);

  return (
    <article className="container">
      {/*    <h2>{question}</h2> // some questions include html */}
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
      <div className="btn-container">
        {allAnswers.map((answer, index) => {
          return (
            <button
              key={index}
              className="answer-btn"
              dangerouslySetInnerHTML={{ __html: answer }}
              onClick={() => {
                console.log(answer, correct_answer);
                checkAnswer(answer == correct_answer);
              }}
            />
          );
        })}
      </div>
    </article>
  );
};
export default Questions;

import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import Asset from "./Asset";
const Questions = () => {
  const [allAnswers, setAllAnswers] = useState([]);
  const { questions, index, checkAnswer } = useGlobalContext();
  const {
    titleType,
    title,
    wrongAnswers,
    correctAnswer,
    titleTypeAssetUrl
  } = questions[index];

  /** 
   *  question data
   *  "_id"
      "titleType"
      "titleTypeAssetUrl"
      "AnswerType"
      "title"
      "quizId"
      "wrongAnswers"
  */
  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * 4);
    console.log(randomIndex);

    if (randomIndex === 3) setAllAnswers([...wrongAnswers, correctAnswer]);
    else {
      let tempAnswers = [...wrongAnswers, wrongAnswers[randomIndex]];
      tempAnswers[randomIndex] = correctAnswer;
      setAllAnswers(tempAnswers);
    }
  }, [index]);

  return (
    <article className="container">
      <h2>{title}</h2>
      {/*    <h2>{question}</h2> // some questions include html */}
      {/*  <h2 dangerouslySetInnerHTML={{ __html: question }} /> */}

      {titleType !== "text" && (
        <div className={`assetContainer ${titleType}`}>
          <Asset type={titleType} assetUrl={titleTypeAssetUrl} />
        </div>
      )}
      <div className="btn-container">
        {allAnswers.map((answer, index) => {
          return (
            <button
              key={index}
              className="answer-btn"
              dangerouslySetInnerHTML={{ __html: answer }}
              onClick={() => {
                console.log(answer, correctAnswer);
                checkAnswer(answer == correctAnswer);
              }}
            />
          );
        })}
      </div>
    </article>
  );
};
export default Questions;

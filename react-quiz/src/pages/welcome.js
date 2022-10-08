import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components";
import { useGlobalContext } from "../context";
import "./welcome.css";
const WelcomePage = () => {
  const { loading, getQuizData, quizData } = useGlobalContext();
  const { bgUrl, title } = quizData;
  const { quizId = "633ff7479eca762f1de6a2d1" } = useParams();
  useEffect(() => {
    console.log(quizId);
    getQuizData(quizId);
  }, [quizId]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="welcome">
      <div className="image-container">
        <img src={bgUrl} alt={title} />
      </div>
      <h3>{title}</h3>
      <Link className="submit-btn ready-btn" to="/quiz/start">
        Are you ready !!
      </Link>
    </div>
  );
};

export default WelcomePage;

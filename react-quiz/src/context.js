import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { quizData } from "./quiz.data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true); // waiting user to enter data
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0); // index of question
  const [correct, setCorrect] = useState(0); // number of correct answers
  const [error, setError] = useState(false); // if something went wrong this is the error msg
  const [mode, setMode] = useState("");
  const [emailToSend, setEmailToSend] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: ""
  });
  const [isModelOpen, setIsModelOpen] = useState();
  const getStoredTheme = () => {
    let theme = "light";
    if (localStorage.getItem("theme")) theme = localStorage.getItem("theme");
    return theme;
  };
  useEffect(() => {
    setMode(getStoredTheme());
    setQuestions(quizData);
  });
  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);
  const fetchQuestions = async url => {
    setLoading(true); // start getting questions data
    setWaiting(false); // I got user data
    if (quizData) {
      setQuestions(quizData);
      setLoading(false);
      setWaiting(false);
      setError(false);
    } else {
      setWaiting(true);
      setError(true);
    }
  };

  const toggleMode = () => {
    setMode(old => {
      let tempTheme = "";
      if (old == "light") tempTheme = "dark";
      else tempTheme = "light";

      localStorage.setItem("theme", tempTheme);
      return tempTheme;
    });
  };
  const nextQuestion = () => {
    setIndex(oldValue => {
      let newValue = oldValue + 1;
      if (newValue > questions.length - 1) {
        // if you reach last index open modal
        setIsLastQuestion(true);
        openModel();
        return questions.length - 1;
      }
      return newValue;
    });
  };

  useEffect(() => {
    //we use useEffect to run this code after chnage
    if (emailToSend && isLastQuestion) sendResult();
  }, [emailToSend, isLastQuestion]);

  const checkAnswer = value => {
    console.log(value);

    if (value)
      setCorrect(oldValue => {
        setEmailToSend(true);
        nextQuestion();
        return oldValue + 1;
      });
    else nextQuestion();
  };

  const sendResult = () => {
    let percentage = (correct / questions.length) * 100;
    const postData = {
      service_id: "service_bix8ucv",
      template_id: "template_0b1gv9e",
      user_id: "EHmryraQDNGp0IPRK",
      template_params: {
        fullName: userInfo.name,
        email: userInfo.email,
        percentage: `${percentage}%`,
        from_name: "Learning First"
      }
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", postData, {
        headers: { Accept: "aplication/json" }
      })
      .then(res => {
        console.log(res.text);
      })
      .catch(err => {
        console.log(err.text);
      });
  };
  const openModel = () => {
    setIsModelOpen(true);
  };
  const closeModel = () => {
    setWaiting(true);
    setCorrect(0);
    setIndex(0);
    setError(false);
    setEmailToSend(false);
    setIsLastQuestion(false);
    setUserInfo({
      name: "",
      email: ""
    });
    setIsModelOpen(false);
  };

  const handleInputChange = e => {
    // handle all input changes with one function
    let inputName = e.target.name;
    let inputValue = e.target.value;

    setUserInfo(oldValue => {
      return { ...oldValue, [inputName]: inputValue };
    });
  };
  const handleFormSubmit = e => {
    // after filling quiz data get quistions
    e.preventDefault();
    const { name, email } = userInfo;
    if (name || email) fetchQuestions();
    setError(true);
  };
  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModelOpen,
        nextQuestion,
        checkAnswer,
        closeModel,
        userInfo,
        handleInputChange,
        handleFormSubmit,
        mode,
        toggleMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

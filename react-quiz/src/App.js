import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useGlobalContext } from "./context";
import WelcomePage from "./pages/welcome";
import StartQuizPage from "./pages/Start";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/quiz/start">
          <StartQuizPage />
        </Route>
        <Route path="/quiz/:quizId">
          <WelcomePage />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

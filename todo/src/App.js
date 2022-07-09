import { useEffect } from "react";
import "./App.css";
import HeaderDiv from "./components/HeaderDiv";
import TodoBody from "./components/TodoBody";

import { useSelector } from "react-redux";

function App() {
  const mode = useSelector(state => state.mode);
  useEffect(() => {
    document.documentElement.className = mode.mode;
  }, [mode]);
  return (
    <main className="App">
      <HeaderDiv />
      <TodoBody />
    </main>
  );
}

export default App;

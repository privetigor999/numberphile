import React from "react";
import { EnterNumber } from "./components/EnterNumber/EnterNumber";
import bgPng from "./assets/background.png";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { Result } from "./components/Result/Result";
import { Error } from "./components/Error/Error";

function App() {
  const dispatch = useAppDispatch();
  const { errorMessage } = useAppSelector((state) => state.numberReducer);
  return (
    <div className="App">
      <EnterNumber />

      {errorMessage ? <Error /> : <Result />}
    </div>
  );
}

export default App;

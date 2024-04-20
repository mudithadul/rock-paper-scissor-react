import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const choices = ["rock", "paper", "scissor"];
  const [userState, setUserState] = useState(null);
  const [computerState, setComputerState] = useState(null);
  const [result, setResult] = useState(null);

  function handleChoice(choice) {
    setUserState(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerState(computerChoice);
    updateResult(choice, computerChoice);
  }

  function updateResult(user, computer) {
    console.log("user " + user);
    console.log("computer " + computer);
    if (user === computer) {
      setResult("its a Tie");
      return;
    }

    if (user === "rock" && computer === "paper") {
      setResult("Computer Win");
    } else if (user === "rock" && computer === "scissor") {
      setResult("User Win");
    } else if (user === "paper" && computer === "rock") {
      setResult("Computer Win");
    } else if (user === "paper" && computer === "scissor") {
      setResult("User Win");
    } else if (user === "scissor" && computer === "rock") {
      setResult("Computer Win");
    } else if (user === "scissor" && computer === "paper") {
      setResult("User Win");
    }
  }

  return (
    <div>
      <p style={{ fontSize: 30, fontWeight: "bolder" }}>Rock Paper Scissor</p>
      {choices.map((choice, index) => (
        <button
          className="game-button"
          key={index}
          onClick={() => handleChoice(choice)}
        >
          {choice}
        </button>
      ))}
      <div style={{ display: "grid", gridTemplateColumns: "300px 300px" }}>
        <div>
          <p style={{ fontSize: 20 }}>User Select: {userState}</p>
        </div>
        <div>
          <p style={{ fontSize: 20 }}>Computer Select: {computerState}</p>
        </div>
      </div>
      <p style={{ fontSize: 20 }}>Result: {result}</p>
    </div>
  );
};

export default App;

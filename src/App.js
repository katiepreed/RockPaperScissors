import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [userAction, setUserAction] = useState("");
  const [AIAction, setAIAction] = useState("");

  const actions = ["rock", "paper", "scissors"];

  function makeAIAction() {
    return actions[Math.floor(Math.random() * actions.length)];
  }

  function result(ai, user) {
    if (ai === user) {
      return "tie";
    } else if (user === actions[0]) {
      if (ai === actions[1]) {
        return "ai";
      } else if (ai === actions[2]) {
        return "user";
      }
    } else if (user === actions[1]) {
      if (ai === actions[0]) {
        return "user";
      } else if (ai === actions[2]) {
        return "ai";
      }
    } else if (user === actions[2]) {
      if (ai === actions[1]) {
        return "user";
      } else if (ai === actions[0]) {
        return "ai";
      }
    }
  }

  return (
    <div className="body">
      <div className="container">
        <h1> Rock Paper Scissors</h1>
        <div className="row">
          <button
            className="button"
            onClick={() => {
              setUserAction(actions[0]);
              setAIAction(makeAIAction);
            }}
          >
            Rock
          </button>
          <button
            className="button"
            onClick={() => {
              setUserAction(actions[1]);
              setAIAction(makeAIAction);
            }}
          >
            Paper
          </button>
          <button
            className="button"
            onClick={() => {
              setUserAction(actions[2]);
              setAIAction(makeAIAction);
            }}
          >
            Scissors
          </button>
        </div>
        {userAction !== "" && (
          <>
            <div className="players">
              <h1 className="player">{`AI : ${AIAction}`}</h1>
              <h1 className="player">{`User : ${userAction}`}</h1>
            </div>
            {result(AIAction, userAction) === "tie" && (
              <h2>Result: It is a Tie! </h2>
            )}
            {result(AIAction, userAction) === "user" && (
              <h2> Result: You win! </h2>
            )}
            {result(AIAction, userAction) === "ai" && (
              <h2> Result: You lose! </h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default App;

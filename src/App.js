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
    <div>
      <h1> Rock Paper Scissors</h1>
      <h1>{`AI ${AIAction}`}</h1>
      <h1>{`user ${userAction}`}</h1>
      <button
        onClick={() => {
          setUserAction(actions[0]);
          setAIAction(makeAIAction);
        }}
      >
        Rock
      </button>
      <button
        onClick={() => {
          setUserAction(actions[1]);
          setAIAction(makeAIAction);
        }}
      >
        Paper
      </button>
      <button
        onClick={() => {
          setUserAction(actions[2]);
          setAIAction(makeAIAction);
        }}
      >
        Scissors
      </button>
      {result(AIAction, userAction) === "tie" && <h1>Tie </h1>}
      {result(AIAction, userAction) === "user" && <h1>User </h1>}
      {result(AIAction, userAction) === "ai" && <h1>AI </h1>}
    </div>
  );
};

export default App;

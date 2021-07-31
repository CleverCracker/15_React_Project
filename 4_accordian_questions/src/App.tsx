import React, { useState } from "react";
import "./App.css";
import SingleQuestion from "./components/SingleQuestion";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question Answer</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;

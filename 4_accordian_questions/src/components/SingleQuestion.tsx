import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
interface QuestionProps {
  title: string;
  info: string;
}
const SingleQuestion: React.FC<QuestionProps> = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const btnClicked = () => {
    let newShowInfo: boolean = !showInfo;
    setShowInfo(newShowInfo);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={btnClicked}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;

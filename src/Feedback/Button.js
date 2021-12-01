import React from "react";
import s from "./Feedback.module.css";

const FeedbackOptions = ({ counterGood, counterNeutral, counterBad }) => {
  return (
    <div className={s.button__container}>
      <button className={s.button__feedback} onClick={counterGood}>
        Good
      </button>
      <button className={s.button__feedback} onClick={counterNeutral}>
        Neutral
      </button>
      <button className={s.button__feedback} onClick={counterBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

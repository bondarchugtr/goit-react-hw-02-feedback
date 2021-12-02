import React from "react";
import s from "./Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.button__container}>
      {options.map((el) => (
        <button
          key={el}
          className={s.button__feedback}
          onClick={() => {
            onLeaveFeedback(el);
          }}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

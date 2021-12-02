import React from "react";
import s from "./Feedback.module.css";

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={s.statistics__list}>
      <li className={s.item__statistics}>Good:{good}</li>
      <li className={s.item__statistics}>Neutral:{neutral}</li>
      <li className={s.item__statistics}>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive Feedback:{positive}%</li>
    </ul>
  );
};

export default Statistics;

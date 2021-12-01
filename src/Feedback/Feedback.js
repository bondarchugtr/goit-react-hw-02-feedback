import React, { Component } from "react";
import s from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h1 className={s.title}>Please leave feedback</h1>
        <div className={s.button__container}>
          <button className={s.button__feedback}>Good</button>
          <button className={s.button__feedback}>Neutral</button>
          <button className={s.button__feedback}>Bad</button>
        </div>
        <div className={s.statistics}>
          <h2 className={s.title__statistics}>Statistics</h2>
          <ul className={s.statistics__list}>
            <li className={s.item__statistics}>Good:</li>
            <li className={s.item__statistics}>Neutral:</li>
            <li className={s.item__statistics}>Bad:</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;

import React, { Component } from "react";
import s from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  counterNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  counterBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const objKey = Object.keys(this.state);
    return objKey.reduce((total, el) => (total += this.state[el]), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h1 className={s.title}>Please leave feedback</h1>
        <div className={s.button__container}>
          <button className={s.button__feedback} onClick={this.counterGood}>
            Good
          </button>
          <button className={s.button__feedback} onClick={this.counterNeutral}>
            Neutral
          </button>
          <button className={s.button__feedback} onClick={this.counterBad}>
            Bad
          </button>
        </div>
        <div className={s.statistics}>
          <h2 className={s.title__statistics}>Statistics</h2>
          {total > 0 ? (
            <ul className={s.statistics__list}>
              <li className={s.item__statistics}>Good:{this.state.good}</li>
              <li className={s.item__statistics}>
                Neutral:{this.state.neutral}
              </li>
              <li className={s.item__statistics}>Bad:{this.state.bad}</li>
              <li>Total:{total}</li>
              <li>Positive Feedback:{positive}%</li>
            </ul>
          ) : (
            "There is no feedback"
          )}
        </div>
      </div>
    );
  }
}

export default Feedback;

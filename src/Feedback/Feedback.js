import React, { Component } from "react";
import s from "./Feedback.module.css";
import FeedbackOptions from "./Button";
import Statistics from "./Statistics";
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

        <FeedbackOptions
          counterGood={this.counterGood}
          counterNeutral={this.counterNeutral}
          counterBad={this.counterBad}
        />
        <div className={s.statistics}>
          <h2 className={s.title__statistics}>Statistics</h2>
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              total={total}
              positive={positive}
            />
          ) : (
            "There is no feedback"
          )}
        </div>
      </div>
    );
  }
}

export default Feedback;

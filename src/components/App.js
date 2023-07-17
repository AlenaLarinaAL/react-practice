import React, { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbacksOptions } from "./FeedbacksOptions/FeedbacksOptions";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onFeedbackLeave = (option) => {
    this.setState((state) => ({ [option]: state[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return parseInt((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const TotalFeedbacks = this.countTotalFeedback();
    const positiveFeedbacks = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbacksOptions
            options={Object.keys(this.state)}
            onFeedbackLeave={this.onFeedbackLeave}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={TotalFeedbacks}
            positive={positiveFeedbacks}
          />
        </Section>
      </>
    );
  }
}

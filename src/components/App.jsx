import React, { Component } from 'react';
import { FeedbackSection } from './Feedback/FeedbackSection/FeedbackSection';
import { FeedbackBtns } from './Feedback/FeedbackBtns/FeedbackBtns';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.floor((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <>
        <FeedbackSection title="please leave feedback">
          <FeedbackBtns onLeaveFeedback={this.addFeedback}></FeedbackBtns>
        </FeedbackSection>

        <FeedbackSection title="statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="no feedback given"></Notification>
          )}
        </FeedbackSection>
      </>
    );
  }
}

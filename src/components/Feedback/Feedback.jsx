import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
// import css from './feedback.module.scss';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickFeedbackButton = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  // countTotalFeedback = () => {
  //   const feedbackArrValue = Object.values(this.state);
  //   return feedbackArrValue.reduce((total, item) => (total += item), 0);
  // };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const value = good;
    const total = good + neutral + bad;

    if (!total) {
      return 0;
    }

    const result = Math.round((value / total) * 100);
    return result;
  }

  render() {
    const { good, neutral, bad } = this.state;

    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const goodPercent = this.countPositiveFeedbackPercentage('good');

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onClickFeedbackButton={this.onClickFeedbackButton}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              goodPercent={goodPercent}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;

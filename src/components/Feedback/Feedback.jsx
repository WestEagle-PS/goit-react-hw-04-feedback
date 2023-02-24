import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
// import css from './feedback.module.scss';

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClickFeedbackButton = name => {
    setState(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = state;
    const value = good;
    const total = good + neutral + bad;

    if (!total) {
      return 0;
    }

    const result = Math.round((value / total) * 100);
    return result;
  };

  const { good, neutral, bad } = state;
  const options = Object.keys(state);

  const total = good + neutral + bad;
  const goodPercent = countPositiveFeedbackPercentage('good');

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onClickFeedbackButton={onClickFeedbackButton} />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} total={total} goodPercent={goodPercent} />
        )}
      </Section>
    </div>
  );
};

export default Feedback;

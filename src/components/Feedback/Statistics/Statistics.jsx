import PropTypes from 'prop-types';
import css from './statistics.module.scss';

const Statistics = ({ total, goodPercent, good, neutral, bad }) => {
  return (
    <ul>
      <li className={css.item}>Good: {good} </li>
      <li className={css.item}>Neutral: {neutral} </li>
      <li className={css.item}>Bad: {bad} </li>
      <li className={css.item}>TOTAL: {total}</li>
      <li className={css.item}>Positiv feedback: {goodPercent}% </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goodPercent: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';
import css from './feedback-options.module.scss';

const FeedbackOptions = ({ options, onClickFeedbackButton }) => {
  const elementsButton = options.map(option => (
    <li key={option}>
      <button name={option} onClick={() => onClickFeedbackButton(option)}>
        {option}
      </button>
    </li>
  ));

  return <ul className={css.list}>{elementsButton}</ul>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onClickFeedbackButton: PropTypes.func.isRequired,
};

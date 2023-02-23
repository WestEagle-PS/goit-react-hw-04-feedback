import PropTypes from 'prop-types';
import css from './notification.module.scss';

const Notification = ({ message }) => {
  return <div className={css.text}>{message};</div>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

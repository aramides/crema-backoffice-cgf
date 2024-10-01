import styles from './ButtonMode.module.scss';
import PropTypes from 'prop-types';

const ButtonThemeToggleButton = ({ isDark, onChange }) => (
  <label
    className={styles['container']}
    title={isDark ? 'Activa el modo claro' : 'Activa el modo oscuro'}
    aria-label={isDark ? 'Activa el modo claro' : 'Activa el modo oscuro'}
  >
    <input type='checkbox' defaultChecked={!isDark} onChange={onChange} />
    <div />
  </label>
);

ButtonThemeToggleButton.propTypes = {
  isDark: PropTypes.bool,
  onChange: PropTypes.func,
};

export default ButtonThemeToggleButton;

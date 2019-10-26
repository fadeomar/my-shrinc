import React from 'react';
import propType from 'prop-types';
import './button.css';

const Button = ({ Icon, className, text, onClick }) => (
  <button className={className} onClick={onClick} type="button">
    <Icon />
    {text}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  Icon: () => {},
};

Button.propTypes = {
  text: propType.string.isRequired,
  Icon: propType.func,
  className: propType.string.isRequired,
  onClick: propType.func,
};

export default Button;

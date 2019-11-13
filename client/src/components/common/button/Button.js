import React from 'react';
import propType from 'prop-types';
import './button.css';

const Button = ({ children, className, ...props }) => (
  <button className={className} type="button" {...props}>
    {children}
  </button>
);

Button.propTypes = {
  className: propType.string.isRequired,
  children: propType.node.isRequired,
};

export default Button;

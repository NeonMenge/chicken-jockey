import React from 'react';
import './Button.scss';

const Button = ({ children, onClick, style = {}, className = '', ...props }) => (
  <button
    className={`pixel-btn ${className}`}
    style={style}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;

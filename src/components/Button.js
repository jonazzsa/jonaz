import React from 'react';

const Button = (props) => {
  return <button>
    <i class='fa fa-plus-circle'></i> {props.label}
  </button>;
};

export default Button;

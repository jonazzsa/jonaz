import React from 'react';

const Branding = (props) => {
  return <div className='branding'>Employees
      <span className='branding-sub'>{props.employeeCounter > 1 ? `There are ${props.employeeCounter} employees`: `There is ${props.employeeCounter} employee`}</span>
  </div>;
};

export default Branding;

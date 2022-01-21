import React from 'react';

const EmployeeListItem = (props) => {
  return <div className='list-container'>
      <div><span className='list-bullets'></span></div>
      <div>{props.firstName}</div>
      <div>{props.lastName}</div>
      <div>{props.contactName}</div>
      <div>View</div>
  </div>;
};

export default EmployeeListItem;

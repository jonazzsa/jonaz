import React from 'react';

const EmployeeListItem = (props) => {
  return <div>
      <div><span className='list-bullets'>{props.index}</span></div>
      <div>{props.employeeDetails.firstName}</div>
      <div>{props.employeeDetails.lastName}</div>
      <div>{props.employeeDetails.contactNumber}</div>
      <div className='list-action' onClick={(e) => props.viewEmployee(props.employeeDetails.id)}>View</div>
      <div className='list-action' onClick={(e) => props.editEmployee(props.employeeDetails.id)}>Edit</div>
      <div className='list-action' onClick={(e) => props.deleteEmployee(props.employeeDetails.id)}>Delete</div>
  </div>;
};

export default EmployeeListItem;

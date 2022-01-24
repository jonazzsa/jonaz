import React from 'react';

const EmployeeListItem = (props) => {
  return <div>
      <div><span className='list-bullets'>{props.index + 1}</span></div>
      <div>{props.employeeDetails.firstName}</div>
      <div>{props.employeeDetails.lastName}</div>
      <div>{props.employeeDetails.contactNumber}</div>
      <div className='list-action' onClick={(e) => props.editEmployee(props.employeeDetails.id, 'View', props.index)}>View</div>
      <div className='list-action' onClick={(e) => props.editEmployee(props.employeeDetails.id, 'Edit', props.index)}>Edit</div>
      <div className='list-action' onClick={(e) => props.deleteEmployeeConfirm(props.index)}>Delete</div>
  </div>;
};

export default EmployeeListItem;

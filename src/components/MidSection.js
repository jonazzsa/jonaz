import React from 'react';

const MidSection = (props) => {
  return <div className='list-container'>
    <div>
     <div></div>
      <div><i class="fa fa-sort" onClick={() => props.sortEmployees('firstName')}></i> First Name</div>
      <div><i class="fa fa-sort" onClick={() => props.sortEmployees('lastName')}></i> Last Name</div>
      <div><i class="fa fa-sort" onClick={() => props.sortEmployees('contactNumber')}></i> Contact Number</div>
      <div className='list-action'> <i className='fa fa-eye'></i></div>
      <div className='list-action'><i className='fa fa-pencil'></i></div>
      <div className='list-action'><i className='fa fa-trash'></i></div>
      </div>
      {props.children}
  </div>;
}

export default MidSection;

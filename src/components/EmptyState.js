import React from 'react';
import empty from "./../icons/empty.JPG" 

const EmptyState = () => {
  return <div className='empty-state'>
      <img src={empty} alt='empty state'/>
      <h1>There's nothing here</h1>
      <p>Create a new employee by clicking the <br /><strong>New Employee</strong> button to get started</p>
  </div>;
};

export default EmptyState;

import React from 'react';

const EmployeeFilter = (props) => {
  return <div className='filter'>
     <i class="fa fa-filter"></i> Filter By <i class="fa fa-chevron-down"></i>
     <ul>
       <li>Age</li>
       <li>Other</li>
     </ul>
  </div>;
};


export default EmployeeFilter;

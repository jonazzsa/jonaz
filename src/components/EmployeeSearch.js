import React from 'react';

const EmployeeSearch = (props) => {
  return <div className='search'>
          <input placeholder='Search by first name, last name or email' onKeyUp={(e) => props.searchEmployees(e)}/>
      </div>;
};

export default EmployeeSearch;

import React from 'react';

const EmployeeSearch = (props) => {
  return <div className='search'>
          <input placeholder='Search' onKeyUp={(e) => props.searchEmployees(e)}/>
      </div>;
};

export default EmployeeSearch;

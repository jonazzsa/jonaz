import React from 'react';
import Branding from './Branding';
import EmployeeFilter from './EmployeeFilter';
import EmployeeSearch from './EmployeeSearch';

const Header = (props) => {
  return <div className='header'>
      <div>
        <div><Branding /></div>
        <div><EmployeeSearch searchEmployees={props.searchEmployees}/></div>
        <div><EmployeeFilter /></div>
        <div><button onClick={(e) => props.addEmployee()}>New Employee</button></div>
      </div>
  </div>;
};

export default Header;

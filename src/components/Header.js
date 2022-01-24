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
        <div><button className='button-white' onClick={(e) => props.addEmployee()}><i className='fa fa-plus'></i> New Employee</button></div>
      </div>
  </div>;
};

export default Header;

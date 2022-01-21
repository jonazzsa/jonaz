import React from 'react';
import Branding from './Branding';
import Button from './Button';
import EmployeeFilter from './EmployeeFilter';
import EmployeeSearch from './EmployeeSearch';

const Header = () => {
  return <div className='header'>
      <div>
        <div><Branding /></div>
        <div><EmployeeSearch /></div>
        <div><EmployeeFilter /></div>
        <div><Button label='New Employee'/></div>
      </div>
  </div>;
};

export default Header;

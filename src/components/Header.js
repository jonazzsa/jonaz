import React from 'react';
import Branding from './Branding';
import EmployeeFilter from './EmployeeFilter';
import EmployeeSearch from './EmployeeSearch';

const Header = () => {
  return <div className='header'>
      <div><Branding /></div>
      <div><EmployeeSearch /></div>
      <div><EmployeeFilter /></div>
      <div></div>
  </div>;
};

export default Header;

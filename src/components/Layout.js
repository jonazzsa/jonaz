import React from 'react';
import Header from './Header';

const Layout = (props) => {
  return <div className='main-container'>
      <Header addEmployee={props.addEmployee} searchEmployees={props.searchEmployees}/>
      <div className='container'>      
        {props.children}
      </div>
  </div>;
};

export default Layout;

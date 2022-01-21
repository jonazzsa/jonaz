import React from 'react';

const Layout = (props) => {
  return <div className='main-container'>
      <div className='container'>      
        {props.children}
      </div>
  </div>;
};

export default Layout;

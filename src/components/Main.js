import React, { useEffect, useState } from 'react';
import EmployeeListItem from './EmployeeListItem';
import Layout from './Layout';
import MidSection from './MidSection';

const Main = (props) => {
  const [employeesDetails, setEmployees] = useState([{
    firstName: 'Jonas',
    lastName: 'Moapolela',
    contactNumber: '0843265349',
    id: 687671,
    index: 1
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    contactNumber: '0843265349',
    id: 687671,
    index: 2
  },
  {
    firstName: 'Siya',
    lastName: 'Kholisi',
    contactNumber: '0843265349',
    id: 687671,
    index: 3
  },
  {
    firstName: 'Jacob',
    lastName: 'Miller',
    contactNumber: '1843265349',
    id: 687671,
    index: 4
  }]);

  
  const deleteEmployee = (id) => {
    alert(id)
  }

  const editEmployee = (id) => {
    alert(id)
  }

  const viewEmployee = (id) => {
    alert(id)
  }

  const sortEmployees = (field) => {  
    
    let newArray = employeesDetails
    
    newArray.sort((a, b) => {     
      if(a[field].localeCompare(b[field])) { 
        return -1; } else {
          return 1; 
        }              
    })

    setEmployees([...newArray])
    console.log(newArray)
        
  }

  return <div>
      <Layout>
          <MidSection sortEmployees={sortEmployees}>
             {employeesDetails.map((employee, index) => <EmployeeListItem key={index} 
             index={index + 1}
             deleteEmployee={deleteEmployee} 
             editEmployee={editEmployee} 
             viewEmployee={viewEmployee} 
             employeeDetails={employee} />)}
          </MidSection>
      </Layout>
  </div>;
}

export default Main;

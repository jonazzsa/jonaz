import React, { useEffect, useState } from 'react';
import BackDrop from './BackDrop';
import EmployeeCaptureForm from './EmployeeCaptureForm';
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

  const [employeesDetailsCopy] = useState(employeesDetails)

  const [isVisibleCapture, setIsVisibleCapture] = useState(false)



  const addEmployee = () => {
    setIsVisibleCapture(true)
  }

  const closeWindow = () => {
    setIsVisibleCapture(false)
  }
  
  const deleteEmployee = (id) => {
   
  }

  const editEmployee = (id) => {
    setIsVisibleCapture(true)
  }

  const viewEmployee = (id) => {
    
  }

  const sortEmployees = (field) => {      
    employeesDetails.sort((a, b) => {     
      if(a[field].localeCompare(b[field])) { 
        return -1; } else {
          return 1; 
        }              
    })
    setEmployees([...employeesDetails])        
  }

  const searchEmployees = (e) => {    

    setEmployees([...employeesDetailsCopy]) 

    console.log(employeesDetails)

    const news = employeesDetails.filter(item => {
      
         return item.firstName.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1 
         || item.lastName.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1
         || item.contactNumber.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1
    
    })  


    setEmployees([...news])   
}



  return <div>
      <Layout addEmployee={addEmployee} searchEmployees={searchEmployees}>
          <MidSection sortEmployees={sortEmployees}>
             {employeesDetails.map((employee, index) => <EmployeeListItem key={index} 
             index={index + 1}
             deleteEmployee={deleteEmployee} 
             editEmployee={editEmployee} 
             viewEmployee={viewEmployee} 
             employeeDetails={employee} />)}
          </MidSection>
          {isVisibleCapture ? <EmployeeCaptureForm closeWindow={closeWindow}/>: ''}
          {isVisibleCapture ? <BackDrop />: ''}
      </Layout>
  </div>;
}

export default Main;

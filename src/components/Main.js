import React, { useEffect, useState } from 'react';
import BackDrop from './BackDrop';
import DeleteConfirm from './DeleteConfirm';
import EmployeeCaptureForm from './EmployeeCaptureForm';
import EmployeeListItem from './EmployeeListItem';
import Layout from './Layout';
import MidSection from './MidSection';

const Main = (props) => {
  const [employeesDetails, setEmployees] = useState([{
    firstName: 'Jonas1',
    lastName: 'Moapolela',
    contactNumber: '0843265349',
    id: 687671,
    dob: '1989-jan',
    streetAddress: 'Jeff masemola',
    city: 'Johanneburg',
    postalCode: '0949',
    country: 'South Africa',
    skills: [
      {
        skill: 'Excel',
        years: '20',
        seniorityRating: '5'
      },
      {
        skill: 'Word',
        years: '30',
        seniorityRating: '5'
      }
    ]
  },
  {
    firstName: 'Mark',
    lastName: 'Henry',
    contactNumber: '0843265349',
    id: 687671,
    dob: '1989-jan',
    streetAddress: 'Jeff masemola',
    city: 'Johanneburg',
    postalCode: '0949',
    country: 'South Africa',
    skills: [
      {
        skill: 'Excel',
        years: '20',
        seniorityRating: '5'
      },
      {
        skill: 'Word',
        years: '30',
        seniorityRating: '5'
      }
    ]
  },
  {
    firstName: 'Mark',
    lastName: 'Henry',
    contactNumber: '0843265349',
    id: 687671,
    dob: '1989-jan',
    streetAddress: 'Jeff masemola',
    city: 'Johanneburg',
    postalCode: '0949',
    country: 'South Africa',
    skills: [
      {
        skill: 'Excel',
        years: '20',
        seniorityRating: '5'
      },
      {
        skill: 'Word',
        years: '30',
        seniorityRating: '5'
      }
    ]
  },
  {
    firstName: 'Mark',
    lastName: 'Henry',
    contactNumber: '0843265349',
    id: 687671,
    dob: '1989-jan',
    streetAddress: 'Jeff masemola',
    city: 'Johanneburg',
    postalCode: '0949',
    country: 'South Africa',
    skills: [
      {
        skill: 'Excel',
        years: '20',
        seniorityRating: '5'
      },
      {
        skill: 'Word',
        years: '30',
        seniorityRating: '5'
      }
    ]
  },
  {
    firstName: 'Mark',
    lastName: 'Henry',
    contactNumber: '0843265349',
    id: 687671,
    dob: '1989-jan',
    streetAddress: 'Jeff masemola',
    city: 'Johanneburg',
    postalCode: '0949',
    country: 'South Africa',
    skills: [
      {
        skill: 'Excel',
        years: '20',
        seniorityRating: '5'
      },
      {
        skill: 'Word',
        years: '30',
        seniorityRating: '5'
      }
    ]
  },
  {
    firstName: 'Mark',
    lastName: 'Henry',
    contactNumber: '0843265349',
    id: 687671,
    dob: '1989-jan',
    streetAddress: 'Jeff masemola',
    city: 'Johanneburg',
    postalCode: '0949',
    country: 'South Africa',
    skills: [
      {
        skill: 'Excel',
        years: '20',
        seniorityRating: '5'
      },
      {
        skill: 'Word',
        years: '30',
        seniorityRating: '5'
      }
    ]
  },
  {
    firstName: 'King',
    lastName: 'James',
    contactNumber: '0843265349',
    id: 687671,
    dob: '1989-jan',
    streetAddress: 'Jeff masemola',
    city: 'Johanneburg',
    postalCode: '0949',
    country: 'South Africa',
    skills: [
      {
        skill: 'Excel',
        years: '20',
        seniorityRating: '5'
      },
      {
        skill: 'Word',
        years: '30',
        seniorityRating: '5'
      }
    ]
  }]);

  const [employeesDetailsCopy] = useState(employeesDetails)

  const [isVisibleCapture, setIsVisibleCapture] = useState(false)

  const [captureAction, setCaptureAction] = useState("")

  const [selectedUser, setSelectedUser] = useState([])

  const [isDeleteConfirm, setIsDeleteConfirm] = useState(false)

  const [deleteId, setDeleteId] = useState()

 

  const addEmployee = () => {
    setIsVisibleCapture(true)
    setSelectedUser([])
  }

  const closeWindow = () => {
    setIsVisibleCapture(false)
    setIsDeleteConfirm(false)
  }

   const deleteEmployeeConfirm = (index) => {
    setIsDeleteConfirm(true)
  }

  const deleteEmployee = (index) => {
    setIsDeleteConfirm(false)
    setDeleteId(index)
  }

  const editEmployee = (action, index) => {
    setIsVisibleCapture(true)
    setCaptureAction(action)
    setSelectedUser(employeesDetails[index])
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

    const news = employeesDetails.filter(item => {
      
         return item.firstName.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1 
         || item.lastName.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1
         || item.contactNumber.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1
    
    })  


    setEmployees([...news])   
}



  return <div>
      <Layout addEmployee={addEmployee}
        searchEmployees={searchEmployees}>
          <MidSection sortEmployees={sortEmployees}>
             {employeesDetails.map((employee, index) => <EmployeeListItem key={index} 
             index={index}
             deleteEmployee={deleteEmployeeConfirm} 
             editEmployee={editEmployee}
             employeeDetails={employee} />)}
          </MidSection>
          {isVisibleCapture ? <EmployeeCaptureForm action={captureAction} employeesDetails={selectedUser} closeWindow={closeWindow}/>: ''}
          {isVisibleCapture || isDeleteConfirm ? <BackDrop />: ''}
          {isDeleteConfirm ? <DeleteConfirm closeWindow={closeWindow} deleteEmployee={deleteEmployee} />: ''}
      </Layout>
  </div>;
}

export default Main;

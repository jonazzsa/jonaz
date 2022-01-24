import React, { useEffect, useState } from 'react';
import BackDrop from './BackDrop';
import DeleteConfirm from './DeleteConfirm';
import EmployeeCaptureForm from './EmployeeCaptureForm';
import EmployeeListItem from './EmployeeListItem';
import EmptyState from './EmptyState';
import Layout from './Layout';
import MidSection from './MidSection';

const Main = () => {
  const [employeesDetails, setEmployees] = useState([]);
  const [employeesDetailsCopy, setEmployeesDetailsCopy] = useState([...employeesDetails]);
  const [isVisibleCapture, setIsVisibleCapture] = useState(false);
  const [captureAction, setCaptureAction] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);
  const [isDeleteConfirm, setIsDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(); 
  const [employeeCounter, setEmployeeCounter] = useState(0); 

   const addEmployee = () => {
    setIsVisibleCapture(true);
    setSelectedUser([]);
  }

  const editEmployeeData = (arr) => {
    let newArr = employeesDetails.map((item, index) => { 
    if (item['id'] === arr['id']){
        item = arr;
    }
      return item;
    }) 
    setEmployees([...newArr]); 
    setEmployeesDetailsCopy([...newArr]); 
    setIsVisibleCapture(false);
  }

  const closeWindow = () => {
    setIsVisibleCapture(false);
    setIsDeleteConfirm(false);
  }

   const deleteEmployeeConfirm = (index) => {
    setIsDeleteConfirm(true);
    setDeleteId(index);
  }

  const deleteEmployee = () => {
    let newArr = employeesDetails.filter((item, index) => {      
         return index != deleteId;
    })  
    setEmployees([...newArr]); 
    setEmployeesDetailsCopy([...newArr]); 
    setIsDeleteConfirm(false);
    setEmployeeCounter(employeesDetails.length);    
  }

  const refreshEmployeeList = (arr) => {
    setEmployees([...employeesDetails, arr]); 
    setEmployeesDetailsCopy([...employeesDetailsCopy, arr]); 
    setIsVisibleCapture(false);
    setEmployeeCounter(employeesDetails.length);
    console.log(employeeCounter)
  }

  const editEmployee = (action, index) => {
    setIsVisibleCapture(true);
    setCaptureAction(action);
    setSelectedUser(employeesDetails[index]);
  }

  
  const sortEmployeesList = () => { 
    alert()     
    // employeesDetails.sort((a, b) => {     
    //   if(a[field].localeCompare(b[field])) { 
    //     return -1; } else {
    //       return 1; 
    //     }              
    // })
    // setEmployees([...employeesDetails]);     
    // console.log(employeesDetails)   
  }

  const updateEmployeeCounter = () => {

   }

  const searchEmployees = (e) => {  
    let newArr = employeesDetailsCopy
    let newArrCopy = newArr.filter(item => {      
         return item.firstName?.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1 
         || item.lastName?.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1
         || item.email?.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1
    
    })  
    setEmployees([...newArrCopy])       
}



  return <div>
      <Layout addEmployee={addEmployee}
        searchEmployees={searchEmployees}
        employeeCounter={employeeCounter}>
          {employeesDetails.length > 0 ? <MidSection sortEmployeesList={sortEmployeesList}>
             {employeesDetails.map((employee, index) => <EmployeeListItem key={index} 
             index={index}
             deleteEmployeeConfirm={deleteEmployeeConfirm} 
             editEmployee={editEmployee}
             employeeDetails={employee} />)}
          </MidSection>: ''}
          {employeesDetails.length == 0 ? <EmptyState />: ''}
          {isVisibleCapture ? <EmployeeCaptureForm editEmployeeData={editEmployeeData} refreshEmployeeList={refreshEmployeeList} action={captureAction} employeesDetails={selectedUser} closeWindow={closeWindow}/>: ''}
          {isVisibleCapture || isDeleteConfirm ? <BackDrop />: ''}
          {isDeleteConfirm ? <DeleteConfirm employeeName={`${employeesDetails[deleteId]['firstName']} ${employeesDetails[deleteId]['lastName']}`} closeWindow={closeWindow} deleteEmployee={deleteEmployee} />: ''}
      </Layout>
  </div>;
}

export default Main;

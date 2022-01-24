import React, { useState, useRef } from 'react';

const EmployeeCaptureForm = (props) => {
  console.log(props)
    const [formInfo, setFormInfo] = useState({ firstName: props?.employeesDetails?.firstName,
        lastName: props?.employeesDetails?.lastName,
        contactNumber: props?.employeesDetails?.contactNumber,
        id: props?.employeesDetails?.id,
        dob: props?.employeesDetails?.dob,
        streetAddress: props?.employeesDetails?.streetAddress,
        city: props?.employeesDetails?.city,
        postalCode: props?.employeesDetails?.postalCode,
        country: props?.employeesDetails?.country,
        //skills: [null]
      });

      const [skillsCounter, setSkillsCounter] = useState(1)

      const addSkill = () => {
        setSkillsCounter(skillsCounter + 1);
      }

      const removeSkill = () => {
        setSkillsCounter(skillsCounter - 1);
      }
      
        const handleSubmit = (event) => {
          
          event.preventDefault();
          
        if (!props.employeesDetails.id){
          let alphabets = "abcdefghijklmnopqrstuvwxyz";
          let letters = ''
          let digits = Math.floor(1000 + Math.random() * 9000);

          while (letters.length < 2) {
            letters += alphabets[Math.floor(Math.random() * alphabets.length)].toUpperCase();
          }    

          formInfo['id'] = letters + digits
          props.refreshEmployeeList(formInfo);
        } else {
          formInfo['id'] = props.employeesDetails.id
          props.editEmployeeData(formInfo)
        }
        };

      
 const inputRefs = useRef([]);

        const handleChange = (e, index = null) => {
          const name = e.target.name;
          const value = e.target.value;
          setFormInfo({ ...formInfo, [name]: value });

        // let array = formInfo.skills.slice() 
        // array.splice(index, 0, {[name]: value })
        // console.log(array)
        
        // setFormInfo({...formInfo,  skills: array });

        // setFormInfo({ ...formInfo, [name]: value });

        //   console.log(index)
        //   console.log(formInfo)

        // console.log(inputRefs)
        };

  return <div className='employeee-form-container'>
      <form onSubmit={handleSubmit}>
     <h2>{props.action} employee</h2>
      <h3>Basic Information</h3>
      <div className='form-group-group'>
        <div className='form-group'>
            <label for='firstName'>First Name</label>
            <input id='firstName' value={formInfo.firstName} name="firstName" onChange={handleChange}/>
        </div>

        <div className='form-group'>
            <label for='lastName'>Last Name</label>
            <input id='lastName' value={formInfo.lastName} name="lastName" onChange={handleChange}/>
        </div>
      </div>
      <div className='form-group-group'>
      <div className='form-group'>
        <label for='contactNumber'>Contact Number</label>
        <input id='contactNumber' value={formInfo.contactNumber} name="contactNumber" onChange={handleChange}/>
      </div>
      <div className='form-group'>
        <label for='email'>Email</label>
        <input type='email' id='email' value={formInfo.email} name="email" onChange={handleChange}/>
      </div>
      </div>


      <div className='form-group'>
        <label for='dob'>Date of Birth</label>
        <input type='date' id='dob' value={formInfo.dob} name="dob" onChange={handleChange}/>
      </div>

      <h3>Address info</h3>
      <div className='form-group'>
        <label for='streetAddress'>Street Address</label>
        <input id='streetAddress' value={formInfo.streetAddress} name="streetAddress" onChange={handleChange}/>
      </div>

      <div className='form-group-group'>
      <div className='form-group'>
        <label for='city'>City</label>
        <input id='city' value={formInfo.city} name="city" onChange={handleChange}/>
      </div>

      <div className='form-group'>
        <label for='postalCode'>Postal Code</label>
        <input id='postalCode' value={formInfo.postalCode} name="postalCode" onChange={handleChange}/>
      </div>

      <div className='form-group'>
        <label for='country'>Country</label>
        <input id='country' value={formInfo.country} name="country" onChange={handleChange}/>
      </div>
</div>

<h3>Skills</h3>
{new Array(skillsCounter).fill(0).map((s, index) => 
<div className='form-group-group'>
    <div className='form-group'>
        <label for='skills'>Skills</label>
        <input id='skills' name="skills" ref={inputRefs[index]} onChange={(e) => handleChange(e, index)}/>
    </div>

    <div className='form-group'>
        <label for='yrsExp'>Yrs Exp</label>
        <input id='yrsExp' name="yrsExp" onChange={handleChange}/>
    </div>

    <div className='form-group'>
        <label for='seniorityRating'>Seniority Rating</label>
        <input id='seniorityRating' name="seniorityRating" onChange={handleChange}/>
    </div>
    </div>

)}
    
{props.action != 'View' ? <div className='add-more-skills'>
{skillsCounter > 1 ? <i className='fa fa-minus' onClick={() => removeSkill()}></i>: ''} &nbsp;
        <i className='fa fa-plus' onClick={() => addSkill()}></i>
    </div>: ''}


    <div className='form-sumit'><button onClick={() => {props.closeWindow()}}>Close</button> 
    {props.action != 'View' ? <input type='submit' value='Submit' />: ''}
    </div>
</form>
  </div>;
};

export default EmployeeCaptureForm;

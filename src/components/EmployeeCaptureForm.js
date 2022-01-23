import React from 'react';
import Button from './Button';

const EmployeeCaptureForm = (props) => {
  return <div className='employeee-form-container'>
     <h2>Edit employee</h2>
      <h3>Basic Information</h3>
      <div className='form-group-group'>
        <div className='form-group'>
            <label for='firstName'>First Name</label>
            <input id='firstName'/>
        </div>

        <div className='form-group'>
            <label for='lastName'>Last Name</label>
            <input id='lastName'/>
        </div>
      </div>

      <div className='form-group'>
        <label for='contactNumber'>Contact Number</label>
        <input id='contactNumber'/>
      </div>


      <div className='form-group'>
        <label for='firstName'>Date of Birth</label>
        <input id='firstName'/>
      </div>

      <h3>Address info</h3>
      <div className='form-group'>
        <label for='streetAddress'>Street Address</label>
        <input id='streetAddress'/>
      </div>

      <div className='form-group-group'>
      <div className='form-group'>
        <label for='city'>City</label>
        <input id='city'/>
      </div>

      <div className='form-group'>
        <label for='postalCode'>Postal Code</label>
        <input id='postalCode'/>
      </div>

      <div className='form-group'>
        <label for='country'>Country</label>
        <input id='country'/>
      </div>
</div>

<h3>Skills</h3>
<div className='form-group-group'>
    <div className='form-group'>
        <label for='skills'>Skills</label>
        <input id='skills'/>
    </div>

    <div className='form-group'>
        <label for='yrsExp'>Yrs Exp</label>
        <input id='yrsExp'/>
    </div>

    <div className='form-group'>
        <label for='seniorityRating'>Seniority Rating</label>
        <input id='seniorityRating'/>
    </div>
    </div>

    <div className='form-sumit'><button onClick={() => {props.closeWindow()}}>Close</button> <button>Submit</button></div>

  </div>;
};

export default EmployeeCaptureForm;

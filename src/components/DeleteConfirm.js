import React from 'react';

const DeleteConfirm = (props) => {
  return <div className='delete-confirm'>
      <div><i className='fa fa-trash'></i> Delete Record</div>
      <div className='delete-confirm-links'>
          <a href='javascript:void(0)' onClick={() => {props.closeWindow()}}>Cancel</a>
      <a href='javascript:void(0)' onClick={() => {props.deleteEmployee(props.index)}}>Delete</a>
      </div>
  </div>;
};

DeleteConfirm.propTypes = {};

export default DeleteConfirm;

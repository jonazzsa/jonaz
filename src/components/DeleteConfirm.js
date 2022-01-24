import React from 'react';

const DeleteConfirm = (props) => {
  return <div className='delete-confirm'>
      <div><i className='fa fa-trash'></i> Delete {props.employeeName}</div>
      <div className='delete-confirm-links'>
          <a href='javascript:void(0)' onClick={() => {props.closeWindow()}}>Cancel</a>
      <a href='javascript:void(0)' onClick={() => {props.deleteEmployee()}}>Delete</a>
      </div>
  </div>;
};

DeleteConfirm.propTypes = {};

export default DeleteConfirm;

import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
class DeleteModal extends Component {

  state = {}

  deleteEmployeeData = (employee) => {
    axios.delete('/delete/employee/data/' + employee).then(() => {
      toast.error("Employee Deleted Successfully");
      setTimeout(() => {
        location.reload();
      }, 1500);
    })
  }

  render() {
    return (
      <div className="modal fade" id={"deleteModal" + this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"> Delete Employee</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this employee?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={() => { this.deleteEmployeeData(this.props.modalId) }}>Delete</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

class UpdateModal extends Component {

  state = {
    employeeName: null,
    employeeSalary: null
  }

  //updating employee name state
  inputEmployeeName = (event) => {
    this.setState({
      employeeName: event.target.value
    })
  };

  //updating employee salary state
  inputEmployeeSalary = (event) => {
    this.setState({
      employeeSalary: event.target.value
    })
  };

  static getDerivedStateFromProps(props, current_state) {

    let employeeUpdate = {
      employeeName: null,
      employeeSalary: null
    }

    //updating data from input
    if (current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)) {
      return null;
    }
    if (current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)) {
      return null;
    }

    //updating data from props
    if (current_state.employeeName !== props.employeeData.currentEmployeeName ||
      current_state.employeeName === props.employeeData.currentEmployeeName) {
      employeeUpdate.employeeName = props.employeeData.currentEmployeeName
    }
    if (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary ||
      current_state.employeeSalary !== props.employeeData.currentEmployeeSalary) {
      employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary
    }

    return employeeUpdate;
  }

  //updating employee data
  updateEmloyeeData = () => {
    axios.post('/update/employee/data', {
      employeeId: this.props.modalId,
      employeeName: this.state.employeeName,
      employeeSalary: this.state.employeeSalary
    }).then(() => {
      toast.success("Employee Updated Successfully");
      setTimeout(() => {
        location.reload();
      }, 1500);
    })
  }

  render() {
    return (
      <div className="modal fade" id={"updateModal" + this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Employee</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className='form'>
                <div className='form-group'>
                  <input type="text"
                    id="employeeName"
                    className='form-control mb-3'
                    onChange={this.inputEmployeeName}
                    value={this.state.employeeName ?? ""}>
                  </input>
                </div>
                <div className='form-group'>
                  <input type="text"
                    id="employeeSalary"
                    className='form-control mb-3'
                    onChange={this.inputEmployeeSalary}
                    value={this.state.employeeSalary ?? ""}>
                  </input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <input type="submit"
                className='btn btn-info'
                id="employeeName"
                value="Update"
                onClick={this.updateEmloyeeData}>
              </input>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateModal;
import axios from 'axios';
import React, { Component } from 'react';
import ViewModal from './modals/ViewModal';

class TableActionButtons extends Component {

  state = {
    currentEmployeeName: null,
    currentEmployeeSalary: null
  }

  //getting employee data details
  getEmployeeDetails(id) {
    axios.post('/get/employee/details', { employeeId: id }).then((response) => {
      this.setState({
        currentEmployeeName: response.data.employee_name,
        currentEmployeeSalary: response.data.salary
      })
    })
  }

  render() {
    return (
      <div className="btn-group" role="group">
        <button type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#viewModal"
          onClick={() => { this.getEmployeeDetails(this.props.eachRowId) }}>
          View
        </button>
        <ViewModal modalId={this.props.eachRowId} employeeData={this.state} />

        <button type="button" className="btn btn-info">Update</button>
        <button type="button" className="btn btn-danger">Delete</button>
      </div>
    );
  }
}

export default TableActionButtons;
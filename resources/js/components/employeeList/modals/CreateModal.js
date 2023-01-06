import React, { Component } from 'react';
import { toast } from 'react-toastify';

class CreateModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeName: null,
      employeeSalary: null
    }
  }

  //creating employee name state
  inputEmployeeName = (event) => {
    this.setState({
      employeeName: event.target.value
    })
  };

  //creating employee salary state
  inputEmployeeSalary = (event) => {
    this.setState({
      employeeSalary: event.target.value
    })
  };

  //storing employee data
  storeEmloyeeData = () => {
    axios.post('/store/employee/data', {
      employeeName: this.state.employeeName,
      employeeSalary: this.state.employeeSalary
    }).then(() => {
      toast.success("Employee Saved Successfully");
      setTimeout(() => {
        location.reload();
      }, 1500);
    })
  }

  render() {
    return (
      <div>
        <div className='row text-right mb-3 pb-3'>
          <button className='btn btn-info text-right col-3  offset-md-9'
            data-bs-toggle="modal"
            data-bs-target="#createModal">Add Employee</button>
        </div>

        <div className="modal fade" id="createModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Employee</h5>
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
                      placeholder="Name Here">
                    </input>
                  </div>
                  <div className='form-group'>
                    <input type="text"
                      id="employeeSalary"
                      className='form-control mb-3'
                      onChange={this.inputEmployeeSalary}
                      placeholder="Name Here">
                    </input>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <input type="button"
                  className='btn btn-info'
                  value="Add"
                  onClick={this.storeEmloyeeData}>
                </input>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateModal;
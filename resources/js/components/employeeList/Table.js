import axios from 'axios';
import React, { Component } from 'react';
import TableRow from './TableRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateModal from './modals/CreateModal';

class Table extends Component {

  state = {
    employees: []
  }

  //life cycle method
  componentDidMount() {
    this.getEmployeeList();
  }

  //get employee list
  getEmployeeList = () => {
    let self = this;
    axios.get('/get/employee/list').then(function (response) {
      self.setState({ employees: response.data });
    })
  }

  render() {
    return (
      <div className="container">
        <ToastContainer />
        <CreateModal />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.map(function (x, i) {
                    return <TableRow key={i} value={x} />
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;



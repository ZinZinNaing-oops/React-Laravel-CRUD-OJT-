import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';

class TableRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.value.id}</td>
        <td>{this.props.value.employee_name}</td>
        <td>{this.props.value.salary}</td>
        <td><TableActionButtons eachRowId={this.props.value.id} /></td>
      </tr>
    );
  }
}

export default TableRow;

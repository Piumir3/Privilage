import React, { Component } from "react";

class Customer extends Component {
  onDelete = () => {
    // console.log('customer ', this.props.customer.id);
    this.props.onDelete(this.props.customer.id);
  };

  onEdit = () => {
    // console.log('customer ', this.props.customer.id);
    this.props.onEdit(this.props.customer);
  };

  render() {
    const { id, first_name, last_name, email } = this.props.customer;
    return (
      <tr>
        <td style={{ textAlign: "center" }}>{id}</td>
        <td>{first_name}</td>
        <td>{email}</td>
        <td>{last_name}</td>
        <td>
           

          <div class="ui buttons">
            <button class="ui button active" onClick={this.onEdit}>Edit</button>
            <div class="or"></div>
            <button class="ui positive button" onClick={this.onDelete}>Delete</button>
          </div>
        </td>
      </tr>
    );
  }
}

export default Customer;

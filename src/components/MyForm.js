import React, { Component } from "react";

class MyForm extends Component {
  state = {
    form: { first_name: "", last_name: "", email: "", isEdit: false },
    btnName: "Save",
    btnClass: "ui primary button submit-button"
  };

  isEmptyObj(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && !this.isEmptyObj(this.props.customer)) {
      this.setState({
        form: { ...this.props.customer, isEdit: true },
        btnName: "Update",
        btnClass: "ui orange button submit-button"
      });
      // console.log("update");
    }
  }

  onFormSubmit = event => {
    // prevent form submit
    event.preventDefault();

    // form validation
    if (this.formValidation()) {
      // send form data to app
      this.props.onFormSubmit(this.state.form);

      // change the button to save
      this.setState({
        btnName: "Save",
        btnClass: "ui primary button submit-button"
      });

      // clear form fields
      this.clearFormFields();
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };

  formValidation = () => {
    // first name
    if (document.getElementsByName("first_name")[0].value === "") {
      alert("Enter User name");
      return false;
    }

    // last name
    if (document.getElementsByName("last_name")[0].value === "") {
      alert("Enter User Type name");
      return false;
    }

    // email
    if (document.getElementsByName("email")[0].value === "") {
      alert("Enter User email");
      return false;
    }

    return true;
  };

  clearFormFields = () => {
    // console.log("clear");
    // change form state
    this.setState({
      form: { first_name: "", last_name: "", email: "", isEdit: false }
    });

    // clear form fields
    document.querySelector(".form").reset();
  };

  render() {
    return (
      <form className="ui form">
        <div className="fields">
          <div className="four wide field">
            <label>User name</label>
            <input
              type="text"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>



          <div className="six wide field">
            <label>User_Type</label>

            <input
              type="text"
              name="last_name"
              placeholder="User Type"
              onChange={this.handleChange}
              value={this.state.form.last_name}
            />
          </div>

          <div className="six wide field">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="joe@schmoe.com"
              onChange={this.handleChange}
              value={this.state.form.email}
            />
          </div>



          <div className="two wide field">
            <button className={this.state.btnClass} onClick={this.onFormSubmit}>
              {this.state.btnName}
            </button>
          </div>
        </div>


        <div>
          <h3 >Creation</h3>
        </div>

        <div className="fields"   >
          <div className="one wide field">
            <label>Add_User</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="one wide field">
            <label>Add_store</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

          <div className="one wide field">
            <label>Add_route</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="one wide field">
            <label>Add_Shop</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

          <div className="one wide field">
            <label>Add_Product</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

        </div>

        <div>
          <h3 >Edit/Delete</h3>
        </div>
        <div>
          <h4 >Edit</h4>
        </div>

        <div className="fields"   >
          <div className="one wide field">
            <label>User</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
           
           
          <div className="one wide field">
            <label>Route</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
           

          <div className="one wide field">
            <label>Shop</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          

          <div className="one wide field">
            <label>Product</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

        </div>

        <div>
          <h4 >Delete</h4>
        </div>
        <div className="fields"   >
          
          <div className="one wide field">
            <label>Users</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="one wide field">
            <label>Route</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          
        

          
          <div className="one wide field">
            <label>Shop</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="one wide field">
            <label>Product</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

          

        </div>
        <div>
          <h3 >View</h3>
        </div>

        <div className="fields"   >
          <div className="one wide field">
            <label>User</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="one wide field">
            <label>Product</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

          <div className="one wide field">
            <label>Shop</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="one wide field">
            <label>Route</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

          <div className="one wide field">
            <label>Store</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="one wide field">
            <label>Report</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

        </div>
        <div>
          <h3 >Authentication</h3>
        </div>

        <div className="fields"   >
          <div className="two wide field">
            <label>User authentication</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="two wide field">
            <label>Shop authentication</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>


        </div>
        <div>
          <h3 >Report</h3>
        </div>

        <div className="fields"   >
          <div className="two wide field">
            <label>User report</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="two wide field">
            <label>Product report</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

          <div className="two wide field">
            <label>Shop report</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>
          <div className="two wide field">
            <label>GPS report</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

          <div className="two wide field">
            <label>Sales Order Report</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

          <div className="two wide field">
            <label>Daily charts</label>
            <input
              type="checkbox"
              name="first_name"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.form.first_name}
            />
          </div>

        </div>


      </form>
    );
  }
}

export default MyForm;

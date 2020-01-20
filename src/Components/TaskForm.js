import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../Actions/index";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  UNSAFE_componentWillMount() {
    console.log(this.props.itemEditing);
    if (this.props.itemEditing && this.props.itemEditing.Id !== undefined) {
      console.log(this.props.itemEditing.Id);
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status
      });
    } else {
      this.onClear();
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (
      nextProps &&
      nextProps.itemEditing &&
      nextProps.itemEditing.id !== undefined
    ) {
      console.log(this.state);
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status
      });
    } else {
      this.onClear();
    }
  }
  onClear = () => {
    this.setState({
      id: "",
      name: "",
      status: true
    });
  };
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.props.onCloseForm();
  };

  render() {
    if (!this.props.isDisplayForm) return "";
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title" onClick={this.props.onCloseForm}>
            {this.state.id ? "Edit a course" : "Add a course"}
            <span className="fa fa-times-circle text-right"></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group text-left">
              <label>To do</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Input field"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Is active</label>
            <select
              className="form-control"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </select>
            <hr />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus"></span> Save
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.onCloseForm}
              >
                <span className="fa fa-times"></span> Close
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { isDisplayForm: state.isDisplayForm, itemEditing: state.itemEditing };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: task => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

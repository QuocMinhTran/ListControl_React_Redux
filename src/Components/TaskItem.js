import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../Actions/index";

class TaskItem extends Component {
  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
  };
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };
  onEditState = () => {
    this.props.onEditTask(this.props.task);
  };
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status === true
                ? "label label-success"
                : "label label-danger"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "Active" : "Inactive"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onEditState}
          >
            <span className="fa fa-edit"></span> Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDeleteTask}
          >
            <span className="fa fa-trash-alt"></span> Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispactchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: id => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteTask: id => {
      dispatch(actions.deleteTask(id));
      dispatch(actions.closeForm());
    },
    onEditTask: task => {
      dispatch(actions.openForm());
      dispatch(actions.editTask(task));
    }
  };
};
export default connect(mapStateToProps, mapDispactchToProps)(TaskItem);

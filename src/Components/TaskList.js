import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as actions from "./../Actions/index";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1
    };
  }

  onEditState = id => {
    this.props.onEditState(id);
  };
  onChangeFilter = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.onFilterTable(this.state);
      }
    );
  };
  render() {
    var { tasks, filterTable, sortTask, searchTask } = this.props;

    //Filter on table
    if (filterTable.filterName) {
      tasks = tasks.filter(task => {
        return (
          task.name
            .toLowerCase()
            .indexOf(filterTable.filterName.toLowerCase()) !== -1
        );
      });
    }

    tasks = tasks.filter(task => {
      if (filterTable.filterStatus === -1) {
        return task;
      } else {
        return task.status === (filterTable.filterStatus === 0 ? true : false);
      }
    });

    //Filter outside table

    if (searchTask) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(searchTask.toLowerCase()) !== -1;
      });
    }

    //Sort table
    if (sortTask.sortBy === "name") {
      tasks = tasks.sort((a, b) => {
        if (a.name > b.name) return sortTask.sortValue;
        else if (a.name < b.name) return -sortTask.sortValue;
        else return 0;
      });
    } else {
      tasks = tasks.sort((a, b) => {
        if (sortTask.sortValue === -1) {
          return a.status - b.status;
        } else {
          return b.status - a.status;
        }
      });
    }

    var elmTask = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onEditState={this.onEditState}
        />
      );
    });
    return (
      <table className="table table-bordered table-hover mt-30">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                name="filterName"
                id="input"
                className="form-control"
                value={this.state.filterName}
                onChange={this.onChangeFilter}
              />
            </td>
            <td>
              <select
                name="filterStatus"
                id="input"
                className="form-control"
                value={this.state.filterStatus}
                onChange={this.onChangeFilter}
              >
                <option value={-1}>All</option>
                <option value={0}>Active</option>
                <option value={1}>Inactive</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elmTask}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    sortTask: state.sortTask,
    searchTask: state.searchTask
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: filter => {
      dispatch(actions.filterTask(filter));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

import React from "react";
import "./App.css";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import Control from "./Components/Control";
import { connect } from "react-redux";
import * as actions from "./Actions/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      sortBy: "name",
      sortValue: 1
    };
  }

  onToggleForm = () => {
    const { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== "") {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearForm({
      id: "",
      name: "",
      status: true
    });
  };
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>List Control</h1>
        </div>
        <div className="row">
          <div
            className={
              this.props.isDisplayForm
                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                : "col-xs-0 col-sm-0 col-md-0 col-lg-0"
            }
          >
            <TaskForm />
          </div>
          <div
            className={
              this.props.isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus"></span> Add a course
            </button>
            {/*Search and Sort*/}
            <Control />
            <TaskList />
          </div>
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
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onClearForm: task => {
      dispatch(actions.editTask(task));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

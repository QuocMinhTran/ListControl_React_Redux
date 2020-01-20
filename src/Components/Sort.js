import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../Actions/index";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        by: "name",
        value: 1
      }
    };
  }
  onClick = (sortBy, sortValue) => {
    this.setState(
      {
        sort: {
          by: sortBy,
          value: sortValue
        }
      },
      () => this.props.onSortTask(this.state.sort)
    );
  };
  render() {
    let { sort } = this.state;
    return (
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Sort &nbsp;
          <span className="fa fa-sort"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li onClick={() => this.onClick("name", 1)}>
            <a
              role="button"
              className={
                sort.by === "name" && sort.value === 1 ? "sort_selected" : ""
              }
            >
              <span className="fa fa-sort-alpha-asc"></span> Name Ascending
            </a>
          </li>
          <li onClick={() => this.onClick("name", -1)}>
            <a
              role="button"
              className={
                sort.by === "name" && sort.value === -1 ? "sort_selected" : ""
              }
            >
              <span className="fa fa-sort-alpha-desc"></span> Name Desceding
            </a>
          </li>
          <li role="separator" className="divider"></li>
          <li onClick={() => this.onClick("status", 1)}>
            <a
              role="button"
              className={
                sort.by === "status" && sort.value === 1 ? "sort_selected" : ""
              }
            >
              <span className="fa fa-sort-alpha-desc"></span> Status Ascending
            </a>
          </li>
          <li onClick={() => this.onClick("status", -1)}>
            <a
              role="button"
              className={
                sort.by === "status" && sort.value === -1 ? "sort_selected" : ""
              }
            >
              <span className="fa fa-sort-alpha-desc"></span> Status Desceding
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSortTask: sort => {
      dispatch(actions.sortTask(sort));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);

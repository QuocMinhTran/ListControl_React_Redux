import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../Actions/index";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  onKeywordChange = event => {
    const target = event.target;
    this.setState({
      keyword: target.name === "keyword" ? target.value : ""
    });
  };
  onPostKeyword = () => {
    this.props.onSearchTask(this.state.keyword);
  };
  render() {
    let { keywork } = this.state;
    return (
      <div className="input-group">
        <input
          type="text"
          name="keyword"
          value={keywork}
          onChange={this.onKeywordChange}
          className="form-control"
          placeholder="Insert to-do"
        />

        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onPostKeyword}
          >
            <span className="fa fa-search"></span> Find
          </button>
        </span>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearchTask: keyword => {
      dispatch(actions.searchTask(keyword));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);

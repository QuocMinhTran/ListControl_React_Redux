import * as types from "./../Constants/ActionTypes";

const intialState = false;
const myReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      console.log("toggle form");
      return !state;
    case types.CLOSE_FORM:
      return false;
    case types.OPEN_FORM:
      return true;
    default:
      return state;
  }
};

export default myReducer;

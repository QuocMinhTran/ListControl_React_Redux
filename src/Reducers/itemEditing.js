import * as types from "./../Constants/ActionTypes";

const initialState = {};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      console.log(action.task);
      state = action.task;
      return state;
    default:
      return state;
  }
};

export default myReducer;

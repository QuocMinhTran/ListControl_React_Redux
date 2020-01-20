import * as types from "./../Constants/ActionTypes";

const initialState = {
  sortBy: "name",
  sortValue: 1
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT_TASK:
      console.log(action);
      return { sortBy: action.sort.by, sortValue: action.sort.value };
    default:
      return state;
  }
};
export default myReducer;

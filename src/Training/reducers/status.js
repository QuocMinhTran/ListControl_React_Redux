let initState = false;

let status = (state = initState, action) => {
  if (action.type === "TOGGLE_STATUS") {
    const status = state;
    return !status;
  }
  return state;
};
export default status;

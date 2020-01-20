let initState = {
  by: "name",
  value: 1
};

let sort = (state = initState, action) => {
  if (action.type === "SORT") {
    const { by, value } = action.sort;
    return {
      by: by,
      value: value
    };
  }
  return state;
};
export default sort;

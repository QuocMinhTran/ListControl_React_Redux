import * as types from "./../Constants/ActionTypes";

const randomString = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
const onGenerateId = () => {
  return (
    randomString() +
    randomString() +
    "-" +
    randomString() +
    "-" +
    randomString() +
    "-" +
    randomString() +
    randomString()
  );
};
const findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};
let data = JSON.parse(localStorage.getItem("tasks"));
let initState = data ? data : [];
let myReducer = (state = initState, action) => {
  let index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return [...state];
    case types.SAVE_TASK:
      let newTask = {
        id: action.task.id ? action.task.id : onGenerateId(),
        name: action.task.name,
        status: action.task.status === true ? true : false
      };
      index = findIndex(state, action.task.id);
      if (index !== -1) {
        console.log(state[index]);
        state[index] = newTask;
      } else {
        state.push(newTask);
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS:
      index = findIndex(state, action.id);
      console.log(index);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          status: !state[index].status
        };
        localStorage.setItem("tasks", JSON.stringify(state));
      }
      return [...state];

    case types.DELETE_TASK:
      index = findIndex(state, action.id);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(state));
      }
      return [...state];
    default:
      return state;
  }
};
export default myReducer;

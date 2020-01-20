import { createStore } from "redux";
import { status, sort } from "./actions/index";
import myReducer from "./reducers/index";

const store = createStore(myReducer);
console.log("default", store.getState());
//demo action

store.dispatch(status());
console.log("toggle", store.getState());

//demo action with arguments

store.dispatch(
  sort({
    by: "status",
    value: -1
  })
);
console.log("SORT", store.getState());

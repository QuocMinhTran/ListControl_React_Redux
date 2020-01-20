import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import itemEditing from "./itemEditing";
import filterTable from "./filterTable";
import sortTask from "./sortTask";
import searchTask from "./searchTask";

const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  itemEditing,
  filterTable,
  sortTask,
  searchTask
});
export default myReducer;

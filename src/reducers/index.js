import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersRefucer from "./usersReducer";

export default combineReducers({
  posts: postReducer,
  users: usersRefucer,
});

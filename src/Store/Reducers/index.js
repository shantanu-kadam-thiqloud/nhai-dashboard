import { combineReducers } from "redux";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  // Add your reducers here
  NHAIUser: userReducer,
  profile: profileReducer,
});

export default rootReducer;

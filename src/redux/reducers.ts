import { combineReducers } from "redux";
import { networksReducer } from "redux/networks/reducers";

export default combineReducers({
  citybikesNetworks: networksReducer,
});

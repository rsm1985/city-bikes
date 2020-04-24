import { combineReducers } from "redux";
import { networksReducer } from "redux/networks/reducers";
import { stationsReducer } from "redux/stations/reducers";

export default combineReducers({
  citybikesNetworks: networksReducer,
  citybikesStations: stationsReducer,
});

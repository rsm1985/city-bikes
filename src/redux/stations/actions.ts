import {
  GET_STATIONS,
  TOGGLE_STATION_LOADING,
  ADD_LIKED_STATION,
  REMOVE_LIKED_STATION,
} from "../actionTypes";

export const actionGetStations = (data: any) => ({
  type: GET_STATIONS,
  payload: data,
});

export const actionToggleStationLoading = (state: boolean) => ({
  type: TOGGLE_STATION_LOADING,
  payload: state,
});

export const actionAddLikedStation = (item: any) => {
  return {
    type: ADD_LIKED_STATION,
    payload: item,
  };
};

export const actionRemoveLikedStation = (item: any) => {
  return {
    type: REMOVE_LIKED_STATION,
    payload: item,
  };
};

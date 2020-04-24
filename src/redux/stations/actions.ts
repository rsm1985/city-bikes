import { GET_STATIONS, TOGGLE_STATION_LOADING } from "../actionTypes";

export const actionGetStations = (data: any) => ({
  type: GET_STATIONS,
  payload: data,
});

export const actionToggleStationLoading = (state: boolean) => ({
  type: TOGGLE_STATION_LOADING,
  payload: state,
});

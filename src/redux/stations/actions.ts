import { GET_STATIONS } from "../actionTypes";

export const actionGetStations = (data: any) => ({
  type: GET_STATIONS,
  payload: data,
});

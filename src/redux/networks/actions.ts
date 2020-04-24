import { GET_NETWORKS, SET_ACTIVE_NETWORK } from "redux/actionTypes";

export const actionGetNetworks = (data: any) => ({
  type: GET_NETWORKS,
  payload: data,
});

export const actionSetActiveNetwork = (data: any) => ({
  type: SET_ACTIVE_NETWORK,
  payload: data,
});

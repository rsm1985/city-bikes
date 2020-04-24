import { GET_NETWORKS } from "redux/actionTypes";

export const actionGetNetworks = (data: any) => ({
  type: GET_NETWORKS,
  payload: data,
});

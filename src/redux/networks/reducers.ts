import { GET_NETWORKS, SET_ACTIVE_NETWORK } from "redux/actionTypes";

const initialState = {};

export const networksReducer = (state: {} = initialState, action: any) => {
  const { payload, type } = action;
  switch (type) {
    case GET_NETWORKS: {
      return {
        data: payload,
      };
    }
    case SET_ACTIVE_NETWORK: {
      return {
        ...state,
        activeNetwork: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

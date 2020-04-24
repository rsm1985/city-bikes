import { GET_STATIONS } from "redux/actionTypes";

const initialState = {};

export const stationsReducer = (state: {} = initialState, action: any) => {
  const { payload, type } = action;
  switch (type) {
    // case GET_NETWORKS: {
    //   return {
    //     data: payload,
    //   };
    // }
    default: {
      return {
        ...state,
      };
    }
  }
};

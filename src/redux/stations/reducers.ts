import { GET_STATIONS, TOGGLE_STATION_LOADING } from "redux/actionTypes";

const initialState = {
  isStationsLoading: false,
};

export const stationsReducer = (state: {} = initialState, action: any) => {
  const { payload, type } = action;
  switch (type) {
    case GET_STATIONS: {
      return {
        data: payload,
      };
    }
    case TOGGLE_STATION_LOADING: {
      return {
        ...state,
        isStationsLoading: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

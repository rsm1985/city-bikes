import {
  GET_STATIONS,
  TOGGLE_STATION_LOADING,
  ADD_LIKED_STATION,
  REMOVE_LIKED_STATION,
} from "redux/actionTypes";

const initialState = {
  isStationsLoading: false,
  likedStations: [],
};

export const stationsReducer = (state: any = initialState, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case GET_STATIONS: {
      return {
        ...state,
        data: payload,
      };
    }
    case TOGGLE_STATION_LOADING: {
      return {
        ...state,
        isStationsLoading: payload,
      };
    }
    case ADD_LIKED_STATION: {
      state.likedStations.push(payload);
      return {
        ...state,
      };
    }
    case REMOVE_LIKED_STATION: {
      const filtered = state.likedStations.filter(
        (item: any) => payload.id !== item.id
      );
      console.log("REMOVE_LIKED_STATION filtered", filtered);
      return {
        ...state,
        likedStations: filtered,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

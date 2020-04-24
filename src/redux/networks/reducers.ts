const initialState = {};

export const networksReducer = (state: {} = initialState, action: any) => {
  const { payload, type } = action;
  switch (type) {
    case "GET_NETWORKS": {
      return {
        data: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

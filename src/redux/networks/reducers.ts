const initialState = {}

export const networksReducer = (state: {} = initialState, action: any) => {
  const {payload, type} = action;
  switch (type) {
    case "OK": {
      return {
        ...state,
        payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}
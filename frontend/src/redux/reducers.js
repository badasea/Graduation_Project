const initialState = {
  Data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_Data":
      return { ...state, Data: action.payload };
    default:
      return state;
  }
};
export default rootReducer;

var initialState = {
  // place_data: {},
  place_data: [
    { name: "영등포구", value: 10 },
    { name: "성북구", value: 20 },
    { name: "종로구", value: 30 },
  ],
  type_data: [
    { name: "한복점", value: 10 },
    { name: "공방", value: 20 },
    { name: "음식점", value: 20 },
    { name: "기타", value: 30 },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "chart":
      return state;

    default:
      return state;
  }
};

export default reducer;

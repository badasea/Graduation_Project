import axios from "axios";

ACTIONS = {
  GET_DATA: "GET_DATA",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return axios
        .get(process.env.REACT_APP_API_URL + "/api/shop/count/1")
        .then((res) => setdata(res.data));
    default:
      return state;
  }
};

export default Reducer;

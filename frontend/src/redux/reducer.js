import axios from "axios";

const session = JSON.parse(window.sessionStorage.getItem("data"));

ACTIONS = {
  GET_DATA: "GET_DATA",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return axios
        .get(
          process.env.REACT_APP_API_URL +
            "/api/shop/user/" +
            session.data.user_id
        )
        .then((res) => setdata(res.data));
    default:
      return state;
  }
};

export default Reducer;

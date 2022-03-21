import axios from "axios";

export const fetch_all_countries = async () => {
  return await axios({
    method: "GET",
    url: process.env.REACT_APP_API_URL + "/api/shop/count/1",
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

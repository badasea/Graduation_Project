import React, { createContext, useState } from "react";
import axios from "axios";

export const Context = createContext(0);

const ContextProvider = ({ children }) => {
  const [state, setState] = useState(0);
  const [individual, setIndividual] = useState(0);

  const getData = () => {
    return axios
      .get(process.env.REACT_APP_API_URL + "/api/shop/count/1")
      .then((res) => setState(res.data))
      .catch(console.log);
  };

  const value = { state, individual, getData };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;

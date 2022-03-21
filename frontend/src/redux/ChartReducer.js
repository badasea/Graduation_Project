import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// axios({
//   method: "get",
//   url: process.env.REACT_APP_API_URL + "/api/shop/count/1",
// }).then((res) => {
//   console.log(res.data);
// });

export const getList = createAsyncThunk("GET_TODO", async () => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/shop/count/1"
  );
  return response.data;
});

export const todoReducer = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => [...payload],
  },
});

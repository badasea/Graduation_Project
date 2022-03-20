import { combineReducers } from "redux";
import reducer from "./ChartReducer";

const reducers = combineReducers({
  chart: reducer,
});

export default reducers;

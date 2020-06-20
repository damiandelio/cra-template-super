import { combineReducers, createStore } from "redux";
// Reducers
import loaderReducer from "./modules/loader";

const rootReducer = () => {
  return combineReducers({
    loaderReducer,
  });
};

const store = createStore(rootReducer());

export default store;

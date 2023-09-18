import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from '../reducers'
import favouriteReducer from "../reducers/favouritesReducers";
const rootReducer = combineReducers({
  favourite: favouriteReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;

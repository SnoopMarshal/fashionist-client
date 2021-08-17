import { combineReducers } from "redux";
import authReducer from "./authReducer";
import shopReducer from "./shopReducer"
import errorReducer from "./errorReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  shop: shopReducer
});
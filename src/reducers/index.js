import { combineReducers } from "redux";
import authReducer from "./authReducer";
import wishlistReducer from "./wishlistReducer"
import errorReducer from "./errorReducer";export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  wishlist: wishlistReducer
});
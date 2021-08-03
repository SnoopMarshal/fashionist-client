import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  LOGOUT,
  USER_REGISTER
} from "./types";// Register User

export const registerUser = userData => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => {
      dispatch(setSignUpState())
    }) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// set user as registered
export const setSignUpState = () => {
    return {
      type: USER_REGISTER
    }
}
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};// Log user out
export const logoutUser = () => dispatch => {
  dispatch({type: LOGOUT});
};
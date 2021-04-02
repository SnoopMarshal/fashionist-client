import { SET_CURRENT_USER, USER_LOADING, LOGOUT } from "./../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  isLoading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOGOUT: {
      localStorage.removeItem("jwtToken");
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      }
    }
    default:
      return state;
  }
}

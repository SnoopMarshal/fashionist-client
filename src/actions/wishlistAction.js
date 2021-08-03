import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {ADD_TO_WISHLIST, CLEAR_WISHLIST} from './../actions/types';

export const addToWishList = item => dispatch => {
    dispatch(setWishList(item))
}

export const setWishList = item => {
    return {
        type: ADD_TO_WISHLIST,
        payload: item
    }
}
export const clearWishlist = () => {
    return {
        type: CLEAR_WISHLIST,
    }
}
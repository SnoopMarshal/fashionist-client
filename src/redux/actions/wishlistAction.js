import axios from "axios";
import {ADD_TO_WISHLIST, CLEAR_WISHLIST, DELETE_FROM_WISHLIST} from './../actions/types';

export const setWishList = item => {
    return {
        type: ADD_TO_WISHLIST,
        payload: item
    }
}
export const deleteFromWishlist = item => {
    return {
        type: DELETE_FROM_WISHLIST,
        payload: item
    }
}
export const clearWishlist = () => {
    return {
        type: CLEAR_WISHLIST,
    }
}
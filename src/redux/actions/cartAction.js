import axios from "axios";
import setAuthToken from "./../../utils/setAuthToken";
import {ADD_TO_CART, CLEAR_CART, DELETE_FROM_CART} from './../actions/types';

export const setCart = item => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}
export const deleteFromCart = item => {
    return {
        type: DELETE_FROM_CART,
        payload: item
    }
}
export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}
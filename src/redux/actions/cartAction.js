import { ADD_TO_CART, CLEAR_CART, DELETE_FROM_CART, GET_ERRORS } from './../actions/types';
import cartService from "./../../services/cartService";

export const setCart = item => dispatch => {
    cartService.addItemToCart(item).then(res => {
        dispatch({
            type: ADD_TO_CART,
            payload: item
        })
    })
        .catch(err => {
            console.error(err)
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        });
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
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
export const deleteFromCart = (cartItem) => dispatch => {
    cartService.removeItemFromCart(cartItem.item._id).then(
        res => {
            dispatch({
                type: DELETE_FROM_CART,
                payload: cartItem.item
            })
        }
    ).catch(err => {
        console.error(err)
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
    });
}
export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}
/* eslint-disable import/no-anonymous-default-export */
import {ADD_TO_WISHLIST, CLEAR_WISHLIST, ADD_TO_CART} from "../actions/types";

const initialState = {
    wishlist: [],
    cart: []
}
export default function( state = initialState, action) {
    console.log(state)
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const witem = action.payload;
            return {
                ...state,
                wishlist: [...state.wishlist, witem]
            }
        case CLEAR_WISHLIST:
            return {
                ...state,
                wishlist: []
            }
        case ADD_TO_CART: 
            const citem = action.payload
            return {
                ...state, 
                cart: [...state.cart, citem]

            }
        default:
            return state
    }
}
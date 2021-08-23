/* eslint-disable import/no-anonymous-default-export */
import { ADD_TO_WISHLIST, CLEAR_WISHLIST, ADD_TO_CART, DELETE_FROM_CART } from "../actions/types";
import * as _ from 'lodash';
const initialState = {
    wishlist: [],
    cart: []
}
export default function (state = initialState, action) {
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
        case DELETE_FROM_CART:
            const item = action.payload;
            _.remove(state.cart, {item: item})
            return {
                ...state,
                cart: [...state.cart]

            }
        default:
            return state
    }
}
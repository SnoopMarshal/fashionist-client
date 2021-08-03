/* eslint-disable import/no-anonymous-default-export */
import {ADD_TO_WISHLIST, CLEAR_WISHLIST} from "./../actions/types";

const initialState = {
    wishlist: []
}
export default function( state = initialState, action) {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const item = action.payload;
            return {
                ...state,
                wishlist: [...state.wishlist, item]
            }
        case CLEAR_WISHLIST:
            return {
                ...state,
                wishlist: []
            }
        default:
            return state
    }
}
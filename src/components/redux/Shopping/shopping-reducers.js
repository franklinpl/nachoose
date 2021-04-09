import * as actionTypes from './shopping-types'
import database from '../../database'

const INITIAL_STATE = {
    products: database,
    review: [{}],
    extras: [],
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, [...state.review]],
                review: [{}]
            }

        case actionTypes.ADD_TO_REVIEW:
            //first find data in products
            let item = state.products.find(item => item.id === action.payload.id)

            return {
                ...state,
                review: [...state.review, {...item}]
            }

        case actionTypes.REMOVE_FROM_CART:
            return {}

        case actionTypes.ADJUST_QTY:
            return {}

        case actionTypes.LOAD_CURRENT_ITEM:
            return {}

        default:
            return state
    }
}

export default shopReducer




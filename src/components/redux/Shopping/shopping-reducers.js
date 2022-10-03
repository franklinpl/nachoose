import * as actionTypes from './shopping-types'
import database from '../../database'

const INITIAL_STATE = {
    products: database,
    review: [{}],
    cart: JSON.parse(localStorage.getItem('cart')) 
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            let productId = Math.random() * (100000000 - 1000000) + 1000000
            return {
                ...state,
                cart: 
                    [...state.cart, [...state.review, {productId: productId}]
                ],
                review: [{}]
            }

        case actionTypes.ADD_TO_REVIEW:
            //first find data in products
            const item = state.products.find(item => item.id === action.payload.id)

            return {
                ...state,
                review: [...state.review, {...item}]
            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.productId !== action.payload.id)
            }

        case actionTypes.CHANGE_ITEM:

            //find the item in the review that I want to remove, referencing its index
            const indexOfItemInReview = state.review.indexOf(action.payload.lastItem)
            //find the item I WANT to add
            const itemIWantToAdd = state.products.find(elem => elem.id === action.payload.id)
            //splice the array
            const newArray = [...state.review]
            newArray.splice(indexOfItemInReview, 1, itemIWantToAdd)

            return {
                ...state,
                review: newArray
            }

        default:
            return state
    }
}

export default shopReducer




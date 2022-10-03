import * as actionTypes from './shopping-types'

export const addToCart = (itemId) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const addToReview = (itemId) => {
    return {
        type: actionTypes.ADD_TO_REVIEW,
        payload: {
            id: itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const changeItem = (lastItem, itemId) => {
    return {
        type: actionTypes.CHANGE_ITEM,
        payload: {
            lastItem: lastItem,
            id: itemId
        }
    }
}

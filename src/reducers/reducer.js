const initialState = {
    showingCategory: 'todos',
    carrito: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORY_SELECTED':
            return {
                ...state,
                showingCategory: action.payload
            }
        case 'PRODUCT_ADDED':
            return {
                ...state,
                carrito: state.carrito + 1
            }
        case 'PRODUCT_REMOVED':
            return {
                ...state,
                carrito: state.carrito - 1
            }
        default:
            return state
    }
}

export default rootReducer;
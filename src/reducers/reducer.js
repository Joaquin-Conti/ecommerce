const initialState = {
    showingCategory: 'todos',
    carrito: 0,
    sidebarIsOpen: false
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
        case 'SIDEBAR_TOGGLED':
        return {
            ...state,
            sidebarIsOpen: !state.sidebarIsOpen
        }
        default:
            return state
    }
}

export default rootReducer;
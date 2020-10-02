const initialState = {
    products: [],
    productsFound: true,
    isLoggedIn: true,
    sidebarIsOpen: false,
    showingLogin: false,
    // resultsAvailable: true,
    cart: {
        numberOfItems: 0,
        totalPrice: 0,
        items: []
    },
    /* WHEN USER IS SELECTING,
    THIS PROPERTY IS UPDATED */
    browseOptions: {
        selectedCategory: 'todos',
        minPrice: 699,
        maxPrice: 2199,
        talle: 'todos'
    },
    /* ON SEARCH BUTTON CLICK, COPIES ALL browseOptions
    PROPERTIES */
    onSearchOptions: {
        selectedCategory: 'todos',
        minPrice: 699,
        maxPrice: 2199,
        talle: 'todos'
    }
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BUTTON_CLICKED':
            return {
                ...state,
                filterOptionsSelected: true,
                onSearchOptions : {
                    ...state.browseOptions
                }
            }
        case 'PRODUCTS_OBTAINED':
            return {
                ...state,
                products: action.payload
            }
        case 'PRODUCTS_NOT_FOUND':
            return {
                ...state,
                productsFound: false
            }
        case 'PRODUCTS_FOUND':
            return {
                ...state,
                productsFound: true
            }
        case 'LOGIN_OPENED':
            return {
                ...state,
                showingLogin: true
            }
        case 'LOGIN_MODAL_CLOSED':
            return {
                ...state,
                showingLogin: false
            }
        case 'LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true
            }
        case 'LOGGED_OUT':
            return {
                ...state,
                cart: {
                    totalPrice: 0,
                    numberOfItems: 0,
                    items: []
                },
                isLoggedIn: false
            }
        case 'SEARCHBAR_USED':
            return {
                ...state,
                browseOptions : {
                    ...state.browseOptions,
                    searchBarInput: action.payload
                }
            }
        case 'CATEGORY_SELECTED':
            return {
                ...state,
                browseOptions : {
                    ...state.browseOptions,
                    selectedCategory: action.payload
                }
            }
        case 'MIN_PRICE_SELECTED':
            return {
                ...state,
                browseOptions : {
                    ...state.browseOptions,
                    minPrice: action.payload
                }
            }
        case 'MAX_PRICE_SELECTED':
            return {
                ...state,
                browseOptions : {
                    ...state.browseOptions,
                    maxPrice: action.payload
                }
            }
        case 'TALLE_SELECTED':
            return {
                ...state,
                browseOptions : {
                    ...state.browseOptions,
                    talle: action.payload
                }
            }
        case 'RESULTS_AVAILABLE_TOGGLED':
            return {
                ...state,
                resultsAvailable: !state.resultsAvailable
            }
        case 'PRODUCT_ADDED':
            const foundItemIndex = state.cart.items.findIndex(item => item.id === action.payload.item.id)
            let cartItems = []
            if (foundItemIndex !== -1) {
                state.cart.items[foundItemIndex].quantity++
                cartItems = [
                    ...state.cart.items,
                ]
            } else {
                cartItems = [
                    ...state.cart.items,
                    action.payload.item
                ]
            }
            return {
                ...state,
                cart: {
                    ...state.cart,
                    numberOfItems: state.cart.numberOfItems + action.payload.item.quantity,
                    totalPrice: state.cart.totalPrice + action.payload.price,
                    items: cartItems
                }
            }
        case 'PRODUCT_REMOVED':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    numberOfItems: state.cart.numberOfItems - action.payload.quantity,
                    totalPrice: state.cart.totalPrice - action.payload.price
                }
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
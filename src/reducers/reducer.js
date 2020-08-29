const initialState = {
    highestPrice: 2199,
    lowestPrice: 699,
    resultsAvailable: true,
    /* WHEN USER IS SELECTING,
    THIS PROPERTY IS UPDATED */
    browseOptions: {
        searchBarInput: '',
        selectedCategory: 'todos',
        minPrice: 699,
        maxPrice: 2199,
        talle: 'todos'
    },
    /* ON SEARCH BUTTON CLICK, COPIES ALL browseOptions
    PROPERTIES */
    onSearchOptions: {
        searchBarInput: '',
        selectedCategory: 'todos',
        minPrice: 699,
        maxPrice: 2199,
        talle: 'todos'
    },
    carrito: 0,
    sidebarIsOpen: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BUTTON_CLICKED':
            return {
                ...state,
                onSearchOptions : {
                    ...state.browseOptions
                }
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
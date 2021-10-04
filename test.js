const initialState = {
    catalog: [],
    cart: [],
    isLoading: false
}

export const catalogReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'GET_CATALOG_LOADING':
            return {...state, isLoading: true}
        case 'GET_CATALOG':
            return {...state, catalog: action.payload, isLoading: false}
        case 'ADD_TO_CART':
            return findProduct = state.cart.find(item => item.id === action.payload.id)
                if(findProduct) {
                    return {...state,
                        cart: state.cart.map(el => el.id === findProduct.id) ? {
                        ...findProduct, quantity: item.quantity + 1
                        }: item}
            }
            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}
        case 'REMOVE_FROM_CART' :
            return {...state, cart: state.cart.Filter(el => el.id !== action.payload)}
    }
}




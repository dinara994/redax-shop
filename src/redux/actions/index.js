import axios from "axios";

export const getCatalog = () => {
   return (dispatch) => {
       dispatch({type: 'GET_CATALOG_LOADING'})
       axios('https://614dcadde3cf1f001712d359.mockapi.io/api/catalog')
           .then(({data}) => {
               return dispatch({type: 'GET_CATALOG', payload: data})
           })
   }
}

export const addToCart = (product) => {
   return {type: 'ADD_TO_CART', payload: product}
}

export const ReduceCountBtn = (idx) => {
    return {type: 'REDUCE_THE_COUNT',payload: idx}
}

export const removeFromCart = (product) => {
    return {type: 'REMOVE_FROM_CART', payload: product.id}
}
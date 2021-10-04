//store - [] будет хранить обьект
const initialState = { //начальное значение state
    catalog:  [],
    // catalog: {data: [], isLoading: false}, user: {data:[], isLoading: false}
    cart: [],
    isLoading: false
}
export const catalogReducer = (state = initialState, action) => { //reducer - распределитель данных. Есть два пара-ра 1. начальное значение store 2. событие
    switch (action.type) {
        case 'GET_CATALOG_LOADING':
return {...state, isLoading: true}
        case 'GET_CATALOG' : //если привезли/получили каталог?
            return {...state, catalog: action.payload, isLoading: false} //тогда обнови каталог
        case 'ADD_TO_CART' : //если привезли 'добавить новы товар в корзину'
            const findProduct = state.cart.find(el => el.id === action.payload.id) //в findProduct запис-ся {} кот-го найдем в карзине,
            // а в корзине леж-его товара уже есть ключ quantity === action.payload.id - тот обьект, которого хотим добавить в корзинку
            if (findProduct) { // любой {} true
                return {...state,
                    cart: state.cart.map(item => item.id === findProduct.id ?  {
                        //map - переб-ет [] c товар-и, которые уже есть в корзине
                        ...findProduct, //вместо этого обьекта, возьми все сто там было ...findProduct
                        quantity: item.quantity + 1 //и значение quantity увеличь на 1
                    } : item)}
            }
            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]} // но-е знач-е корзины(cart): все что было в cart и добавь еще новый ключ quantity: 1
        case 'REMOVE_FROM_CART' :
            return {...state, cart: state.cart.filter(el => el.id !== action.payload)} //id проаисвнв
        case 'REDUCE_THE_COUNT':
            if (state.cart[action.payload].quantity > 1) { //[] c {} с одним товаром с корзины => если его в корзине больше 1-го то уменьшить
                return {...state,
                    cart: state.cart.map((item, idx) => idx === action.payload ?  {
                        ...item,
                        quantity: item.quantity - 1} : item)}
            }
            return state
        default: //поумолчанию, если ни один из них не подощло
            return state //оставь все без изменений
    }
}

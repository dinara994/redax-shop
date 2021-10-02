//store - [] будет хранить обьект
const initialState = { //начальное значение state
    catalog: [],
    cart: [],
}
export const catalogReducer = (state = initialState, action) => { //reducer - распределитель данных. Есть два пара-ра 1. начальное значение store 2. событие
    switch (action.type) {
        case 'GET_CATALOG' : //если привезли/получили каталог?
            return {...state, catalog: action.payload} //тогда обнови каталог
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
            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]} // новое значение корзины(cart): все что было в ...cart и добавь еще новое значение
        case 'REMOVE_FROM_CART' :
            return {...state, cart: state.cart.filter(el => el.id !== action.payload)} //id проаисвнв
        case 'REDUCE_THE_COUNT':
            const findProduct1 = state.cart.find(el => el.id === action.payload)
            if (findProduct1.quantity > 1) {
                return {...state,
                    cart: state.cart.map(item => item.id === findProduct1.id ?  {
                        ...findProduct1,
                        quantity: findProduct1.quantity - 1
                    } : item)}
            }
            return state
        default: //поумолчанию, если ни один из них не подощло
            return state //оставь все без изменений
    }
}

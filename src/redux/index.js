import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {catalogReducer} from './reducer/catalogReducer'
import thunk from "redux-thunk";



export const store = createStore(catalogReducer, composeWithDevTools(applyMiddleware(thunk))) //export
//переменная store это и есть хранилища которое приравниваем функцию для создания этого ХРАНИЛИЩА =>
// в нег передаем (reducer), функция опперационист, в зависимости от того, кто приехал
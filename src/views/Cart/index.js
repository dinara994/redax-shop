import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Card = () => {
    const cart = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    return (
        <div>
            {
                cart.length ? <table className='table'>
                        <thead>
                        <tr>
                            <th scope="col">наазвание</th>
                            <th scope="col">Цена</th>
                            <th scope="col">Сумма</th>
                            <th scope="col">Колличество</th>
                            <th scope="col">удалить</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            cart.map(product =>
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{(product.price * product.quantity).toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => dispatch({type: 'REDUCE_THE_COUNT',payload: product.id})}>-</button>
                                        {product.quantity}
                                        <button onClick={() => dispatch({type: 'ADD_TO_CART', payload: product})}>+</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => dispatch(
                                            {type: 'REMOVE_FROM_CART', payload: product.id
                                        })}>
                                            удалить
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                        <>
                            <h4>Итого: {cart.reduce((acc, item) => {
                                return (item.price * item.quantity) + acc
                            }, 0).toFixed(2)}</h4>
                        </>
                    </table>
                : 'Корзина пуста!'
            }
        </div>
    );
};

export default Card;
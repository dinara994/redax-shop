import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getCatalog} from "../../redux/actions";

const Home = () => {
    // const data = [
    //     {
    //         "id": 1,
    //         "title": "Royall",
    //         "price": "7.89",
    //         "description": "Eyelid retraction left lower eyelid",
    //         "amount": 1,
    //         "images": "http://dummyimage.com/196x100.png/cc0000/ffffff"
    //     },
    //     {
    //         "id": 2,
    //         "title": "Faustina",
    //         "price": "4.88",
    //         "description": "Background retinopathy and retinal vascular changes",
    //         "amount": 2,
    //         "images": "http://dummyimage.com/167x100.png/cc0000/ffffff"
    //     },
    //     {
    //         "id": 3,
    //         "title": "Inga",
    //         "price": "7.83",
    //         "description": "Sprain of medial collateral ligament of unsp knee, sequela",
    //         "amount": 3,
    //         "images": "http://dummyimage.com/186x100.png/5fa2dd/ffffff"
    //     }
    // ]
    const dispatch = useDispatch() //отправил данные
    const catalog = useSelector(store => store.catalog) //store принимаемпо любому имени, => catalog - название ключа должно соотвес-ть назв-ю в зран-ще внутри
    const isLoading = useSelector(store => store.isLoading) //store принимаемпо любому имени, => catalog - название ключа должно соотвес-ть назв-ю в зран-ще внутри
    // useSelector всегда принимает collBack  получает весь наш store
    useEffect(() => {
        dispatch(getCatalog()) //dispatch - создает новый action и отпр-ет данные в reducer.
        // этот обьект поподает в функцию reducer => по имени action [] => action.type => GET_CATALOG,  action.payload => data [{}, {}]
        //a reducer в зависимости от того какой тип(type) у него есть, ищет совподение и добавляет данные куда необходимо
    }, [dispatch])

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    return (
        <div>
            <div className='row'>
                {
                    catalog.map(product =>
                        <div className='col-md-3 mb-4'>
                            <img src={product.images} alt="" className='w-100'/>
                            <h4>{product.title}</h4>
                            <p>{product.price}</p>
                            <button onClick={() => dispatch(addToCart(product))}>В корзинку</button>
                            {/*onClick={() => dispatch({type: 'ADD_TO_CART', payload: product - отправляет в компонент redux и там получит п названию action*/}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;
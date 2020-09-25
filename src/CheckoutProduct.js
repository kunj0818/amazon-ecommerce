import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}){
    const [{ basket },dispatch]=useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            title:title,
            id:id,
        })
    }
   return(
    <div className="checkoutproduct">
        <img className="checkout__image" src={image} />
        <div className="checkout__info">
            <p className="checkout__producttitle">{title}</p>
            <p className="checkout__productprice">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkout__Productrating">
                {Array(rating)
                .fill()
                .map((_,i) => (
                <span>⭐</span>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>

    </div>
    );
}
export default CheckoutProduct;
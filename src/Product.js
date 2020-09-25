import React, { useContext } from "react";
import './product.css';
import { useStateValue } from "./StateProvider";



function Product({id,title,price,image,rating}){

const [{ basket },dispatch]=useStateValue();


const addToBasket = () => {
    dispatch({
        type:"ADD_TO_BASKET",
        item:{
            id: id,
            title: title,
            price: price,
            image: image,
            rating: rating,
                },
    });

};

    return(
        <div className="product">
            <div className="product__info">
                <span>{title}</span>
                <div className="product__price">
                    <span><small>$</small>
                    <strong>{price}</strong>
                    </span>
                </div>
                <div className="product__rating">
                     {Array(rating)
                     .fill()
                     .map((_, i) => (
                        <span>⭐</span>
                     ))} 
                </div>
            </div>
            <img src={image} alt="" />   
            <button onClick={addToBasket}>Add to Basket</button>         
         </div>

        
    );
    
}
export default Product;
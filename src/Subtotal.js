import React, { useContext } from "react";
import './subtottal.css';
import CurrencyFormat from 'react-currency-format';
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
 

function Subtotal(){
    const[{ basket }]=useStateValue();
    
    const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price+ amount,0);
   
    return(
        <div className="subtotal">
           
             <CurrencyFormat 
                 
             value={getBasketTotal(basket)} 
             displayType={'text'} 
             decimalScale={2}
             thousandSeparator={true} 
             prefix={'$'}
              renderText={value => 
             <>
             <p>Subtotal({basket?.length} items):<strong>{value}</strong></p>
             <small className="subtotal__gift">
             <input type="checkbox" />This Order Contains Gift
         </small>
          </>}
             />
             <button>Proceed To Checkout</button>
         </div>
           
             
    );
}
export default Subtotal;
import React from 'react';
import './header.css';
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';


function Header(){
    const [{ basket,user },dispatch]=useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return(
        <div className="header">
            <Link to='/'>
            <img className="header_img" src="https://www.pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header__search">
                <input className="search__input" type="text"/>
                <SearchIcon className="header_input"/>
                </div>
                
            <div className="header__nav">
            <Link to={!user && '/loginpage'}>
            <div onClick={handleAuthentication} className="header__option">
            
            <span className="option__1">Hello {user?.email} </span>
            <span className="option__2">{user?'Sign out':'Sign In'}</span>
              
            
         
            </div>
            </Link>
            
            
            
            <div className="header__option">
            <span className="option__1">Returns</span>
            <span className="option__2">& Orders</span>
            </div>
            <div className="header__option">
            <span className="option__1">Your </span>
            <span className="option__2">Prime</span>

            </div>
            <Link to='/checkout'>
            <div className="header__basket">
                <ShoppingBasketIcon />
                <span className="header__count option__2">{basket?.length}</span>
            </div>
            </Link>
            

            
            </div>
            

        </div>
        
        
    );
}
export default Header;
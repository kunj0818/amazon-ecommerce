import React from 'react';
import './home.css'
import Product from "./Product";


function Home(){
    return(
        <div className="home">
            <div className="home__container">
                <img 
                className="home__img" 
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            
            <div className="home__row">
                <Product id="101" title="The Lean Startup:How Constant Innovation Creates Radically Successful Businesses Paperback" image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                price={29.99} rating ={4}/>
                <Product 
                id="105"
                title="KenWood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg" 
                 />
                
            </div>
            <div className="home__row">
            <Product id="102"
            title="Samsung LC49RG90SSUXEN 49'Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
            <Product
            id="106" 
            title="Amazon Echo (3rd Generation)  | 
            Smart speaker with Alexa,Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://www.reliancedigital.in/medias/Amazon-B07P9B3W1G-Computer-Speakers-491600509-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzkzNzl8aW1hZ2UvanBlZ3xpbWFnZXMvaDZlL2g4ZC85MjE2NjcyODI1Mzc0LmpwZ3wzZmEwYjdmOTZkNDYwY2M4ZDg3YmVhZGQ4NzliNDE1ZTBiYzAwMzA5MGQ0Yjc5NmUwZjc4ZjFkOWMyMjI1YTE1"/>
            <Product
            id="103"
            title="New Apple iPad Pro (12.9-inch,Wi-Fi,128GB) - Silver(4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
            </div>
            <div className="home__row">
            <Product
            id="104"
            title="Samsung LC49RG90XXUZEN 49' Curved LED Gaming Monitor-Super Ultra Wide Dual WQHD 5120 X 1440"
            price={1094.98} 
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />    
                
            </div>
            </div>
        </div>
    );
    }

    export default Home;
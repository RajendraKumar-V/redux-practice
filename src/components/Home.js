import React from 'react';

function Home(props){
    console.warn("props",props);
   return(
    <div>
        <h2>Home Component</h2> <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src=""/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove To Cart</button>       
                </div>
            </div>
    </div>
   )
}

export default Home;
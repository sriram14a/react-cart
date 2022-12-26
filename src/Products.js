import React from "react"
// import { useState } from "react";

export function Products({ items, addtocart }) {
   
    // const [disable, setDisable] = useState(false);

    return (
        <div>
        <img className="cover-image" src="https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg" alt=""/>
        <div className="item-container">
            {items.map((itemNew) => <div className="item-card">
                <img src={itemNew.image} className="item-image"></img>
                <div className="item-name">{itemNew.name}</div>
                <div className="item-rating">{itemNew.rating}</div>
                <div className="item-pricing">${itemNew.price}</div>
                <button className="btn" type="submit"
                    onClick={() => addtocart(itemNew)}
                >ADD TO CART</button>
            </div>)}

        </div>
        </div>
    )
}


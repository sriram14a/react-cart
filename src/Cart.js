import React from "react"

export function Cart({ cartitems, addtocart, removefromcart }) {
    console.log(cartitems)
    const totalprice = cartitems.reduce((price, itemincart) => price + itemincart.quantity * itemincart.price, 0)
    return (
        <div className="cart">
            {cartitems.length === 0 && (<div className="noitems">
                <h1>No items Added</h1>
            </div>)}
            <h2 className="cart-heading">CART ITEMS</h2>
            {cartitems.map((itemincart) => (
                <div className="cartitems-container" >
                    
                    
                    <div className="item">
                        <img className="cartitem-image" src={itemincart.image} ></img>
                        <div className="cartitem-details">
                            <h5>{itemincart.name}    {itemincart.rating}</h5>
                            <h2>{itemincart.quantity}*${itemincart.price}</h2>
                        </div>
                        <div className="cartitem-details">
                            <h2>PRICE</h2>
                            <h3>${itemincart.quantity * itemincart.price}</h3>
                            <button className="add-remove" type="submit" onClick={() => addtocart(itemincart)}>+</button>
                            <button className="add-remove" type="submit" onClick={() => removefromcart(itemincart)}>-</button>
                        </div>
                    </div>
                </div>
                ))}
            <div className="total">
                <h1>Total price  :  ${totalprice}</h1>
            </div>
        </div>
    )

}

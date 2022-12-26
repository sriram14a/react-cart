import { Link } from "react-router-dom"


export function Navbar({cartitems}) {
    return (
        <div className="navbar">
            <div className="navbar-name" >
                <h1>OFFER ZONE</h1>
                <img className="offer-img" src="https://static.vecteezy.com/system/resources/previews/013/212/816/non_2x/discount-offer-tag-icon-shopping-coupon-symbol-sale-label-tag-with-percentage-sign-black-friday-discount-banner-or-coupon-vector.jpg" alt="" />
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="Cart">
                            <button className="button" type="submit"><img className="cart-img" src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png" /> Cart <span className="cart-length">{cartitems.length}</span></button>
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}
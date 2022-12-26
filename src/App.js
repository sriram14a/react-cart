
import './App.css';
import { Products } from './Products';
import { Navbar } from './Navbar';
import { Cart } from './Cart';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

const items = [
  {
    image: "https://m.media-amazon.com/images/I/71mSkSAE2lL._SX679_.jpg",
    name: "Mixer",
    rating: "⭐⭐⭐⭐★",
    price: "70",
    id: "1"
  },
  {
    image: "https://m.media-amazon.com/images/I/71m1ZbLJ1tL._SX522_.jpg",
    name: "Laptop-az",
    rating: "⭐⭐⭐⭐★",
    price: "100",
    id: "2"
  },
  {
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
    name: "Iphone 7",
    rating: "⭐⭐⭐⭐★",
    price: "99",
    id: "3"
  },
  {
    image: "https://m.media-amazon.com/images/I/81jqUPkIVRL._SX679_.jpg",
    name: "Headphone",
    rating: "⭐⭐⭐★★",
    price: "85",
    id: "4"
  },
  {
    image: "https://m.media-amazon.com/images/I/91Euwf8QIML._SX679_.jpg",
    name: "Wallet",
    rating: "⭐⭐⭐★★",
    price: "20",
    id: "5"
  },
  {
    image: "https://m.media-amazon.com/images/I/61EGyktwgTL._SX522_.jpg",
    name: "Camera",
    rating: "⭐⭐⭐⭐★",
    price: "50",
    id: "6"
  },
  {
    image: "https://m.media-amazon.com/images/I/81Ywj5aRQvL._UX695_.jpg",
    name: "Shoes",
    rating: "⭐⭐⭐⭐★",
    price: "30",
    id: "7"
  },
  {
    image: "https://m.media-amazon.com/images/I/31q--YOSqkS._SY300_SX300_.jpg",
    name: "Duffle bag",
    rating: "⭐⭐⭐★★",
    price: "40",
    id: "8"
  },

]

function App() {

  const [cartitems, setCartitems] = useState([]);

  const addtocart = (items) => {
    const itemExist = cartitems.find((itemincart) => itemincart.id === items.id);
    if (itemExist) {
      setCartitems(cartitems.map((itemincart) => itemincart.id === items.id ? { ...itemExist, quantity: itemExist.quantity + 1 } : itemincart));
    }
    else {
      setCartitems([...cartitems, { ...items, quantity: 1 }])
    }
  }

  const removefromcart = (items) => {
    const itemExist = cartitems.find((itemincart) => itemincart.id === items.id);
    if (itemExist.quantity === 1) {
      setCartitems(cartitems.filter((itemincart) => itemincart.id !== items.id));
    }
    else {
      setCartitems(cartitems.map((itemincart) => itemincart.id === items.id ? { ...itemExist, quantity: itemExist.quantity - 1 } : itemincart));
    }
  }

  

  return (
    <div className="App">
      <Navbar cartitems={cartitems}/>

      <Routes>npm
        <Route path='/' element={<Products items={items} addtocart={addtocart} />} />
        <Route path="Cart" element={<Cart cartitems={cartitems} removefromcart={removefromcart} addtocart={addtocart} />} />
      </Routes>



    </div>
  );
}

export default App;

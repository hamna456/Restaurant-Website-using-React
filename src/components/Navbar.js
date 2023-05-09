import React, { useState, useRef } from 'react';
import Logo from '../assets/images/logo.png';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from '../store/cartSlice';



const Navbar = () => {
  const dispatch = useDispatch();
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();

  // const [cart, setCart] = useState(cartData);
  const cart = useSelector(state => state.cart.cart);



  const navbarHandler = () => {
    navbarRef.current.classList.toggle('active');
    searchRef.current.classList.remove('active');
    cartRef.current.classList.remove('active');
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle('active');
    navbarRef.current.classList.toggle('active');
    cartRef.current.classList.remove('active');
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle('active');
    searchRef.current.classList.remove('active');
    navbarRef.current.classList.remove('active');
  };

  const removeCartItemHandler = (index) => {
    // const newCart = [...cart];
    // newCart.splice(index, 1);
    // setCart(newCart);
    dispatch(cartActions.removeFromCart(index));

  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="logo" />
        </a>

        <nav className="navbar" ref={navbarRef}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/review">Review</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart" id="cart-btn" onClick={cartHandler}>
            <span>{cart.length}</span>
          </div>
          <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
        </div>

        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search here..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>

        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="fas fa-times" onClick={() => removeCartItemHandler(index)}></span>
              <img src={item.img} alt={item.name} />
              <div className="content">
                <h3>{item.name}</h3>
                <div className="price">{`${item.price}/-`}</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            Checkout Now
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { menu } from "../Data";
import { useSelector } from "react-redux";
import { cartActions } from '../store/cartSlice';
import { useDispatch } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const cart = useSelector(state => state.cart.cart);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
    const filteredItems = menu.filter((item) => item.category.toLowerCase() === category.toLowerCase());
    const itemNames = filteredItems.map((item) => item.name);
    const message = `For ${category} category we offer ${itemNames.join(", ")}.`;
    const speech = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(speech);
  };


  const handleAddToCartClick = (item) => {
    const message = `Added ${item.name} to cart. Price is ${item.price} .`;
    const speech = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(speech);
    console.log(item);
    console.log(cart);
    dispatch(cartActions.addToCart(item));
  };
  const filteredMenu = menu.filter((item) => {
    if (selectedCategory === "all") {
      return true;
    } else {
      return item.category.toLowerCase().includes(selectedCategory);
    }
  });

  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="categories">
          <button onClick={() => handleCategoryClick("all")}>All</button>
          <button onClick={() => handleCategoryClick("chinese")}>Chinese</button>
          <button onClick={() => handleCategoryClick("fast food")}>Fast Food</button>
          <button onClick={() => handleCategoryClick("desi")}>Desi</button>
          <button onClick={() => handleCategoryClick("drinks")}>Drinks</button>
          <button onClick={() => handleCategoryClick("sweet")}>Sweet Dishes</button>
        </div>

        <div className="box-container">
          {filteredMenu.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <div className="price">
                {item.price}
              </div>
              <button
                className="btn"
                onClick={() => handleAddToCartClick(item)}
              >
                add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;

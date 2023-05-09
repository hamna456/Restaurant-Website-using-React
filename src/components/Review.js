import React from "react";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={qouteImg} alt="" className="quote" />
              <p>
              I recently visited Sizzling Bites and was blown away by the bold and flavorful dishes 
              they served. The spice level was perfect and every bite was a sizzling delight. The ambiance
               of the restaurant was also fantastic, adding to the overall experience. I would highly 
               recommend this restaurant to anyone looking for a spicy culinary adventure.
              </p>
              <img src={item.img} className="user" alt="" />
              <h3>Hamna Naveed</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;

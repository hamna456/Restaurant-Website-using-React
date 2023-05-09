import React from "react";
import AboutImg from "../assets/images/about-img.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>

            <p>Indulge in our dishes and taste the magic that sets us apart - our secret blend of spices 
              and flavors that ignite your senses with every bite. Come savor the thrill of unique culinary 
              creations that only Sizzling Bites can offer using only the freshest and highest quality 
            ingredients in our dishes</p>
            <p> 
            Whether you're a heat seeker or prefer milder flavors, we've got something for everyone.
            </p>

            <a href="#" className="btn">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

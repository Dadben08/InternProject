import React, { useState } from "react";
import "./Hotest.css"; // Update the CSS filename to match the component
import img from '../../assets/Hand.png';


const Hotest = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://via.placeholder.com/300x200?text=Slide+1",
    "https://via.placeholder.com/300x200?text=Slide+2",
    "https://via.placeholder.com/300x200?text=Slide+3",
  ];

  const nextSlide = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="hotest-container">
      {/* First Card with Slider */}
      <div className="hotest-card">
        <h3>Check out the <br />hottest sale offer</h3>
        <div className="hotest-slider">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="hotest-image"
          />
          <button className="slider-button left" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="slider-button right" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
        <div className="hotest-content">
          <p>This is the first card, featuring an image slider.</p>
        </div>
        <button className="hotest-button">Click Me</button>
      </div>

      {/* Second Card with Image */}
      <div className="hotest-card">
        <img
          src={img} style={{height: 400, width:300,  position:"relative",}}
          alt="Second Card"
          className="hotest-image"
        />
        <div className="hotest-content">
          <h5>Card Title 2</h5>
          <p>This card is focused on displaying an image.</p>
        </div>
        <button className="hotest-button">Learn More</button>
      </div>

      {/* Third Card */}
      <div className="hotest-card">
        <div className="hotest-content">
          <h5>Card Title 3</h5>
          <p>This is the third card with text content.</p>
        </div>
        <button className="hotest-button">Explore</button>
      </div>
    </div>


  );
};

export default Hotest;

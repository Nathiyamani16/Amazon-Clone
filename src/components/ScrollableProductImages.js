import React, { useState, useRef } from 'react';
import '../css/scrollableProduct.css'; 
import image1 from '../img/pic1.jpg';
import image2 from '../img/pic2.jpg';
import image3 from '../img/pic2.jpg';
import image4 from '../img/pic2.jpg';
import image5 from '../img/pic2.jpg';
import image6 from '../img/pic2.jpg';
import image7 from '../img/pic3.jpg';
import image8 from '../img/pic4.jpg';
// ... continue until image20

const images = [image1, image2, image3, image4 ,image5,image6,image7,image8];

const ScrollableProductImages = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainer = useRef(null);

  const handleScroll = (scrollValue) => {
    if (scrollContainer.current) {
      const containerWidth = scrollContainer.current.offsetWidth;
      const scrollWidth = scrollContainer.current.scrollWidth;
      const newScrollLeft = scrollLeft + scrollValue;

      if (newScrollLeft >= 0 && newScrollLeft <= scrollWidth - containerWidth) {
        scrollContainer.current.scrollLeft = newScrollLeft;
        setScrollLeft(newScrollLeft);
      }
    }
  };
  return (
    <div className="scrollable-card">
      <span className="left-icon" onClick={() => handleScroll(-200)}>
        {/* Your left icon element here */}
        <i className="fas fa-chevron-left"></i> {/* Font Awesome left icon */}
      </span>
      <div className="image-container">
        <div className="image-scroll" ref={scrollContainer}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="product-image"
            />
          ))}
        </div>
      </div>
      <span className="right-icon" onClick={() => handleScroll(200)}>
        {/* Your right icon element here */}
        <i className="fas fa-chevron-right"></i> {/* Font Awesome right icon */}
      </span>
    </div>
  );
};

export default ScrollableProductImages;

import React from 'react';
import '../css/scrollableProduct.css'; 
import image1 from '../img/pic1.jpg';
import image2 from '../img/pic2.jpg';
// ... add images 3 to 20
import image3 from '../img/pic3.jpg';
import image4 from '../img/pic4.jpg';
// ... continue until image20

const images = [image1, image2, image3, image4 /* ... and so on up to image20 */];

const ScrollableProductImages = ({ images }) => {
  return (
    <div className="scrollable-card">
      <div className="image-container">
        <div className="image-scroll">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} className="product-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableProductImages;

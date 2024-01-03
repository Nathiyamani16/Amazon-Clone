// import React, { useRef } from 'react';
// import './banner.scss'; // Make sure this SCSS file is correctly linked

// // Import your images here
// import image1 from "../img/1.jpg";
// import image2 from "../img/2.jpg";
// import image3 from "../img/3.jpg";
// import image4 from "../img/4.jpg";

// const Banner = () => {
//   const bannerRef = useRef(null);

//   const scrollLeft = () => {
//     if (bannerRef.current) {
//       bannerRef.current.scroll({
//         left: bannerRef.current.scrollLeft - bannerRef.current.offsetWidth,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (bannerRef.current) {
//       bannerRef.current.scroll({
//         left: bannerRef.current.scrollLeft + bannerRef.current.offsetWidth,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return(
//     <div className='banner'>
//       <div className="banner-images" ref={bannerRef}>
//         {/* Replace the img src with your imported image variables */}
//         <img src={image1} className="img1" alt="Image1" />
//         <img src={image2} className="img2" alt="Image2" />
//         <img src={image3} className="img3" alt="Image3" />
//          <img src={image4} className="img4" alt="Image4" />
//         {/* <img src="../img/1.jpg" className="img1" alt="Image1" />
//         <img src="../img/2.jpg" className="img2" alt="Image2" />
//         <img src="../img/3.jpg" className="img3" alt="Image3" />
//         <img src="../img/4.jpg" className="img4" alt="Image4" /> */}
//       </div>
//       <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
//       <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
//     </div>
//   );
// };

// export default Banner;
import React, { useRef, useState } from 'react';
import './banner.css'; // Make sure this CSS file is correctly linked
import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
import image4 from "../img/4.jpg";

const Banner = () => {
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const imageWidth = 100; // Assuming each image has a width of 100px

  const scrollLeft = () => {
    setCurrentImage((prevImage) => (prevImage > 0 ? prevImage - 1 : 0));
  };

  const scrollRight = () => {
    setCurrentImage((prevImage) => (prevImage < 3 ? prevImage + 1 : 3));
  };

  const transformValue = `translateX(${-currentImage * imageWidth}%)`;

  return (
    <div className='banner'>
      <div className="sample-container" ref={containerRef} style={{ transform: transformValue }}>
        <img src={image1} alt="Image1" />
        <img src={image2} alt="Image2" />
        <img src={image3} alt="Image3" />
        <img src={image4} alt="Image4" />
      </div>
      <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
      <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
    </div>
  );
};

export default Banner;




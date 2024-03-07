import React, { useState, useEffect } from 'react';
import Snipt1 from '../../assets/ff.jpg';
import Snipt2 from '../../assets/ss.jpg';
import './Slider.css'; // Create Slider.css for styling

function Slider() {
  const [currentImage, setCurrentImage] = useState(1);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
  };

  // Function to rotate images automatically
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="slider-container">
      <img
        className={`image2 ${currentImage === 1 ? 'active' : ''}`}
        src={Snipt1}
        alt="Project Preview"
      />
      <img
        className={`image2 ${currentImage === 2 ? 'active' : ''}`}
        src={Snipt2}
        alt="Project Preview"
      />
    </div>
  );
}

export default Slider;

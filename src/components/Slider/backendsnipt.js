import React, { useState, useEffect } from 'react';
import './backendsnipt.css'; // Adjust the import path for your CSS file
import Snipt1 from '../../assets/ff.jpg';
import Snipt2 from '../../assets/ss.jpg';
import Snipt3 from '../../assets/found.jpg';
import Snipt4 from '../../assets/sq.jpg';


function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    Snipt1,
    Snipt2,
    Snipt3,
    Snipt4,
    // Add more images here if needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="slider-container">
      <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <img
              src={slide}
              className="d-block w-100 set-image"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrev}>&#10094;</button>
      <button className="next-btn" onClick={handleNext}>&#10095;</button>
    </div>
  );
}

export default Slider;

// export default backendsnipt;
 

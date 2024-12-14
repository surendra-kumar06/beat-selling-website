import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'

const carouselItems = [
    { id: 1, img: slide1, title: 'Fresh Beats 1' },
    { id: 2, img: slide2, title: 'Fresh Beats 2' },
    { id: 3, img: slide3, title: 'Fresh Beats 3' },
  ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex<carouselItems.length-1 ? prevIndex + 1 : 0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex>0 ? prevIndex - 1 : carouselItems.length-1);
  };

  useEffect(() => {
    let timer = setInterval(() => {
      nextSlide()
    }, 3000);
    return () => {
      clearInterval(timer)
    }
  }, [])
  
  
  
  return (
    <div className="relative h-56 rounded-md overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={item.img}
            alt={item.title}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/10 backdrop-blur-lg text-white p-2 rounded-full"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/10 backdrop-blur-lg text-white p-2 rounded-full"
      >
        <IoIosArrowForward />
      </button>

      {/* Optional: Dots for navigation */}
      <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-cream'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import React, {useState, useEffect} from "react";
import { SliderData } from "./SliderData";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import './imageSlider.css'

const ImageSlider = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = slides.length

    const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);


    return(
        <div className="slider">
        {SliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
              </div>
            )}
          </div>
        );
      })}
        </div>
    )
}

export default ImageSlider;
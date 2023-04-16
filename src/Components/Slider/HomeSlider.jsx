import { faAngleLeft, faAngleRight, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const slides = [
  { id: 1, image: "../Images/Hero_1.jpg", alt: "Slide 1" },
  { id: 2, image: "../Images/Hero_2.jpg", alt: "Slide 2" },
  { id: 3, image: "../Images/Hero_4.jpg", alt: "Slide 3" },
];

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full">
        <div className="relative flex transition-all duration-100 ease-in-out ">
          {slides.map((slide, index) => (
            <div key={slide.id}
              className={`w-1200 h-500 flex-shrink-0 transition-transform duration-500 ease-in-out relative border-2 border-red-500 ${
                index === currentSlide ? "translate-x-0" : "translate-x-full" }`}>
              <img src={slide.image} alt={slide.alt} className="object-cover w-full h-full" />
              <button className=" text-white text-lg font-medium absolute inset-y-1/2 transform -translate-y-1/2 -translate-x-1/2 left-1/2 px-10 py-6 rounded-full border-2 border-white items-center flex hover:scale-105 hover:border-4">
                Shop Now
              </button>
              
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <div className="flex">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 bg-gray-500 rounded-full mx-2 focus:outline-none ${
                  index === currentSlide ? "bg-gray-100" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
      <button className=" text-white text-4xl font-medium px-6 py-2 rounded-full" onClick={prevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} className='fill-white' > </FontAwesomeIcon>
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button className=" text-white text-4xl font-medium px-6 py-2 rounded-full" onClick={nextSlide}>
        <FontAwesomeIcon icon={faAngleRight} className='fill-white' > </FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default HomeSlider;

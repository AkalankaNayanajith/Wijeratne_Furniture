import React,{useState} from 'react'
//still not working //not showing the carousel even after routed

const featuredProducts = [ 
"../Images/Hero_1.jpg","../Images/Hero_2.jpg", "../Images/Hero_3.jpg","../Images/Hero_4.jpg"];

let count = 0;
   
export default function Slider() {
const [currentIndex, setCurrentIndex] =
useState(0);

  const handleOnNextClick = () => {
count=(count + 1 ) % featuredProducts.length;
setCurrentIndex(count);
};

const handleOnPrevClick =() => {
  const productsLength = featuredProducts.length;
  count = (currentIndex + productsLength - 1 ) % productsLength;
  setCurrentIndex(count);
 };

  return (
    <>
      <div className="w-full select-none relative">
        <div className="aspect-w-16 aspect-h-9">
          <img src={featuredProducts[0]} alt="" />
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button onClick={handleOnPrevClick}> Prev</button>
          <button onClick={handleOnNextClick}> Next</button>
        </div>
      </div>
    </>
  );
}

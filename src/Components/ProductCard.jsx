import React from "react";
import Ratings from "./Ratings";

function ProductCard({  review,  newprodname, prodid ,category, description, quantity, dicount, price, color, material, country, imgpath,onClickHandler }) {
  return (
    <div className="m-8" onClick={onClickHandler}>
      <div className="max-w-xs  bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl ease-in-out hover:scale-105 duration-300" >
        
          <img
            className="w-full h-72 p-8 rounded-t-lg"
            // src="../Images/prod5.png"
            key={prodid}
            src={imgpath}
            alt="prod"
          />
        
        <div className="px-5 pb-5">
          
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {newprodname}
            </h5>
            <Ratings review = {review} />
            <p className="text-red-500 font-semibold text-xl"> Rs {price} </p>
           

          <div className="flex justify-between items-center mt-3">
            <button type="button"
              className="text-white w-full bg-black hover:bg-[#1c1d1d] focus:ring-4 focus:outline-none focus:ring-[#2a2c2c]  font-medium rounded-lg text-sm px-[5rem] py-2.5 text-center dark:bg-[#1c1d1d]  dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
            SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

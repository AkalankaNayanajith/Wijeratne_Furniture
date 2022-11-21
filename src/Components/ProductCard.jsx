import React from "react";
import Ratings from "./Ratings";

function ProductCard({ name, price, review, prodImage }) {
  return (
    <div className="m-8">
      <div className="max-w-xs bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
        <a href="singleproduct">  
          <img
            className="w-full h-72 p-8 rounded-t-lg"
            src="../Images/prod5.png"
            //   src={prodImage}
            alt="prod"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="singleproduct"> 
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <Ratings />
            <p className="text-red-500 font-semibold text-xl"> Rs {price} </p>
            <p>{review} </p>
          </a>

          <div className="flex justify-between items-center mt-3">
            <a
              href="singleproduct"           //product page path link
              className="text-white w-full bg-black hover:bg-[#1c1d1d] focus:ring-4 focus:outline-none focus:ring-[#2a2c2c]  font-medium rounded-lg text-sm px-[5rem] py-2.5 text-center dark:bg-[#1c1d1d]  dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
            SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

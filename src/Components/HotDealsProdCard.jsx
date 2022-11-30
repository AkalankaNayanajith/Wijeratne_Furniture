import React from "react";

function HotDealsProdCard({
  ProductName,
  ImageSRC,
  NormalPrice,
  DiscountedPrice, 
}) {
  return (
    <>
      <div className="mx-5 mt-5">
       
          <div className=" OneComponent max-w-2xl h-[460px] bg-white border-4 border-red-600 rounded-3xl mt-12 shadow-lg hover:shadow-2xl ease-in-out hover:scale-105 duration-300">
            <div className="Productname w-[75%] m-auto text-blue-600 text-center font-poppins tracking-wide font-medium text-2xl mt-10">
              {ProductName}
            </div>

            <div className="w-[100%] h-[50%] flex">
              <div className="w-[50%] h-[50%] ml-7 bg-cover">
                <img src={ImageSRC} alt="" />
              </div>

              <div className="text-black font-poppins tracking-wide font-medium text-[1.1rem] w-[45%] my-16 pr-11 text-right items-center ">
                Hurry Up Offer Ends in
              </div>
            </div>

            <div className="prices w-[100%] h-[25%] pl-7 pt-14 flex ">
              <div className="MarketPrice ml-6 mt-4 font-poppins text-lg tracking-wide font-medium text-black line-through">
               Rs {NormalPrice}
              </div>
              <div className="dicountedPrice mt-4 text-xl ml-24 text-red-500 font-poppins tracking-wide font-semibold">
               Rs {DiscountedPrice}
              </div>


              <div className=" mt-0 ml-[8rem] w-[25%] h-full">
              <button className="button w-full h-[50px] border-2 text-white text-xl border-[#ff0000] bg-gradient-to-b from-red-400 to-[#ff0000]  rounded-full  drop-shadow-lg shadow-black transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                Buy Now
              </button>
              </div>
            </div>
          </div>
   
      </div>
    </>
  );
}

export default HotDealsProdCard;

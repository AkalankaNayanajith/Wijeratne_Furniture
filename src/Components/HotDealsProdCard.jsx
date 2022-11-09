import React from "react";

function HotDealsProdCard(
  { ProductName },
  { ImageSRC },
  { NormalPrice },
  { DiscountedPrice }
) {
  return (
    <>
      <div className="WholeArea w-[100%] h-[800px]  bg-[#1A181B]">
        <div className="text-white text-4xl font-poppins font-medium text-center mt-20">
          Today's Deals
        </div>

        <div className=" twoDealSections  w-[100%] h-[600px] flex justify-between">
          <div className=" OneComponent w-[43%] h-[500px] bg-white border-4 border-red-600 rounded-3xl mt-16  m-auto drop-shadow-xl">
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

            <div className="prices w-[100%] h-[15%] ml-7 mt-7 flex ">
              <div className="MarketPrice ml-6 mt-4 font-poppins text-lg tracking-wide font-medium text-black line-through">
                {NormalPrice}
              </div>
              <div className="dicountedPrice mt-4 text-lg ml-24 text-red-500 font-poppins tracking-wide font-semibold">
                {DiscountedPrice}
              </div>

              <button className="button border-2 text-white text-lg border-[#ff0000] bg-gradient-to-b from-red-400 to-[#ff0000]  rounded-full w-[25%] h-[50px] mt-0 ml-[5rem] drop-shadow-lg shadow-black transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                {" "}
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

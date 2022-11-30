import React from "react";
import HotDealsProdCard from "./HotDealsProdCard";

export default function HotDeals({ ProductName }) {
  // ,{ImageSRC}, {NormalPrice}, {DiscountedPrice}
  return (
    <>
      <div className="WholeArea w-[100%] h-[100%] bg-white">
        <div className="flex justify-center items-center mt-20">
          <img src="../Images/deals.svg" alt="" />
        </div>

        <div className=" ComponentSection  w-[100%] h-full flex flex-wrap  justify-center">
          <HotDealsProdCard
            ProductName={"bed sofa bed"}
            ImageSRC={"../Images/Hotdealschairs.jpg"}
            NormalPrice={"87788"}
            DiscountedPrice={"54364"}
          />
          <HotDealsProdCard
            ProductName={"bed sofa bed"}
            ImageSRC={"../Images/prod5.png"}
            NormalPrice={"1117788"}
            DiscountedPrice={"4444"}
          /> 
          <HotDealsProdCard
            ProductName={"bed sofa bed"}
            ImageSRC={"../Images/prod4.jpg"}
            NormalPrice={"117788"}
            DiscountedPrice={"13564"}
          />
          <HotDealsProdCard
            ProductName={"bed sofa bed"}
            ImageSRC={"../Images/5.png"}
            NormalPrice={"74788"}
            DiscountedPrice={"4444"}
          />

          <HotDealsProdCard
            ProductName={"bed sofa bed"}
            ImageSRC={"../Images/prod5.png"}
            NormalPrice={"1117788"}
            DiscountedPrice={"4444"}
          />
        </div>

        <div className="pagination w-full h-52"></div>
      </div>
    </>
  );
}

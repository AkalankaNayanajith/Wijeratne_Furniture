import React from "react";
import Ratings from "./Ratings";

const OneProductView = () => {
  return (
    <>
      <div className="Imagessection">



      </div>

      <div className="information h-full w-[50%]">
        <div className="text-black text-left  text-4xl font-poppins font-semibold  mt-20">
          Zoltro Gaming Chair
        </div>

        <div className="ratings flex text-left mt-2 ">
        <Ratings/>

<p className="font-Manrope font-semibold text-[#2F2D3A] items-center ml-5 mt-[0.1rem]">(15 Reviews)</p>
        </div>
      </div>
    </>
  );
};

export default OneProductView;

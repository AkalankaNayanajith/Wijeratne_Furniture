import React from "react";
import SortListDropdown from "./SortListDropdown";

export default function Products() {
  return (
    <div className="h-full w-full ">
      <div className="text-5xl text-center font-normal w-full mt-[3rem] font-Pragati-Narrow tracking-widest">
        {" "}
        PRODUCTS
      </div>

      <div className="h-0.5 mt-[2rem]  w-[100%]  mx-auto bg-[#DFDFDF]"> </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-Pragati-Narrow tracking-normal font-[550] pl-8">
          {" "}
          PRODUCT FILTERS{" "}
        </h3>
        <div className="text-right items-left">
          <SortListDropdown />
        </div>
      </div>
      <div className="h-0.5  w-[100%]  mx-auto bg-[#DFDFDF]"> </div>

      {/* <div className='h-0.5  w-full bg-[#dfdfdf]'>
      <div className='w-[100%] h-full mx-auto bg-[#DFDFDF]'> </div> 
    </div> */}

      <div className="h-16  w-full "></div>
    </div>
  );
}

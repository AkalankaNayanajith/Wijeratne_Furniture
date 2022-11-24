import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckBox } from '@mui/icons-material';
import React from "react";
import CheckBoxLarge from './CheckBoxLarge';
import CheckBoxTick from './CheckBoxTick';
import ProductCard from './ProductCard';
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
<div className='flex '>
      <div className="h-full w-[25%] border-r-[3px] border-[#DFDFDF] ">

        <div className="flex">
        <p className="pt-14 pl-8 text-xl font-semibold ">Room <FontAwesomeIcon icon={faAngleDown} className='pl-44 fill-white items-center text-base px-1  group-hover:rotate-180 ' ></FontAwesomeIcon> </p>
        </div>

      
      <div className="RoomFilters pl-8 pt-4 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Living Room</p>
     </div>
     
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>BedRoom</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Dining Room</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Kitchen</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>BathRoom</p>
      </div>



      <div className="flex">
        <p className="pt-8 pl-8 text-xl font-semibold">Material <FontAwesomeIcon icon={faAngleDown} className='pl-[10rem] fill-white items-center text-base px-1 group-hover:rotate-180' ></FontAwesomeIcon> </p>
        </div>

      
      <div className="RoomFilters pl-8 pt-4 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Wood</p>
     </div>
     
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Marble</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Leather</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Fabric</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Polyester</p>
      </div>

      <div className="flex">
        <p className="pt-8 pl-8 text-xl font-semibold">Wood Type <FontAwesomeIcon icon={faAngleDown} className='pl-32 fill-white items-center text-base px-1 group-hover:rotate-180' ></FontAwesomeIcon> </p>
        </div>

      
      <div className="RoomFilters pl-8 pt-4 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Teak</p>
     </div>
     
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Nadun</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Burutha</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Mahogany</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Kohomba</p>
      </div>

      <div className="flex">
        <p className="pt-8 pl-8 text-xl font-semibold">Price <FontAwesomeIcon icon={faAngleDown} className='pl-[11rem] fill-white items-center text-base px-1 group-hover:rotate-180' ></FontAwesomeIcon> </p>
        </div>

        <div className="RoomFilters pl-8 pt-4 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Under Rs 25,000</p>
     </div>
     
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Rs 25,000 to Rs 50,000</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Rs 50,000 to Rs 100,000</p>
     </div>
      <div className="RoomFilters pl-8 pt-1 flex ">
     <CheckBoxLarge/>
     <p className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Over Rs 100,000</p>
     </div>
     </div>




     <div className='productDisplay container flex'>

        <ProductCard
        name="

Mahogani Dining Table with 6 chairs"
        price="77,500"
        prodImage="../Images/prod5.png"
        review=""
      /> 
      
      
      <ProductCard
      name="

      Teak Double Bed"
      price="197,500"
      prodImage="../Images/prod4.jpg"
      review=""
    />
    <ProductCard
        name="

       SIngle Sofa Blue Fabric"
        price="17,500"
        prodImage="../Images/prod3.png"
        review=""
      />

    
     

     </div>
      </div>
    </div>
  );
}

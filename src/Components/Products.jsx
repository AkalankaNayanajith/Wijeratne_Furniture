import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckBox } from '@mui/icons-material';
import React from "react";
import CheckBoxLarge from './CheckBoxLarge';
import CheckBoxTick from './CheckBoxTick';
import ProductCard from './ProductCard';
import SortListDropdown from "./SortListDropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import Ratings from "./Ratings";
import { useState, useEffect } from "react";

export default function Products({review,newprodname,prodid, category,description, quantity,dicount,price,color,material,country,imgpath,}) {
  const [productcardss, setProductcardss] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product/getAll")
      .then((response) => response.json())
      .then((result) => {
        setProductcardss(result);
      });
  }, []);

function OneViewData (newprodname,price,imgpath,prodid,review,description ){
    localStorage.setItem('Name', newprodname);
    localStorage.setItem('Price', price);
    localStorage.setItem('Image', imgpath);
    localStorage.setItem('ID', prodid);
    localStorage.setItem('Review', review);
    localStorage.setItem('Description', description);  
}

  return (
    <div className="h-full w-full ">
      <div className="text-5xl text-center font-normal w-full mt-[3rem] font-Pragati-Narrow tracking-widest">
     
        PRODUCTS
      </div>

      <div className="h-0.5 mt-[2rem]  w-[100%]  mx-auto bg-[#DFDFDF]"> </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-Pragati-Narrow tracking-normal font-[550] pl-8">
        
          PRODUCT FILTERS
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
      <div className="h-full w-[25%]  ">

        <div className="flex">
        <p className="pt-14 pl-8 text-xl font-semibold ">Room <FontAwesomeIcon icon={faAngleDown} className='pl-44 fill-white items-center text-base px-1  group-hover:rotate-180 ' ></FontAwesomeIcon> </p>
        </div>

      
      <label className="RoomFilters pl-8 pt-4 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Living Room</span>
     </label>
     
      <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>BedRoom</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Dining Room</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Kitchen</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>BathRoom</span>
     </label>

    


      <div className="flex">
        <p className="pt-8 pl-8 text-xl font-semibold">Material <FontAwesomeIcon icon={faAngleDown} className='pl-[10rem] fill-white items-center text-base px-1 group-hover:rotate-180' ></FontAwesomeIcon> </p>
      </div>

      
      <label className="RoomFilters pl-8 pt-4 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Wood</span>
     </label>
     
      <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Marble</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Leather</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Fabric</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Polyester</span>
     </label>
     
     

      <div className="flex">
        <p className="pt-8 pl-8 text-xl font-semibold">Wood Type <FontAwesomeIcon icon={faAngleDown} className='pl-32 fill-white items-center text-base px-1 group-hover:rotate-180' ></FontAwesomeIcon> </p>
        </div>

      
      <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Teak</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Nadun</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Burutha</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Mahogany</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Kohomba</span>
     </label>
    

      <div className="flex">
        <p className="pt-8 pl-8 text-xl font-semibold">Price <FontAwesomeIcon icon={faAngleDown} className='pl-[11rem] fill-white items-center text-base px-1 group-hover:rotate-180' ></FontAwesomeIcon> </p>
        </div>

        <label className="RoomFilters pl-8 pt-4 flex cursor-pointer">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Under Rs 25,000</span>
     </label>
     
      <label className="RoomFilters pl-8 pt-1 flex cursor-pointer ">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Rs 25,000 to Rs 50,000</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer ">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Rs 50,000 to Rs 100,000</span>
     </label>
     <label className="RoomFilters pl-8 pt-1 flex cursor-pointer ">
     <CheckBoxLarge/>
     <span className='font-Manrope text-base tracking-wide pl-4  text-[#2F2D3A]'>Over Rs 100,000</span>
     </label>
     </div>


 

     <div className='productDisplay container flex border-l-[3px] border-[#DFDFDF]'>
     <div className=" container flex flex-wrap">
        {
          productcardss.map((product) => {
            return <ProductCard
                      newprodname={product.newprodname}
                      price={product.price}
                      imgpath={product.imgpath}
                      key={product.prodid}
                      review={review}
                      onClickHandle={() => {OneViewData(product.newprodname,product.price,product.imgpath,product.prodid,review,product.description)}}
                    />
          })
        }
      </div>
     </div>


      </div>
    </div>
  );
}

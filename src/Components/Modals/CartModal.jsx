import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CheckBoxLarge from "../CheckBoxLarge";
import "./CartModal.css";

const CartModal = ({ open, closeCartHandler }) => {
  // const  [selectedCount, setSelectedCount] = useState(0);
  // if (open === false) return null;

  return (
    <>

    {/* background blur and dark */}
    <div className={`w-full h-auto right-0 left-0 top-0 bottom-0 fixed bg-zinc-500 bg-opacity-40 backdrop-blur-sm overflow-auto z-30 ease-linear transition-all duration-100 ${open ? "block" : "hidden"}`}>     
    </div>
 
 {/* cart window */}
 <div className={`right-0 top-0 fixed w-[28rem] h-screen overflow-hidden z-50 backdrop-blur-md items-center justify-center rounded-l-lg drop-shadow-lg  bg-white cart-modal block ${open ? "open" : "close"}`}>
 <div className="flex">
   <div className="w-full flex justify-center">
     <h1 className="text-3xl font-semibold text-black font-Pragati-Narrow mt-[0.5rem] ">
       My Cart
     </h1>
   </div>
   <button
     className=" px-[0.5rem] py-[0.125rem] left-[26.3rem] top-7 transform -translate-x-1/2 -translate-y-1/2 b fixed   border-2 text-white rounded-lg  text-sm font-medium border-red-500 bg-red-500  ext-white hover:border-red-700 hover:bg-red-700 "
     onClick={closeCartHandler}>
     <FontAwesomeIcon icon={faXmark} className="fill-white">
     </FontAwesomeIcon>
   </button>
   
 </div>
   

 <div className="h-0.5  w-full bg-white mt-3">
        <div className="w-[95%] h-full mx-auto bg-black"> </div>
 </div>

 {/* cart item area div  */}
 <div className="w-full h-[31rem] pr-3 bg-white mt-5 mb-2 overflow-y-auto ">

    {/* one cart item component */}   
     <div className="ml-6 mt-4 mb-3 bg-blue-300 bg-opacity-30 w-[25.25rem] h-36 rounded-lg relative">
        <div className="ml-6 absolute mt-4 h-28 w-28 rounded-lg  bg-white flex justify-between items-center">
          <img className="h-[90%] w-[90%] m-auto "src='../Images/prod8.jpg'alt=""/> 
        </div>              
        <div className="ml-[9.5rem] w-[16rem] h-28 absolute">
            <p className="text-[#34383b] font-sans text-base mt-4">Single Leather Sofa   </p>
            <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">  {/* {selectedcolor}  {selectedmaterial} */} Size;xL meroon Fabric </p>
            <p className="text-[#34383b] font-sans font-semibold text-base mt-8">  Rs 78,500 </p>          
        </div>              
      

       <button className=" px-[0.45rem] py-[0.125rem] absolute -top-2 -right-2 text-white rounded-full  text-sm font-medium border-slate-500 bg-slate-500 bg-opacity-50 hover:bg-slate-700">
         <FontAwesomeIcon icon={faXmark} className="fill-white">
         </FontAwesomeIcon>
       </button>
     </div>
 

 {/* 2nd cart item  */}
     <div className="ml-6 mt-4 mb-3 bg-blue-300 bg-opacity-30  w-[25.25rem] h-36 rounded-lg relative">
     <div className="ml-6 absolute mt-4 h-28 w-28 rounded-lg  bg-white flex justify-between items-center">
          <img className="h-[90%] w-[90%] m-auto "src='../Images/prod7.jpg'alt=""/> 
        </div>              
        <div className="ml-[9.5rem] w-[16rem] h-28 absolute">
            <p className="text-[#34383b] font-sans text-base mt-4">Single Leather Sofa   </p>
            <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">  {/* {selectedcolor}  {selectedmaterial} */} Size;xL meroon Fabric </p>
            <p className="text-[#34383b] font-sans font-semibold text-base mt-8">  Rs 56,500 </p>          
        </div>  

       <button className=" px-[0.45rem] py-[0.125rem] absolute -top-2 -right-2 text-white rounded-full  text-sm font-medium border-slate-500 bg-slate-500 bg-opacity-50 hover:bg-slate-700">
         <FontAwesomeIcon icon={faXmark} className="fill-white">
         </FontAwesomeIcon>
       </button>
   </div>


   
   {/* 3rd cart item  */}  
   <div className="ml-6 mt-4 mb-3 bg-blue-300 bg-opacity-30  w-[25.25rem] h-36 rounded-lg relative">
   <div className="ml-6 absolute mt-4 h-28 w-28 rounded-lg  bg-white flex justify-between items-center">
          <img className="h-[90%] w-[90%] m-auto "src='../Images/prod5.png'alt=""/> 
        </div>              
        <div className="ml-[9.5rem] w-[16rem] h-28 absolute">
            <p className="text-[#34383b] font-sans text-base mt-4">Dining Table   </p>
            <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">  {/* {selectedcolor}  {selectedmaterial} */} Size;xL meroon Fabric </p>
            <p className="text-[#34383b] font-sans font-semibold text-base mt-8">  Rs 198,999 </p>          
        </div>  

       <button className=" px-[0.45rem] py-[0.125rem] absolute -top-2 -right-2 text-white rounded-full  text-sm font-medium border-slate-500 bg-slate-500 bg-opacity-50 hover:bg-slate-700">
         <FontAwesomeIcon icon={faXmark} className="fill-white">
         </FontAwesomeIcon>
       </button>
   </div>
 </div>

 <div className="w-full flex justify-center">
     <p className="text-lg font-semibold text-black font-sans mt-1 mb-2 ">
       Total Rs:471500 
     </p>
   </div>

 
 
 {/* Checkout button  */}
 <div className="w-full flex justify-center">
   <button className="mt-3 border-2 border-black  bg-black text-white rounded-none  px-28 py-[1rem] font-sans font-normal text-lg hover:border-green-700 hover:bg-green-700">
     PROCEED TO CHECKOUT
   </button>
 </div>

 </div>
    </>
  );
};

export default CartModal;

import { faBagShopping, faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CheckBoxLarge from "../CheckBoxLarge";
import "./FavouritesModal.css";

const FavouritesModal = ({ openFav, closeFavHandler }) => {
  // const  [selectedCount, setSelectedCount] = useState(0);
  // if (open === false) return null;

  return (
    <>

    {/* background blur and dark */}
    <div className={`w-full h-auto right-0 left-0 top-0 bottom-0 fixed bg-zinc-500 bg-opacity-40 backdrop-blur-sm overflow-auto z-30 ease-linear transition-all duration-100 ${openFav ? "block" : "hidden"}`}>     
    </div>
 
 {/* cart window */}
 <div className={`right-0 top-0 fixed w-[28rem] h-screen overflow-hidden z-50 backdrop-blur-md items-center justify-center rounded-l-lg drop-shadow-lg  bg-white fav-modal block ${openFav ? "open" : "close"}`}>
 <div className="flex">
   <div className="w-full flex justify-center">
    <img src="../Images/Favorite.png" alt="" className="w-6 h-6 mt-3 mr-2" />
     <h1 className="text-3xl font-semibold text-black font-Pragati-Narrow mt-[0.5rem] ">
       Wishlist
     </h1>
   </div>
   <button
     className=" px-[0.5rem] py-[0.125rem] left-[26.3rem] top-7 transform -translate-x-1/2 -translate-y-1/2 b fixed   border-2 text-white rounded-lg  text-sm font-medium border-red-500 bg-red-500  ext-white hover:border-red-700 hover:bg-red-700 "
     onClick={closeFavHandler}>
     <FontAwesomeIcon icon={faXmark} className="fill-white">
     </FontAwesomeIcon>
   </button>
   
 </div>
   

 <div className="h-0.5  w-full bg-white mt-3">
        <div className="w-[95%] h-full mx-auto bg-black"> </div>
 </div>

 {/* fav item area div  */}
 <div className="w-full h-[38.5rem] pr-3 bg-white mt-5 mb-2 overflow-y-auto ">

  

    {/* one fav item component */}   
     <div className="ml-6 mt-4 mb-3 bg-green-300 bg-opacity-30 w-[25rem] h-28 rounded-lg relative">
        <div className="ml-4 absolute mt-2 h-24 w-24 rounded-lg  bg-white flex justify-between items-center">
          <img className="h-[90%] w-[90%] m-auto "src='../Images/prod8.jpg'alt=""/> 
        </div>              
        <div className="ml-[8.5rem] w-[16rem] h-28 absolute">
            <p className="text-[#34383b] font-sans text-base mt-2">Single Leather Sofa   </p>
            <p className="text-[#34383b] font-sans font-semibold text-base mt-2">  Rs 78,500 </p>          
        </div>  
  
       <button className=" px-[0.45rem] py-[0.125rem] absolute -top-2 -right-2 text-white rounded-full text-sm font-medium border-slate-500 bg-slate-500 bg-opacity-50 hover:bg-slate-700">
         <FontAwesomeIcon icon={faXmark} className="fill-white" >
         </FontAwesomeIcon>
       </button>

       <button className="mt-16 ml-[17rem] absolute border-2 border-black  bg-black text-white rounded-none  px-4 py-[0.5rem] font-sans font-normal text-xs hover:bg-green-600 hover:border-green-600"> ADD TO CART   
       </button>


     </div>
 

 {/* 2nd fav item  */}
 <div className="ml-6 mt-4 mb-3 bg-green-300 bg-opacity-30 w-[25rem] h-28 rounded-lg relative">
        <div className="ml-4 absolute mt-2 h-24 w-24 rounded-lg  bg-white flex justify-between items-center">
          <img className="h-[90%] w-[90%] m-auto "src='../Images/prod7.jpg'alt=""/> 
        </div>              
        <div className="ml-[8.5rem] w-[16rem] h-28 absolute">
            <p className="text-[#34383b] font-sans text-base mt-2">Single Leather Sofa   </p>
            <p className="text-[#34383b] font-sans font-semibold text-base mt-2">  Rs 78,500 </p>          
        </div>  
  
       <button className=" px-[0.45rem] py-[0.125rem] absolute -top-2 -right-2 text-white rounded-full text-sm font-medium border-slate-500 bg-slate-500 bg-opacity-50 hover:bg-slate-700">
         <FontAwesomeIcon icon={faXmark} className="fill-white" >
         </FontAwesomeIcon>
       </button>

       <button className="mt-16 ml-[17rem] absolute border-2 border-black  bg-black text-white rounded-none  px-4 py-[0.5rem] font-sans font-normal text-xs hover:bg-green-600 hover:border-green-600"> ADD TO CART   
       </button>
  </div>

    

   
   {/* 3rd fav item  */}  
   <div className="ml-6 mt-4 mb-3 bg-green-300 bg-opacity-30 w-[25rem] h-28 rounded-lg relative">
        <div className="ml-4 absolute mt-2 h-24 w-24 rounded-lg  bg-white flex justify-between items-center">
          <img className="h-[90%] w-[90%] m-auto "src='../Images/prod5.png'alt=""/> 
        </div>              
        <div className="ml-[8.5rem] w-[16rem] h-28 absolute">
            <p className="text-[#34383b] font-sans text-base mt-2">Single Leather Sofa   </p>
            <p className="text-[#34383b] font-sans font-semibold text-base mt-2">  Rs 78,500 </p>          
        </div>
  
       <button className=" px-[0.45rem] py-[0.125rem] absolute -top-2 -right-2 text-white rounded-full text-sm font-medium border-slate-500 bg-slate-500 bg-opacity-50 hover:bg-slate-700">
         <FontAwesomeIcon icon={faXmark} className="fill-white" >
         </FontAwesomeIcon>
       </button>

       <button className="mt-16 ml-[17rem] absolute border-2 border-black  bg-black text-white rounded-none  px-4 py-[0.5rem] font-sans font-normal text-xs hover:bg-green-600 hover:border-green-600"> ADD TO CART   
       </button>
     </div>
 </div>

</div>
    </>
  );
};

export default FavouritesModal;

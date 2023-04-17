import React, { useEffect, useState } from "react";
import product_card from "./ProductCardHomePage";
 
const MainContent = () => {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product/getAll")
      .then((response) => response.json())
      .then((result) => {
        setProductData(result);
      });

  },[]);
  
  const listItems = productData.map((product) => (
    <div
      className="card border-solid w-full cursor-pointer group flex-col relative transition h-[60vh] rounded-xl ease-in-out hover:scale-105 duration-300 mb-8  hover:bg-slate-700"
      key={product.id}
    >
      <div className="flex-1 relative h-1/2">
        <div className="absolute left-1/2 transform transition duration-500 -translate-x-1/2 w-full h-full flex items-center justify-center group-hover:scale-125 group-hover:-translate-y-9">
          <img className="w-4/5 h-auto" src={product.image64} />
        </div>
      </div>

      <div className="card_header m-4 flex-1 h-1/2 flex flex-col space-y-3 items-center">
        <h2 className="text-white text-3xl"> {product.newprodname} </h2>
        <p className="text-white text-[14px]"> {truncate(product.description, {length: 10, omission: "..."})} </p>
        <p className="price text-[#fe8033] text-[25px] inline-block align-bottom relative">
          <span className="absolute -left-4 bottom-[0.37rem] text-xs">
            Rs.
          </span>
          {product.price}
        </p>
        <div className="btn text-white">
          <button className="w-[175px] h-[35px] bg-slate-800 overflow-hidden transition duration-300 group-hover:bg-[#fe8033]  rounded-full relative cursor-pointer ">
           Add to cart
          </button>
        </div>
      </div>
     
    </div>
  ));


  // useEffect(() => { 

  //   window.scrollTo(0, 0)})


  return (
    <>
    <div className="main_content m-0 pt-16 relative grid grid-cols-1 lg:grid-cols-3 gap-6 w-[75%] mx-auto py-8">
      <h3 className="absolute left-1/2 top-12 transform -translate-x-1/2 text-slate-800 text-[6rem] lg:text-[10rem]">
      Chairs
      </h3>
      {listItems}
    </div>


{/* shop by category section  */}
   <div className="w-full bg-white justify-center flex">
     <h1 className="text-5xl font-extrabold mt-16 mb-10"> Shop <span className="font-medium"> by</span> category</h1>
   </div>

{/* categories */}
   <div className=" h-[650px] w-full bg-white flex justify-between">
    {/* first 2  */}
    <div className="h-[580px] w-[330px] bg-white ml-12 relative">
      <div className="h-[280px] w-[330px] bg-red-600 ">
        <button className="py-2 px-6 rounded-none bg-slate-100 absolute text-base"> Dining Room</button>
        <img   className="w-full h-full" src="../Images/dining room1.jpg" alt="" />
      </div>
      <div className=" mt-5 h-[280px] w-[330px] bg-red-600">
        <button className="py-2 px-6 rounded-none bg-slate-100 absolute text-base "> Office Room</button>
        <img   className="w-full h-full" src="../Images/office room.jpg" alt="" />
      </div>
    </div>

    {/* large one  */}
    <div className="h-[580px] w-[680px] bg-green-600  mr-6 ml-6 relative">
      <button className="py-4 px-8 rounded-none bg-slate-100 absolute text-lg"> Living Room</button>
      <img className="w-full h-full" src="../Images/living room1.jpg" alt="" />
    </div>

    {/* last 2  */}
    <div className="h-[580px] w-[330px] bg-white mr-12 relative">
      <div className="h-[280px] w-[330px] bg-red-600">
        <button className="py-2 px-6 rounded-none bg-slate-100 absolute text-base"> Study Room</button>
        <img  className="w-full h-full" src="../Images/study room.jpg" alt="" />
      </div>
      <div className="mt-5 h-[280px] w-[330px] bg-red-600 ">
        <button className="py-2 px-6 rounded-none bg-slate-100 absolute text-base"> Bed Room</button>
        <img   className="w-full h-full" src="../Images/bed room2.jpg" alt="" />
      </div>
    </div>

   </div>
   </>
  );
};
export default MainContent;

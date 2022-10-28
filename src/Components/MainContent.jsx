import React from "react";
import product_card from "./ProductCardHomePage";

const MainContent = () => {
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <div
      className="card border-solid w-full cursor-pointer group flex-col relative transition h-[60vh] rounded-xl ease-in-out hover:scale-105 duration-300 mb-8  hover:bg-slate-700"
      key={item.id}
    >
      <div className="flex-1 relative h-1/2">
        <div className="absolute left-1/2 transform transition duration-500 -translate-x-1/2 w-full h-full flex items-center justify-center group-hover:scale-125 group-hover:-translate-y-9">
          <img className="w-4/5 h-auto" src={item.thumb} />
        </div>
      </div>

      <div className="card_header m-4 flex-1 h-1/2 flex flex-col space-y-3 items-center">
        <h2 className="text-white text-3xl"> {item.productName} </h2>
        <p className="text-white text-[14px]"> {item.description} </p>
        <p className="price text-[#fe8033] text-[25px] inline-block align-bottom relative">
          {" "}
          {item.price}{" "}
          <span className="absolute -left-4 bottom-[0.37rem] text-xs">
            {" "}
            {item.Currency}
          </span>
        </p>
        <div className="btn text-white">
          {" "}
          <button className="w-[175px] h-[35px] bg-slate-800 overflow-hidden transition duration-300 group-hover:bg-[#fe8033] rounded-full relative cursor-pointer ">
            {" "}
            Add to cart{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="main_content m-0 pt-16 relative grid grid-cols-1 lg:grid-cols-3 gap-6 w-[75%] mx-auto py-8">
      <h3 className="absolute left-1/2 top-12 transform -translate-x-1/2 text-slate-800 text-[6rem] lg:text-[10rem]">
        {" "}
        Chairs{" "}
      </h3>
      {listItems}
    </div>
  );
};
export default MainContent;

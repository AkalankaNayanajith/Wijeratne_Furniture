import React, { useEffect, useState } from "react";
import Ratings from "./Ratings";


const OneProductView = () => {
  
  const [newprodname, setNewprodname] = useState("");
  const [price, setPrice] = useState("");
  const [imagepath, setImagepath] = useState("");
  const [prodid, setProdId] = useState("");
  const [review, setReview] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {

    setNewprodname(localStorage.getItem('Name'));
    setPrice(localStorage.getItem('Price'));
    setImagepath(localStorage.getItem('Image'));
    setProdId(localStorage.getItem('ID'));
    setReview(localStorage.getItem('Review'));
    setDescription(localStorage.getItem('Description'));  }, []);
  
    return (
    <>
      <div className="Imagessection w-[50%]">
        <div className="LargeImage items-center h-[600px] ">
          <img
            className="bg-center bg-cover mt-20 mx-auto"
            src={imagepath}
            alt=""
          />
        </div>
        <div className="smallImagesSLider mx-auto w-[50%] flex">
          <img
            className="bg-center bg-contain border-2 border-black"
            // src="../Images/prod3.png"
            alt=""
          />
          <img
            className="bg-center bg-contain border-2 border-black"
            // src="../Images/prod3.png"
            alt=""
          />
          <img
            className="bg-center bg-contain border-2 border-black "
            // src="../Images/prod3.png"
            alt=""
          />
        </div>
      </div>

      <div className="information h-full w-[50%] " key={prodid}>
        <div className="text-black text-left  text-4xl font-poppins font-semibold  mt-20">
       
     
       {newprodname}
       </div>
        <div className="ratings flex text-left mt-2 ">
          <Ratings review={4}/>

          <p className="font-Manrope font-semibold text-[#2F2D3A] items-center ml-5 mt-[0.1rem]">
            (15 Reviews)
          </p>
        </div>

        <div className="price text-xl font-medium text-[#ff0000]">Rs {price} </div>

      <div className="mr-14">
          <p className="text-justify font-Manrope font-normal text-base ">
          {description}
          </p>
                  </div>

                  <div className="AddtoCartButton mt-8 ">
         <a href="/myshoppingcart"><button className="border-2  border-black rounded-none w-[92%] h-[50px] font-sans font-normal text-base hover:text-white hover:bg-black">
            {" "}
            <p> ADD TO CART</p>{" "}
          </button></a> 
        </div>
        <div className="FavBtn mt-4 ">
          <button className="border-2 border-black rounded-none  w-[92%] h-[50px] font-sans font-normal text-base hover:text-white hover:border-[#f63f3f] hover:bg-[#f63f3f]">
            {" "}
            <p> ADD TO FAVORITES</p>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default OneProductView;

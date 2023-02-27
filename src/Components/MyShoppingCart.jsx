import React from "react";
import { Link } from "react-router-dom";
import CartProdComponent from "./CartProdComponent";

const MyShoppingCart = () => {
  return (
    <>
      <div className="container">
      <div className="text-black  w-full text-center text-4xl font-poppins font-semibold  mt-20">
          My Shopping Cart
        </div>
        <table className="w-full mt-20">
          <tr className="border-b-2 w-full  border-[#DBD9D9]">
            <th className="text-[#3D4246] text-left pl-56 font-sans text-xl px-5">
    
              Product
            </th>
            <th className="text-[#3D4246] text-right font-sans text-xl px-0">
           
              Price
            </th>
            <th className="text-[#3D4246] text-right pl-[6rem] font-sans text-xl pr-[4.5rem]">
           
              Quantity
            </th>
            <th className="text-[#3D4246] text-right pl-6 font-sans text-xl  pr-52">
           
              Total
            </th>
          </tr>

   
          <CartProdComponent/>



        </table>

        {/* take image and botton border as component */}
   
        

        <div className="mt-8 mb-8 flex justify-between w-full px-52">
          <Link
            to="/products"
            className="border-2 border-[#201e1e] rounded-none bg-white text-black px-16 py-[0.75rem] font-sans font-normal text-lg hover:text-white hover:border-black hover:bg-black"
          >
            <p> CONTINUE SHOPPING</p>
          </Link>

          {/* <button className="border-2 border-black bg-black text-white rounded-none  px-16 py-[0.75rem] font-sans font-normal text-lg hover:border-[#2c2c2c] hover:bg-[#2c2c2c]" onClick={handleCheck}>
           PROCEED TO CHECKOUT
          </button> */}

          <Link
            to="/paymentinformation"
            className="border-2 border-black bg-black text-white rounded-none  px-16 py-[0.75rem] font-sans font-normal text-lg hover:border-[#2c2c2c] hover:bg-[#2c2c2c]">
            <p> PROCEED TO CHECKOUT</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyShoppingCart;

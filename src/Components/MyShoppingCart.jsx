import React from "react";
import { Link } from "react-router-dom";

const MyShoppingCart = () => {
  return (
    <>
      <div className="container">
        <table className="w-full mt-20">
          <tr className="border-b-2 w-full border-[#DBD9D9]">
            <th className="text-[#3D4246] text-left pl-56 font-sans text-xl px-5">
              {" "}
              Product{" "}
            </th>
            <th className="text-[#3D4246] text-right font-sans text-xl px-0">
              {" "}
              Price{" "}
            </th>
            <th className="text-[#3D4246] pl-[3rem] font-sans text-xl px-5">
              {" "}
              Quantity{" "}
            </th>
            <th className="text-[#3D4246] text-left pl-36 font-sans text-xl px-5">
              {" "}
              Total{" "}
            </th>
          </tr>

          <tr className="border-b-2 mb-6 w-full border-[#DBD9D9]">
            <td>
              <div className="h-28 flex mt-4 items-center">
                <div className="h-24 w-24 ml-[13.5rem] rounded-lg border-2 border-[#A6A6A6]">
                  <img
                    className="h-[90%] w-[90%] m-auto mt-1"
                    src="../Images/prod4.jpg"
                    alt=""
                  />
                </div>
                <div className="pl-[3rem] ">
                  <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-xl ">
                    luxury Bed {" "}
                  </h3>
                  <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">
                    {" "}
                    Black, Metal & Leather
                  </p>
                  <button>
                    {" "}
                    <p className="text-[#CB6202] mt-[0.1rem] underline underline-offset-2 ">
                      Remove
                    </p>
                  </button>
                </div>
                
              </div>
             
            </td>
            <td>
              {" "}
              <p className="text-[#34383b] text-right font-sans text-xl  ">
                Rs 67,999{" "}
              </p>
            </td>
            <td>
              <input
                className="h-12 text-xl  border-[#A6A6A6] w-16 text-center border-2 rounded-md ml-[8.2rem] "
                type="number"
              />
            </td>
            <td> <p className="text-[#34383b] font-sans text-right text-xl px-5">
                Rs 67,999{" "}
              </p></td>
          </tr>
          
        </table>

        <div className="text-black  w-full text-center text-4xl font-poppins font-semibold  mt-20">
          My Shopping Cart
        </div>
        <div className="mt-20">
          <ul className="flex">
            <li className="text-[#3D4246] pl-56 font-sans text-xl px-5">
              {" "}
              Product{" "}
            </li>
            <li className="text-[#3D4246] pl-[34rem] font-sans text-xl px-5">
              {" "}
              Price{" "}
            </li>
            <li className="text-[#3D4246] pl-[6.5rem] font-sans text-xl px-5">
              {" "}
              Quantity{" "}
            </li>
            <li className="text-[#3D4246] pl-36 font-sans text-xl px-5">
              {" "}
              Total{" "}
            </li>
          </ul> 
        </div>
        <div className="h-0.5 mt-6 mb-6 w-full bg-[#DBD9D9]"></div>

        
        {/* take image and botton border as component */}
        <div className="h-28 flex items-center">
          <div className="h-24 w-24 ml-[13.5rem] rounded-lg border-2 border-[#A6A6A6]">
            <img
              className="h-[90%] w-[90%] m-auto mt-1"
              src="../Images/prod3.png"
              alt=""
            />
          </div>
          <div className="pl-[3rem] ">
            <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-xl ">
              Zoltro Gaming Chair{" "}
            </h3>
            <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">
              {" "}
              Black, Metal & Leather
            </p>
            <button>
              {" "}
              <p className="text-[#CB6202] mt-[0.1rem] underline underline-offset-2 ">
                Remove
              </p>
            </button>
          </div>

          <p className="text-[#34383b] font-sans text-xl ml-[4.5rem] ">
            Rs 67,999{" "}
          </p>
          <input
            className="h-12 text-xl  border-[#A6A6A6] w-16 text-center border-2 rounded-md ml-[8.2rem] "
            type="number"
          />
        </div>
        <div className="h-0.5 mt-6 mb-6 w-full bg-[#DBD9D9]"></div>
{/* first component to here   */}



        {/* take image and bottom line as a component */}
        <div className="h-28 flex items-center">
          <div className="h-24 w-24 ml-[13.5rem] rounded-lg border-2 border-[#A6A6A6]">
            <img
              className="h-[90%] w-[90%] m-auto mt-1"
              src="../Images/prod4.jpg"
              alt=""
            />
          </div>
          <div className="pl-[3rem] ">
            <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-xl ">
              luxury Bed{" "}
            </h3>
            <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">
              {" "}
              Black, Metal & Leather
            </p>
            <button>
              {" "}
              <p className="text-[#CB6202] mt-[0.1rem] underline underline-offset-2 ">
                Remove
              </p>
            </button>
          </div>

          <p className="text-[#34383b] font-sans text-xl ml-[4.5rem] ">
            Rs 67,999{" "}
          </p>
          <input
            className="h-12 text-xl  border-[#A6A6A6] w-16 text-center border-2 rounded-md ml-[8.2rem] "
            type="number"
          />
        </div>
        <div className="h-0.5 mt-6 mb-6 w-full bg-[#DBD9D9]"></div>

        <div className="mt-8 mb-8 flex justify-between w-full px-52">
          <Link
            to="/products"
            className="border-2 border-[#201e1e] rounded-none bg-white text-black px-16 py-[0.75rem] font-sans font-normal text-lg hover:text-white hover:border-black hover:bg-black"
          >
            <p> CONTINUE SHOPPING</p>
          </Link>

          <Link
            to="/paymentinformation"
            className="border-2 border-black bg-black text-white rounded-none  px-16 py-[0.75rem] font-sans font-normal text-lg hover:border-[#2c2c2c] hover:bg-[#2c2c2c]"
          >
            <p> PROCEED TO CHECKOUT</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyShoppingCart;

import React from "react";
import { Link } from "react-router-dom";

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
              {" "}
              Product{" "}
            </th>
            <th className="text-[#3D4246] text-right font-sans text-xl px-0">
              {" "}
              Price{" "}
            </th>
            <th className="text-[#3D4246] text-right pl-[6rem] font-sans text-xl pr-[4.5rem]">
              {" "}
              Quantity{" "}
            </th>
            <th className="text-[#3D4246] text-right pl-6 font-sans text-xl  pr-52">
              {" "}
              Total{" "}
            </th>
          </tr>

  {/* from here */}
          <tr className="border-b-2 mb-6 w-full border-[#DBD9D9]">
            <td>
              <div className="h-28 flex mt-4 mb-4 items-center">
                <div className="h-24 w-24 ml-[13.5rem] rounded-lg border-2 border-[#A6A6A6]">
                  <img
                    className="h-[90%] w-[90%] m-auto mt-1"
                    src="../Images/prod4.jpg"
                    alt=""
                  />
                </div>
                <div className="pl-[3rem] ">
                  <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-xl ">
                    luxury Double Bed {" "}
                  </h3>
                  <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">
                    {" "}
                    Teak Wood ,Ultra comfort Soft mattress
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
              <p className="text-[#34383b] text-right font-sans text-xl ">
                Rs 67,999{" "}
              </p>
            </td>
            <td className="items-end text-right">
              <input
                className="h-12 text-xl  border-[#A6A6A6] w-16 text-center border-2 rounded-md mr-20 "
                type="number" min="1"
              />
            </td>
            <td> <p className="text-[#34383b] font-sans text-right text-xl pr-52">
                Rs 67,999{" "}
              </p></td>
          </tr>
{/* to here one component */}

          <tr className="border-b-2 mb-6 w-full border-[#DBD9D9]">
            <td>
              <div className="h-28 flex mt-4 mb-4 items-center">
                <div className="h-24 w-24 ml-[13.5rem] rounded-lg border-2 border-[#A6A6A6]">
                  <img
                    className="h-[90%] w-[90%] m-auto mt-1"
                    src="../Images/prod3.png"
                    alt=""
                  />
                </div>
                <div className="pl-[3rem] ">
                  <h3 className="text-[#34383b] max-w-xs min-w-xs font-sans text-xl ">
                    Zoltro Single Sofa  {" "}
                  </h3>
                  <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">
                    {" "}
                    Blue fabric
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
              <p className="text-[#34383b] text-right font-sans text-xl ">
                Rs 17,999{" "}
              </p>
            </td>
            <td className="items-end text-right">
              <input
                className="h-12 text-xl  border-[#A6A6A6] w-16 text-center border-2 rounded-md mr-20 "
                type="number" min="1"
              />
            </td>
            <td> <p className="text-[#34383b] font-sans text-right text-xl pr-52">
                Rs 17,999{" "}
              </p></td>
          </tr>

          <tr className="border-b-2 mb-6 w-full border-[#DBD9D9]">
            <td>
              <div className="h-28 flex mt-4 mb-4 items-center">
                <div className="h-24 w-24 ml-[13.5rem] rounded-lg border-2 border-[#A6A6A6]">
                  <img
                    className="h-[90%] w-[90%] m-auto mt-1"
                    src="../Images/prod5.png"
                    alt=""
                  />
                </div>
                <div className="pl-[3rem] ">
                  <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-xl ">
                    Dining Table x 6 chairs {" "}
                  </h3>
                  <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">
                    {" "}
                    Mahogani
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
              <p className="text-[#34383b] text-right font-sans text-xl ">
                Rs 187,999{" "}
              </p>
            </td>
            <td className="items-end text-right">
              <input
                className="h-12 text-xl  border-[#A6A6A6] w-16 text-center border-2 rounded-md mr-20 "
                type="number" min="1"
              />
            </td>
            <td> <p className="text-[#34383b] font-sans text-right text-xl pr-52">
                Rs 187,999{" "}
              </p></td>
          </tr>

          
        </table>

        
       
       
        {/* take image and botton border as component */}
   
        

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

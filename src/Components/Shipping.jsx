import React from 'react'
import { CheckBox } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CheckBoxTick from "./CheckBoxTick";
import CustomSeparator from "./CustomSeparator";
import ProvinceDropdown from "./ProvinceDropdown";
import TextInput from "./TextInput";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -5,
    top: 0,

    padding: "0 4px",
  },
}));
const Shipping = () => {
    return (
     
  
  
               <div className="flex container w-full">
            <div className="bg-white w-[55%] h-full pl-28 pr-16">
              <div className="">
                <a href="/">
                 
                  <h1 className="text-4xl text-[#B05C0D] font-praise pt-6 hover:text-black ">
                  
                    Wijeratne
                  </h1>
                </a>
              </div>
      
              <div className=" ">
                <CustomSeparator />
              </div>
               
      
      
              <h2 className="text-base font-sans font-semibold  mt-11">
                {" "}
                Contact Information
              </h2>
              <div className='flex'>
        <input type="radio" value="MALE" name="gender"/> <button>Male</button> 
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>
             
            
              <CheckBoxTick Labelinput="Email me with news and exclusive offers" />
      
              <h2 className="text-base font-sans font-semibold pt-6">
                Shipping Address
              </h2>
              <div className="flex justify-between gap-4 ">
              <input type="text" name="" id="" placeholder="First Name" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
              <input type="text" name="" id="" placeholder="Last Name" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
               
              </div>
              <input type="text" name="" id="" placeholder="Address" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
              <input type="text" name="" id="" placeholder="Apartment, suite, etc (optional)" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
              <input type="text" name="" id="" placeholder="City" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
              
              
              <div className="flex justify-between gap-4">
                <ProvinceDropdown />
              <input type="text" name="" id="" placeholder="Postal Code" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
              
              </div>
              <input type="text" name="" id="" placeholder="Phone" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
              <div className="mt-8 mb-28 flex justify-between ">
                <Link
                  to="/myshoppingcart"
                  className=" rounded-none bg-white text-blue-600 pr-16 py-[1.5rem] font-sans font-normal text-lg hover:text-blue-800 "
                >
                  <p>
                    {" "}
                    <span>&#60;</span> Return to cart{" "}
                  </p>
                </Link>
      
                <Link
                  to="/shipping"
                  className="border-2 border-blue-600 bg-blue-600 text-white rounded-lg  px-16 py-[1.5rem] font-sans font-normal text-lg hover:border-blue-800 hover:bg-blue-800"
                >
                  <p> Continue to Shipping</p>
                </Link>
              </div>
      
              <div className="h-0.5 mt-8 mb-6  w-full bg-[#DBD9D9]"></div>
              <div className="flex mb-14 text-blue-700 ">
                <Link
                  to="/privacypolicy"
                  className="pr-12 hover:underline hover:text-blue-800 cursor-pointer"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
                <Link
                  to="/refundpolicy"
                  className=" pr-12 hover:underline hover:text-blue-800  cursor-pointer"
                >
                  {" "}
                  Refund Policy{" "}
                </Link>
      
                <Link
                  to="/termsofuse"
                  className="pr-12 hover:underline hover:text-blue-800   cursor-pointer"
                >
                  {" "}
                  Terms of Use{" "}
                </Link>
                <Link
                  to="/faq"
                  className="pr-12  cursor-pointer hover:text-blue-800  hover:underline"
                >
                  {" "}
                  FAQs{" "}
                </Link>
              </div>
            </div>
      
      
      
            <div className="bg-[#F0F0F0] border-l-2 border-[#BBBBBB] flex-1 pl-16 pr-28 pt-6">
              {/* make a component including image and bottom line from here to */}
              <div className="h-28 flex items-center justify-between">
                <div className="h-24 w-24 rounded-lg border-2 border-[#A6A6A6]">
                  <StyledBadge className="cart" color="primary" badgeContent={1}>
                    <img
                      className="h-[90%] w-[90%] m-auto mt-1"
                      src="../Images/prod4.jpg"
                      alt=""
                    />
                  </StyledBadge>
                </div>
                <div className="pl-[2rem] ">
                  <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-xl ">
                    luxury Bed
                  </h3>
                  <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">
                    Black, Metal & Leather
                  </p>
                </div>
                <div className="pl-[9rem] ">
                  <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-lg  ">
                    Rs 134,999
                  </h3>
                </div>
              </div>
              <div className="h-[0.1rem] mt-4 mb-4  w-full bg-[#BBBBBB]"></div>
      
              {/* here   */}
              <div className="pt-4 flex justify-between">
                <input
                  className="border-2 border-[#BBBBBB] outline-none  rounded-lg px-4 text-base  h-12 w-96 focus:border-2 focus:border-[#9D9D9D] focus:ring-2 focus:ring-[#9D9D9D]"
                  type="text"
                  label="Discount Code"
                  placeholder="Discount Code"
                />
                <button className="rounded-lg text-base  h-12 w-28 bg-[#9D9D9D] hover:bg-[#555454] text-white ">
                  Apply
                </button>
              </div>
              <div className="h-[0.1rem] mt-8 mb-4  w-full bg-[#BBBBBB]"></div>
              <div className="flex justify-between">
                <h1 className="text-[#555454] font-sans text-base mt-2"> Subtotal</h1>
                <h3 className=" mt-2 text-[#34383b] font-sans text-lg">
                  Rs 134,999
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-[#555454] font-sans text-base mt-2"> Shipping</h1>
                <h3 className="text-[#555454] font-sans text-xs mt-4 ">
                  Calculated At Next Step
                </h3>
              </div>
              <div className="h-[0.1rem] mt-8 mb-4  w-full bg-[#BBBBBB]"></div>
              <div className="flex justify-between">
                <h1 className="text-[#555454] font-sans text-xl mt-2 "> Total</h1>
                <h3 className="text-[#555454] font-sans text-2xl mt-2 font-bold">
                  <span className="font-normal text-base">Rs</span> &nbsp;
                 
                   134,999
                </h3>
              </div>
      
            </div>
          </div>
        );
      };
      
      
      

export default Shipping
import { CheckBox } from "@mui/icons-material";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
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






const PaymentInformation = () => {

  const [newprodname, setNewprodname] = useState("");
  const [price, setPrice] = useState("");
  const [imgpath, setImgpath] = useState("");
  const [prodid, setProdId] = useState("");
  const [review, setReview] = useState("");
  const [description, setDescription] = useState("");
  const [itemCount, setItemCount] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {

    setNewprodname(localStorage.getItem('Name'));
    setPrice(localStorage.getItem('total'));
    setImgpath(localStorage.getItem('Image'));
    setProdId(localStorage.getItem('ID'));
    setReview(localStorage.getItem('Review'));
    setItemCount(localStorage.getItem('count'));
    setDescription(localStorage.getItem('Description'));  }, []); 
   

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
          Contact Information
        </h2>


        <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Email' required variant="outlined" color="secondary"  className="mt-4  w-full "
                 onChange={(ev) => {
                   setEmail(ev.target.value);
                   console.log(ev.target.value);}}
                 error = {!email}/> 
              </Stack>          
        </Stack>
        
       
      {/* <input type="text" name="" id="" placeholder="Email" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/> */}
  
        <CheckBoxTick Labelinput="Email me with news and exclusive offers" />

        <h2 className="text-base font-sans font-semibold pt-6">
          Shipping Address
        </h2>
        <div className="flex justify-between gap-4 ">

        <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='First Name' required variant="outlined" color="secondary"  className="mt-4 w-[20rem] "                 
                 onChange={(ev) => {
                   setEmail(ev.target.value);
                   console.log(ev.target.value);}}
                 error = {!email}/> 
              </Stack>          
        </Stack>

        <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Last Name' required variant="outlined" color="secondary"  className="mt-4 w-[20rem] "
                 onChange={(ev) => {
                   setLastName(ev.target.value);
                   console.log(ev.target.value);}}
                 error = {!lastName}/> 
              </Stack>          
        </Stack>
        {/* <input type="text" name="" id="" placeholder="First Name" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
        <input type="text" name="" id="" placeholder="Last Name" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/> */}               
        </div>


        <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Address' required variant="outlined" color="secondary"  className="mt-4  w-full "
                 onChange={(ev) => {
                   setAddress(ev.target.value);
                   console.log(ev.target.value);}}
                 error = {!address}/> 
              </Stack>          
        </Stack>

        <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Apartment, suite, etc (optional)'  variant="outlined" color="secondary"  className="mt-4  w-full "
                 onChange={(ev) => {
                  setApartment(ev.target.value);
                   console.log(ev.target.value);}}/> 
              </Stack>          
        </Stack>

        <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='City' required variant="outlined" color="secondary"  className="mt-4  w-full "
                 onChange={(ev) => {
                   setCity(ev.target.value);
                   console.log(ev.target.value);}}
                 error = {!city}/> 
              </Stack>          
        </Stack>


        {/* <input type="text" name="" id="" placeholder="Address" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
        <input type="text" name="" id="" placeholder="Apartment, suite, etc (optional)" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
        <input type="text" name="" id="" placeholder="City" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/> */}
        
        
        <div className="flex justify-between gap-4">

        <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>               
               <FormControl fullWidth className=" w-[20rem] mt-4">
               <InputLabel id="demo-simple-select-label" >Select Your Province</InputLabel>
                <Select required color="secondary"

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={province}
                    label="province"
                    onChange={handleProvinceChange}                    
                    error = {!province}  >
                    <MenuItem value={"Western"}>Western</MenuItem>
                    <MenuItem value={"Southern"}>Southern</MenuItem>
                    <MenuItem value={"North Western"}>North Western</MenuItem>
                    <MenuItem value={"Central"}>Central</MenuItem>
                    <MenuItem value={"North Central"}>North Central</MenuItem>
                    <MenuItem value={"Uva"}>Uva</MenuItem>
                    <MenuItem value={"Northern"}>Northern</MenuItem>
                    <MenuItem value={"Eastern"}>Eastern</MenuItem>
                    <MenuItem value={"Sabaragamuwa"}>Sabaragamuwa</MenuItem>
                 </Select>
               </FormControl>
              </Stack>          
            </Stack>
        
        {/* <select id="Province" name="Province" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500" labelId="demo-simple-select-label"
                    
                    value={province}
                    label="subCategory"
                    onChange={handleProvinceChange}                    
                    error = {!province}>
                    <option value="" disabled selected>Select Your Province</option>
                    <option value="Western">Western</option>
                    <option value="Northern">Northern</option>
                    <option value="North Western">North Western</option>
                    <option value="North Central">North Central</option>
                    <option value="Eastern">Eastern</option>
                    <option value="Central">Central</option>
                    <option value="Uva">Uva</option>
                    <option value="Sabaragamuwa">Sabaragamuwa</option>
                    <option value="Southern">Southern</option>
        </select> */}

        <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Postal Code' required variant="outlined" color="secondary"  className="mt-4 w-[20rem] "
                 onChange={(ev) => {
                   setPostalCode(ev.target.value);
                   console.log(ev.target.value);}}
                 error = {!postalCode}/> 
              </Stack>          
        </Stack>
          
        {/* <input type="text" name="" id="" placeholder="Postal Code" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/> */}
        
        
        </div>

        <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Phone' required variant="outlined" color="secondary"  className="mt-4  w-full "
                 onChange={(ev) => {
                   setPhone(ev.target.value);
                   console.log(ev.target.value);}}
                 error = {!phone}/> 
              </Stack>          
        </Stack>

        {/* <input type="text" name="" id="" placeholder="Phone" className="text-base mt-4 h-14 w-full p-4 rounded-lg outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/> */}
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
            <StyledBadge className="cart" color="primary" badgeContent={itemCount}>
              <img
                className="h-[90%] w-[90%] m-auto mt-1"
                src={imgpath}
                alt=""
              />
            </StyledBadge>
          </div>
          <div className="pl-[2rem] ">
            <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-xl ">
            {newprodname} 
            </h3>
            <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">
          {/* {selectedcolor}  {selectedmaterial} */} fgherghehg
            </p>
          </div>
          <div className="pl-[9rem] ">
            <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-lg  ">
            Rs  {price}
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

export default PaymentInformation;

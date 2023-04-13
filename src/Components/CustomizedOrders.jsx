import React, { useState,useRef  } from "react";
import BarChart from "./Charts/BarCharts"; 
import CartModal from "./Modals/CartModal";
import FirstModal from "./Modals/FirstModal";
import LoginSuccessfulModal from "./Modals/LoggedInSuccessfullModal";
import OrderSeeMore from "./Modals/OrderSeeMore";
import ProductAddedSuccessfully from "./Modals/ProductAddedSuccessfully";
import googleTransliterate from "google-input-tool"
import HomeSlider from "./Slider/HomeSlider";
import LoggedInSuccessfullModal from "./Modals/LoggedInSuccessfullModal";
import LoginModal from "./Modals/LoginModal";
import RegisterModal from "./Modals/RegisterModal";
import RegisteredSuccessfully from "./Modals/RegisteredSuccessfully";
import ReactImageMagnify from "react-image-magnify";
import UploadAndViewOtherImages from "./UploadAndViewOtherImages";
import ImageSelectionForm from "./ImageSelectionForm";
import ShowBox from "./ShowBox";
import CountDownTimer from "./CountDownTimer";
import NumberInputButton from "./Buttons/NumberInput";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import DrawingArea from "./DrawingArea";
import TableEdgeSelection from "./TableEdgeSelection";
import Stepper from "./Stepper";

export default function CustomizedOrders() {


  const username = "aka";
  const password = "123";

  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openCartModal, setOpenCartModal] = React.useState(false);
  const [openLoginAlert, setOpenLoginAlert] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegisteredSuccessfully, setOpenRegisteredSuccessfully] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);
  const [translatedText, setTranslatedText] = React.useState("");
  const [inputLanguage, setInputLanguage] = useState("si-t-i0-und");
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  function login() {
    if (usernameState === username && passwordState === password) {
      setLoggedIn(true);
    }
  }



  function translateX(text) {
    const maxResult = 8;
    const request = new XMLHttpRequest();

    return googleTransliterate(request, text, inputLanguage, maxResult)
      .then(function (response) {
        console.log("Transliterated Text: ", response);
        return response[0];
      });
  }

  function handleInputChange(ev) {
    const inputText = ev.target.value;
    const words = inputText.split(" ");

    Promise.all(words.map(translateX)).then((responses) => {
      const translatedWords = responses.map((response) => response[0]).join(" ");
      setTranslatedText(translatedWords);
    });
  }

  return (
    <>
      <div className="text-4xl text-center bold w-full mt-[3rem]">
        Customized Orders
      </div>


{/* tab section */}

    <div className="w-full border mt-10 mx-36 border-gray-300 rounded-md">
      <div className="flex">
        <button
          className={`py-2 px-4 ${
            activeTab === "Tab 1" ? "bg-gray-600 text-white rounded-sm" : "bg-gray-100 text-black"  }`}
          onClick={() => handleTabClick("Tab 1")} >
          New Order
        </button>

        <button
          className={`py-2 px-4 ${
            activeTab === "Tab 2" ? "bg-gray-600 text-white rounded-sm" : "bg-gray-100 text-black"}`}
          onClick={() => handleTabClick("Tab 2")}>
          Ongoing Orders
        </button>
      </div>

      {activeTab === "Tab 1" && (
        <div className="py-4 px-2">

          <div className="">
            <h1 className="mt-8 ml-52 text-base">Please explain your requirements in your own words</h1>

          <Stack className="h-20 mt-6" spacing={2}>
            <Stack direction="row" spacing={4}>
            <TextField label='Order Name (e.g:- 20 school chairs)' required  variant="outlined" color="secondary"  className="newordername  w-[52rem] ml-52"
               // newordername = {newordername}
               // onChange={(ev) => {
               // setNewordername(ev.target.value);
               // console.log(ev.target.value);}}
               // error = {! newordername}
               /> 
            </Stack>          
          </Stack>

          <div className=" flex items-center ">              
            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Material' required variant="outlined" color="secondary"  className="material  w-[25.5rem] ml-52"
                  // onChange={(ev) => {
                  //   setMaterial(ev.target.value);
                  //   console.log(ev.target.value); }}
                  // error = {!material}
                  /> 
              </Stack>          
            </Stack>

            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Sub Material' variant="outlined" color="secondary"  className="submaterial  w-[25.5rem] ml-4"
                  // onChange={(ev) => {
                  //   setSubMaterial(ev.target.value);
                  //   console.log(ev.target.value); }}                  
                  /> 
              </Stack>          
            </Stack>

            
          </div>

          <div className=" flex items-center "> 
                       
            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Required Quantity' required variant="outlined" color="secondary"  className="newprodname  w-[25.5rem] ml-52"
                 type= 'number' 
                 InputProps={{ inputProps: { min: 1} }}
                //  onChange={(ev) => {
                //   setQuantity(ev.target.value);
                //   console.log(ev.target.value); }}
                //   error = {!quantity}
                  /> 
              </Stack>          
            </Stack>


            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>              
               <FormControl fullWidth className="area  w-[25.5rem] ml-4">
               <InputLabel id="demo-simple-select-label" >Where you place the product?</InputLabel>
                <Select required color="secondary"
                
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={category}
                    // label="category"
                    // onChange={handleCategoryChange}
                    // error = {!category} 
                     >
                        <MenuItem value={"Living Room"}>Living Room</MenuItem>
                        <MenuItem value={"Dining Room"}>Dining Room</MenuItem>
                        <MenuItem value={"Office"}>Office</MenuItem>
                        <MenuItem value={"Studying"}>Studying</MenuItem>
                        <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
                        <MenuItem value={"Bedroom"}>Bedroom</MenuItem>
                        <MenuItem value={"Dressing"}>Dressing</MenuItem>                        
                 </Select>
               </FormControl>
              </Stack>          
            </Stack>

          </div>
          </div>

          <h2 className="text-lg font-semibold">Tab 1 content goes here</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            tellus et massa fringilla eleifend.
          </p>
        </div>
      )}

      {activeTab === "Tab 2" && (

      <div className="">
        <div className=" border mt-10 mx-8 border-gray-400 rounded-md">
          <h2 className="text-lg pl-4 pt-2 font-semibold">Shipping</h2>
          <p className="mt-2 pl-4">
            Morbi vel nisl sit amet arcu facilisis interdum at vel mauris.
            Pellentesque eu nisi nec metus posuere viverra sed nec turpis.
          </p>
        </div>
        <div className=" border mt-10 mx-8 border-gray-400 rounded-md">
          <h2 className="text-lg pl-4 pt-2 font-semibold">Payment</h2>
          <p className="mt-2 pl-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            tellus et massa fringilla eleifend.
          </p>
        </div>
        <div className=" border mt-10 mx-8 border-gray-400 rounded-md">
          <h2 className="text-lg pl-4 pt-2 font-semibold">Items</h2>
          <p className="mt-2 pl-4">
            Morbi vel nisl sit amet arcu facilisis interdum at vel mauris.
            Pellentesque eu nisi nec metus posuere viverra sed nec turpis.
          </p>
        </div>
        <div className="py-4 px-2">
          <h2 className="text-lg font-semibold">Tab 2 content goes here</h2>
          <p className="mt-2">
            Morbi vel nisl sit amet arcu facilisis interdum at vel mauris.
            Pellentesque eu nisi nec metus posuere viverra sed nec turpis.
          </p>
        </div>
      </div>
      )}
    </div>

    {/* tab section ends  */}

   

      {/* <div className="w-full h-full">
        wefihwbfhwe
      <BarChart />
      </div> */}
      

      <div className="h-full w-full text-center mt-9">
        <input
          type="text"
          name=""
          id=""
          placeholder="Email@email.com"
          className="text-xl p-4 h-16 w-[50%] rounded-lg outline-none border-black border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          onChange={(event) => {
            setUsernameState(event.target.value);
            console.log(event.target.value);
          }}
        />
      </div>

      <div className="h-full w-full text-center mt-9">
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="text-xl p-4 h-16 w-[50%] rounded-lg outline-none border-black border-2 focus:border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          onChange={(event) => {
            setPasswordState(event.target.value);
            console.log(event.target.value);
          }}
        />
      </div>

{/* 
      <div>
        <input type="file"   id="fileInput" />
      </div> */}

      <div className="m-10  w-full justify-center items-center flex">
        <button
          type="submit"
          className="px-12 py-3 rounded-lg text-lg border-2 border-white bg-cyan-500 text-white"
          onClick={login}
        >
          SUBMIT
        </button>
       
      </div>


      {/* modal open code below */}

      <button  onClick={()=> setOpenModal(true)} className="border-2 border-black rounded-xl ml-10 p-4 bg-blue-500 text-white"> 
          product added Successfully
      </button>

      <button  onClick={()=> setOpenCartModal(true)} className="border-2 border-slate-500 rounded-xl ml-20 p-4 bg-slate-500 text-white"> 
          OPEN CART modal
      </button>

      <button  onClick={()=> setOpenLoginAlert(true)} className="border-2 border-black rounded-xl ml-20 p-4 bg-green-500 text-white"> 
          Logged in Successfull
      </button>

      <button  onClick={()=> setOpenLogin(true)} className="border-2 border-black rounded-xl ml-20 p-4 bg-black text-white"> 
          Login to your account
      </button>

      <button  onClick={()=> setOpenRegister(true)} className="border-2 border-black rounded-xl ml-20 p-4 bg-black text-white"> 
          Register 
      </button>

      <button  onClick={()=> setOpenRegisteredSuccessfully(true)} className="border-2 border-black rounded-xl ml-20 p-4 bg-black text-white"> 
          Registered successfully
      </button>

      {/* <FirstModal open={openModal} onClose={()=> setOpenModal(false)}/> */} 
      {/* <OrderSeeMore open={openModal} onClose={()=> setOpenModal(false)}/> */}
      <ProductAddedSuccessfully open={openModal} onClose={()=> setOpenModal(false)}/>
      <CartModal open={openCartModal} closeCartHandler={()=> setOpenCartModal(false)}/>
      <LoggedInSuccessfullModal openLoginAlert={openLoginAlert} closeLoginAlert={()=> setOpenLoginAlert(false)}/>
      <LoginModal openLoginM={openLogin} closeLoginM={()=> setOpenLogin(false)}/>
      <RegisteredSuccessfully openRegisteredAlert={openRegisteredSuccessfully} closeRegisteredAlert={()=> setOpenRegisteredSuccessfully(false)}/>
      <RegisterModal openRegisterM={openRegister} closeRegisterM={()=> setOpenRegister(false)}/>



      {loggedIn && <alert> logged In</alert>}


      {/* uncomment above */}


      <div className="h-60 mt-52 mb-52 w-auto justify-between mx-60 bg-white items-center">
        <textarea
         className="border-2 border-black rounded-lg border-opacity-50 resize-none h-52 w-full px-6 text-xl bg-white 
         peer  outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
         placeholder="Product Description"
         name="ProductDescription"
         id=""
         cols="30"
          rows="8"
         onChange={handleInputChange}>
        </textarea>
        
        <p className="p-3 text-base rounded-md my-2">{translatedText}</p>

        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4 focus:bg-cyan-800"
            onClick={() => setInputLanguage("en")}>     
            English
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md focus:bg-cyan-800"
            onClick={() => setInputLanguage("si-t-i0-und")} >
            සිංහල
          </button>
        </div>

    </div>


       <div className="mt-52">
           {/* <UploadAndViewOtherImages/> */}
           <ImageSelectionForm/>
           <TableEdgeSelection/>
           <CountDownTimer/>
           <DrawingArea/>
           <Stepper/>
      </div>

{/* <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        // isFluidWidth: true,        
    width: 600,
    height: 900,
        src: "https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UL1500_.jpg"
    },
    largeImage: {
        src: "https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UL1500_.jpg",
        width: 1200,
        height: 1800
    }
}} /> */}


<ReactImageMagnify className="" {...{ // add z-50 to show modal over anything else
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        // isFluidWidth: true,        
    width: 600,
    height: 700,
        src: "../Images/prod3.png"
    },
    largeImage: {
        src: "../Images/prod3.png",
        width: 1200,
        height: 900
    }
}} />
         


         <HomeSlider/>
      {/* <section className="pb-20 relative block bg-gray-900">
    <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs year down to low ice.
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
              </div>
              </div>
</section> */}
    </>
  );
}

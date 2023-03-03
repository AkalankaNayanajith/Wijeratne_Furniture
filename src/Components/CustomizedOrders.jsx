import React, { useState } from "react";
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

  function login() {
    if (usernameState === username && passwordState === password) {
      setLoggedIn(true);
    }
  }


  function translateX (text){
    // let sourceText = 'hami';
let inputLanguage = 'si-t-i0-und';
let maxResult = 8;
let request = new XMLHttpRequest();

googleTransliterate(request, text, inputLanguage, maxResult)
.then(function(response) {
    console.log('Transliterated Text: ', response);
    setTranslatedText(response[0][0])
});
      console.log(text);
  }
 

  return (
    <>
      <div className="text-4xl text-center bold w-full mt-[4rem]">
        Customized Orders
      </div>

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


      <div className="h-60 mt-52 mb-52 w-auto justify-between mx-60 bg-white flex items-center">
           
           <textarea
             className="border-2 border-black rounded-lg border-opacity-50 resize-none h-52 w-full px-6 text-xl bg-white 
             peer  outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
             placeholder="Product Description"
             name="ProductDescription"
             id=""
             cols="30"
             rows="8"
             onChange={(ev) => {
              translateX(ev.target.value);
              //  setDescription(ev.target.value);
              //  console.log(ev.target.value);
             }}
           ></textarea>
          <p>{translatedText}</p>
         </div>

         
         

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

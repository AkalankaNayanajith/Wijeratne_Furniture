import React, { useState } from "react";

export default function CustomizedOrders() {
  const username = "aka";
  const password = "123";

  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    if (usernameState === username && passwordState === password) {
      setLoggedIn(true);
    }
  }

  //converting image to base 64
  
  // const fileInput = document.getElementById("fileInput");
  // fileInput.addEventListener("change" , e => {
  //   const file = fileInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener("load" , () => {
  //     console.log(reader.result);
  //   })
  //   reader.readAsDataURL(file);

  // });



  //converting image to base 64 k.c.
  // const handleImages =  async (event) => {
  //   const file = event.target.files[0];

  //   const base64 = await convertToBase64 (file);
  //   setProduct({});
  // }


  return (
    <>
      <div className="text-4xl text-center bold w-full mt-[4rem]">
        Custom Orders
      </div>

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


      <div>
        <input type="file"   id="fileInput" />
      </div>

      <div className="m-10  w-full justify-center items-center flex">
        <button
          type="submit"
          className="px-12 py-3 rounded-lg text-lg border-2 border-white bg-cyan-500 text-white"
          onClick={login}
        >
          SUBMIT
        </button>
       
      </div>

      {loggedIn && <alert> logged In</alert>}


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

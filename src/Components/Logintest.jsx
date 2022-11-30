import React, { useState, useEffect } from "react";

const Logintest = () => {
  const [checkemail, setCheckemail] = useState("");
  const [checkpw, setCheckpw] = useState("");

  return (
    <>
      <div className="h-[41rem] w-full bg-[#f0f0f1] flex items-center justify-center ">
        <div className="h-[32rem] w-[48rem]  text-center rounded-xl shadow-2xl flex">
          <div className="text-2xl w-[50%] bg-white  rounded-l-xl text-center  ">

            <h1 className=" pt-14 font-poppins font-semibold  text-blue-500 text-3xl ">
              Welcome back !
            </h1>

            <p className="text-blue-500 text-base font-semibold pt-12 ">To stay connected with us <br/> please Log in... </p> 

            <div className="px-6 pt-10">
              <input
                type="email"
                className="email h-12 w-full px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                autocomplete="off"
                placeholder="Email"
                onChange={(ev) => {
                  setCheckemail(ev.target.value);
                  console.log(ev.target.value); }} />
            </div>

            <div className="px-6 pt-6">
              <input
                type="password"
                className="email h-12 w-full px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                autocomplete="off"
                placeholder="Password"
                onChange={(ev) => {
                  setCheckemail(ev.target.value);
                  console.log(ev.target.value); }}/>
            </div>

            <p className="pt-4 text-sm text-gray-400"> Forgot Your Password?</p>

            <div className="w-full pt-10 justify-center items-center flex">
              <button
                type="submit"
                className="px-12 py-3 font-poppins font-semibold rounded-full text-xl shadow-2xl bg-gradient-to-b from-cyan-500 to-blue-500  text-white hover:scale-105 duration-300"
                onClick={4} >
                Log in
              </button>
            </div>

          </div>

          <div className="text-2xl w-[50%] bg-gradient-to-t from-cyan-500 to-blue-500  rounded-r-xl text-center ">
            <h1 className=" pt-14 font-poppins font-semibold text-white text-3xl">
            New to Wijeratne?
            </h1>
            <p className="text-white text-base font-semibold pt-12 pb-[8.5rem]">Join with us <br/>  for an amazing shopping journey </p> 
            <div className="pt-24">
            <button className="button border-2 border-white font-poppins font-semibold  text-blue-500 text-lg  bg-white  rounded-full w-[35%] h-[50px] pt-0  drop-shadow-lg shadow-black  hover:scale-105 duration-300">
               Sign Up
              </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logintest;

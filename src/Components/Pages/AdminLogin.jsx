import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  
  const email = "aka@gmail.com";
  const password = "123";

  const [checkemail, setCheckemail] = useState("");
  const [checkpw, setCheckpw] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    if (checkemail === email && checkpw === password) {
      setLoggedIn(true);
      alert("Logged in");
  }
  }
  
    

  return (
    <>
      <div className="h-[45rem] w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center ">
        <div className="h-[32rem] w-[36rem]  text-center rounded-xl shadow-2xl flex">
          <div className="text-2xl w-[100%] bg-white  rounded-xl text-center  ">

            <h1 className=" pt-14 font-poppins font-semibold  text-blue-500 text-4xl ">
              Welcome back !
            </h1>

           

            <div className="px-6 pt-10">
              <input
                type="email"
                className="email h-12 w-full px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                
                placeholder="Email"
                onChange={(ev) => {
                  setCheckemail(ev.target.value);
                  console.log(ev.target.value); }} />
            </div>

            <div className="px-6 pt-6">
              <input
                type="password"
                className="email h-12 w-full px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                
                placeholder="Password"
                onChange={(ev) => {
                  setCheckpw(ev.target.value);
                  console.log(ev.target.value); }}/>
            </div>

            <div className="SelectRole px-6 pt-6 ">
            
                <select id="Roles" name="Roles" className="text-xl border-2 rounded-lg border-black border-opacity-50 w-[50%] h-12 ">
                    <option value="Admin">Admin</option>
                    <option value="Cashier">Cashier</option>
                    <option value="Delivery">Delivery</option>
    
                </select>
 

            </div>

            <p className="pt-4 text-sm text-gray-400"> Forgot Your Password?</p>

            <div className="w-full pt-10 justify-center items-center flex">
            <Link to="/adminpanel/adduser">
              <button
                type="submit"
                className="px-16 py-3 font-poppins font-semibold rounded-full text-xl shadow-2xl bg-gradient-to-b from-cyan-500 to-blue-500  text-white hover:scale-105 duration-300"
                onClick={login} >
                Log in
              </button>
              </Link>
            </div>

          

          </div>

         
        </div>
      </div>
    </>
  );
};

export default AdminLogin;

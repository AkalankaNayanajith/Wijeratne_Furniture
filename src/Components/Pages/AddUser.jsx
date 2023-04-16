import { Link } from 'react-router-dom';
import React from "react";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { Result } from "postcss";
import UserAction from '../SideBar/UserAction';
import { InputAdornment, Stack, TextField } from '@mui/material';


const ProductSchema = Yup.object().shape({

})

    export default function AddUser() {
  
        const [userid, setUserid] = useState('')
        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [address, setAddress] = useState('')
        const [gender, setGender] = useState('')
        const [NIC, setNIC] = useState('')
        const [role, setRole] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [DOB, setDOB] = useState('')
        const [phonenumber, setPhonenumber] = useState('')
        const [profilepic, setProfilepic] = useState('')
       
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
      
      
        const handleClick = (ev) =>  {
          ev.preventDefault()
          const newUser = {userid,firstName,lastName,address,gender,NIC, role,email,password,profilepic, DOB ,phonenumber }
          console.log(newUser)
          fetch("http://localhost:8080/user/add",{
          method:"POST",
          headers:{"Content-Type" : "application/json"},
          body:JSON.stringify(newUser) 
        }).then(() => {
          console.log("New User Added")
          
        })
        }
      
      
        
  return (
    <>

    <div className='flex '>
        <div className=' h-screen bg-[#051b32] fixed'> 
        <UserAction/>
        </div>      

        
          <div className='ml-72 w-[1200px] container'>
            <div className=" text-3xl mt-24 mx-auto text-center text-zinc-900">
            Add Staff
            </div>

            <div className="">

            <div className=" flex items-center  mt-10 ">              
            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='First Name' required variant="outlined" color="secondary"  className=" w-[25.5rem] ml-52"
                 type= 'text' onChange={(ev) => {
                  setFirstName(ev.target.value);
                  console.log(ev.target.value);
                }} /> 
              </Stack>          
            </Stack>


            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Last Name' required variant="outlined" color="secondary"  className=" w-[25.5rem] ml-4"
                //  inputProps={{
                  // startAdornment: <InputAdornment position='start'> Rs </InputAdornment>,}}
                  onChange={(ev) => {
                    setLastName(ev.target.value);
                    console.log(ev.target.value);
                  }}/> 
              </Stack>          
            </Stack>

          </div>


          <div className="w-[1215px]">
            <div className="h-14 mt-10  mx-60 bg-white justify-between gap-7 flex  items-end ">

            <label className="relative p-2">
            <input
                  type="text"
                  className=" h-12 w-[23rem] px-4 text-base bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="First Name"                  
                  onChange={(ev) => {
                    setFirstName(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />   <span className="text-sm text-black text-opacity-50  absolute left-3 -top-3 mr-4 ml-2 px-1  peer-focus:text-blue-500 ">
                First Name
               </span>  
               </label>

            <label className="relative p-2">
            <input
                  type="text" 
                  className=" h-12 w-[23rem] px-4 text-base bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Last Name"
                  onChange={(ev) => {
                    setLastName(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />  
                <span className="text-sm text-black text-opacity-50  absolute left-3 -top-3 mr-4 ml-2 px-1  peer-focus:text-blue-500 ">
                Last Name
               </span>
               </label> 

               
            </div>

            


            <div className="h-16  mx-60 bg-white justify-between gap-7 flex  items-center">
            <label className="relative p-2 ">
              <div className='flex text-base px-5 text-center items-center' onChange={(ev) => {
                    setGender(ev.target.value);
                    console.log(ev.target.value);
                  }}>
              <span className="text-sm mb-10  text-black text-opacity-50  absolute left-3 -top-3 mr-4 ml-2 px-1  peer-focus:text-blue-500 ">
                Gender
               </span>
                  <input type="radio" value="MALE" name="gender" className='mr-3 h-5 w-5'/> Male
                                    <div className='w-16'></div>
                  <input type="radio" value="FEMALE" name="gender" className='mr-3 h-5 w-5'/> Female
              </div>
            </label>

            {/* <select id="gender" name="gender" className="px-6 text-xl border-2 rounded-lg border-black border-opacity-50 h-14 w-[25rem] " 
                  onChange={(ev) => {
                    setGender(ev.target.value);
                    console.log(ev.target.value);
                  }}>
                    
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
    
                </select> */}      


   
            </div>

            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <input
                  type="date"
                  className="h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="DOB"
                  onChange={(ev) => {
                    setDOB(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />
            <input
                  type="text"
                  className="h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="NIC"
                  onChange={(ev) => {
                    setNIC(ev.target.value);
                    console.log(ev.target.value);
                  }}
                /> 
                  
             
             
  
             
            </div>

            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
           
 

                <input
                  type="text"
                  className="h-14 w-[52rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Address"
                  onChange={(ev) => {
                    setAddress(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />
                    
               
             
            </div>


            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <input
                  type="text"
                  className="h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Phone"
                  onChange={(ev) => {
                    setPhonenumber(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />   
            <select id="Roles" name="Roles" className="px-6 text-xl border-2 rounded-lg border-black border-opacity-50 h-14 w-[25rem] " onChange={(ev) => {
                    setRole(ev.target.value);
                    console.log(ev.target.value);
                  }}>
                    
                    <option value="Admin">Admin</option>
                    <option value="Cashier">Cashier</option>
                    <option value="Delivery">Delivery</option>
    
                </select>   
            </div>

            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
           

                    <input
                  type="text"
                  className="newprodname h-14 w-[52rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Email"
                  onChange={(ev) => {
            setEmail(ev.target.value);
            console.log(ev.target.value);
          }}
                />        
               
             
            </div>

            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
           

                    <input
                  type="text"
                  className="newprodname h-14 w-[52rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Password"
                  onChange={(ev) => {
            setPassword(ev.target.value);
            console.log(ev.target.value);
          }}
                />        
               
             
            </div>
          

          
            {/* <InputButton/> */}
          </div>

        


          <div className="imageupload mt-12 mx-60 mb-24 flex items-center gap-5 ">
            <div className="box-border border-black border-opacity-50 h-60 w-[28rem] p-4 border-2"></div>
            <form class="flex items-center space-x-6">
              <div class="shrink-0">
                <img
                  className="h-16 w-16 object-cover"
                  src="../Images/uploadimg.JPG"
                />
              </div>

              <label class="block">
                <span class="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  id="fileInput"
                  // onClick={handleImages}
                  // onChange={(ev) => {
                  //   setImage64(ev.target.value);
                  //   console.log(ev.target.value);
                  // }}
                  class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0   file:text-sm file:font-semibold  file:bg-red-100 file:text-violet-700 hover:file:bg-green-200 "
                />
              </label>
            </form>
          </div>

          <div className="m-10  w-auto justify-between px-56 items-center flex">
        <button
          type="submit"
          className="px-24 py-3 rounded-lg text-lg bg-red-500 hover:bg-red-600 text-white shadow-lg  hover:shadow-2xl "         
        > Cancel  </button>

        <button
          type="submit"
          className="px-24 py-3 rounded-lg text-lg  bg-green-500 hover:bg-green-600 text-white shadow-lg  hover:shadow-2xl"
          onClick={handleClick}
        >
          Save
        </button>
       
      </div>



     </div>
     
     

    </div>
    </div>
    </>
  )
}


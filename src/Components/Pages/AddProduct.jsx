import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ClippedDrawer from "./DashClippedDrawer";
import InputButton from "../InputButton";
import { Box, CssBaseline } from "@mui/material";
import TextField from "@mui/material/TextField";
import CustomTextField from "../CustomTextField/CustomTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';


const ProductSchema = Yup.object().shape({

})

export default function AddProduct() {
  const initialValues = { productName: "", productID: "" };

  return (
    // <div className="grid grid-cols-12 w-full">
    <>
      <Box
        sx={{
          width:500,
          pl: 30,
          display: "flex",
        }}
      >
        {/* <CssBaseline /> */}
        {/* <ClippedDrawer /> */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
          className="col-span-7"
        >
          <div className="text-3xl mt-24 mx-auto text-center text-zinc-900">
            Add Product
          </div>

          <div className="">
            <div className="h-20 mt-10  mx-60 bg-white justify-between gap-7 flex  items-center">
             
                <input
                  type="text"
                  className="h-14 w-[52rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Product Name"
                />        
            

               
            </div>

            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <input
                  type="text"
                  className="h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Product ID"
                />     

<input
                  type="text"
                  className="h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Country"
                />     
             
            </div>


            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <input
                  type="number"
                  className="h-14 w-[16rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Unit Price"
                />   
            <input
                  type="text"
                  className="h-14 w-[16rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Quantity"
                />     

<input
                  type="number"
                  className="h-14 w-[16rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Dicsount"
                />     
            </div>

            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <input
                  type="text"
                  className="h-14 w-[16rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Material"
                />     
                <input
                  type="text"
                  className="h-14 w-[16rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Colour"
                />     
             

<input
                  type="text"
                  className="h-14 w-[16rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Warranty Period"
                />     
             
            </div>

          

            <div className="h-60 w-auto justify-between mx-60 bg-white flex items-center">
           
              <textarea
                className="border-2 border-black rounded-lg border-opacity-50 resize-none h-52 w-full px-6 text-xl bg-white 
                peer  outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                placeholder="Product Description"
                name="ProductDescription"
                id=""
                cols="30"
                rows="8"
              ></textarea>
             
            </div>



            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <input
                  type="text"
                  className="h-14 w-[52rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Image path"
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
                  class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-red-100 file:text-violet-700
      hover:file:bg-green-200
    "
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
          
        >
          Save
        </button>
       
      </div>

          {/* <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <a href="localhost:3000">
              <img
                className="opacity-75 hover:opacity-100 my-auto mx-24 cursor-pointer"
                src="../Images/AddNew.svg"
                alt=""
              />{" "}
            </a>

            <img
              className="opacity-75 hover:opacity-100 my-auto mx-24 cursor-pointer"
              src="../Images/ViewList.svg"
              alt=""
            />
          </div> */}
        </Box>
        {/* <div className="col-span-5 bg-green-400 relative overflow-hidden">
        <ClippedDrawer />
      </div> */}
        {/* </div> */}
      </Box>
    </>
  );
}

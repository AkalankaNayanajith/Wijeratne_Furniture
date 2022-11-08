import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ClippedDrawer from "./DashClippedDrawer";
import InputButton from "../InputButton";
import { Box, CssBaseline } from "@mui/material";
import TextField from "@mui/material/TextField";
import CustomTextField from "../CustomTextField/CustomTextField";

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
              <label className="relative p-2">
                <input
                  type="text"
                  className="h-14 w-96 px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-purple-600  transition duration-200 peer"
                  autocomplete="off"
                />
                <span className="text-xl text-black text-opacity-80 absolute left-0 top-6 mx-4 px-2 transition-all duration-200 input-text cursor-text peer-focus:text-sm peer-focus:text-purple-600 peer-focus:-top-1 peer-focus:bg-white peer-focus:left-3">
                  Product Name
                </span>
              </label>

              <label className="relative p-2">
                <input
                  type="text"
                  className="h-14 w-96 px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-purple-600  transition duration-200 peer"
                  autocomplete="off"
                />
                <span className="text-xl text-black text-opacity-80 absolute left-0 top-6 mx-4 px-2 transition-all duration-200 input-text cursor-text peer-focus:text-sm peer-focus:text-purple-600 peer-focus:-top-1 peer-focus:bg-white peer-focus:left-3">
                  Product ID
                </span>
              </label>
            </div>

            <div className="h-28  mx-60 bg-white justify-between gap-7 flex  items-center">
              <label className="relative p-2">
                <input
                  type="text"
                  className="h-14 w-96 px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-purple-600  transition duration-200 peer"
                  autocomplete="off"
                />
                <span className="text-xl text-black text-opacity-80 absolute left-0 top-6 mx-4 px-2 transition-all duration-200 input-text cursor-text peer-focus:text-sm peer-focus:text-purple-600 peer-focus:-top-1 peer-focus:bg-white peer-focus:left-3">
                  Quantity
                </span>
              </label>

              <label className="relative p-2">
                <input
                  type="text"
                  className="h-14 w-96 px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-purple-600  transition duration-200 peer"
                  autocomplete="off"
                />
                <span className="text-xl text-black text-opacity-80 absolute left-0 top-6 mx-4 px-2 transition-all duration-200 input-text cursor-text peer-focus:text-sm peer-focus:text-purple-600 peer-focus:-top-1 peer-focus:bg-white peer-focus:left-3">
                  Unit Price
                </span>
              </label>
            </div>

            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
              <label className="relative p-2">
                <input
                  type="text"
                  className="h-14 w-96 px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-purple-600  transition duration-200 peer"
                  autocomplete="off"
                />
                <span className="text-xl text-black text-opacity-80 absolute left-0 top-6 mx-4 px-2 transition-all duration-200 input-text cursor-text peer-focus:text-sm peer-focus:text-purple-600 peer-focus:-top-1 peer-focus:bg-white peer-focus:left-3">
                  Material
                </span>
              </label>

              <label className="relative p-2">
                <input
                  type="text"
                  className="h-14 w-96 px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-purple-600  transition duration-200 peer"
                  autocomplete="off"
                />
                <span className="text-xl text-black text-opacity-80 absolute left-0 top-6 mx-4 px-2 transition-all duration-200 input-text cursor-text peer-focus:text-sm peer-focus:text-purple-600 peer-focus:-top-1 peer-focus:bg-white peer-focus:left-3">
                  Warranty Period
                </span>
              </label>
              <CustomTextField name={"fwefw"} />
            </div>

            <div className="h-60 w-auto justify-between mx-60 bg-white flex items-center">
            <label className="relative p-2">
              <textarea
                className="border-2 border-black rounded-lg border-opacity-50 resize-none h-52 w-full px-6 text-xl bg-white focus:border-purple-600  
                transition duration-200 peer"
                placeholder="Product Description"
                name="ProductDescription"
                id=""
                cols="30"
                rows="8"
              ></textarea>
              <span className="text-xl text-black text-opacity-80 absolute left-0 top-6 mx-4 px-2 transition-all duration-200 input-text cursor-text peer-focus:text-sm peer-focus:text-purple-600 peer-focus:-top-1 peer-focus:bg-white peer-focus:left-3">
                Warranty Period
              </span>
              </label>
            </div>
            {/* <InputButton/> */}
          </div>

          <TextField sx={{ml:30}} id="outlined-basic" label="Outlined" variant="outlined" />


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

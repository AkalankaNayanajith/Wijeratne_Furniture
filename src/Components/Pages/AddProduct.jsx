import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ClippedDrawer from "./DashClippedDrawer";
import InputButton from "../InputButton";
import { Box, CssBaseline } from "@mui/material";

export default function AddProduct() {
  return (
    // <div className="grid grid-cols-12 w-full">
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <ClippedDrawer />
        <Box component="main" sx={{
          flexGrow: 1
        }} className="col-span-7">
          <div className="text-5xl mt-16 mx-auto text-center text-red-700">Add Product</div>

          <Button variant="contained">Contained</Button>

          <div className="h-screen bg-white flex justify-center items-center">
            <label className="relative">
              <input type="text" className="h-20 w-60 px-6 text-3xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-purple-600  transition duration-200 peer" 
    autocomplete="off"/>
              <span className="text-3xl text-black text-opacity-80 absolute left-0 top-4 mx-4 px-2 transition-all duration-200 input-text cursor-text peer-focus:text-sm peer-focus:text-purple-600 peer-focus:-top-4">Input</span>
            </label>

            {/* <InputButton/> */}
            
          </div>


          <img
            className="opacity-75 hover:opacity-100 my-auto mx-24 cursor-pointer"
            src="../Images/AddNew.svg"
            alt=""
          />
          <img
            className="opacity-75 hover:opacity-100 my-auto mx-24 cursor-pointer"
            src="../Images/ViewList.svg"
            alt=""
          />
        </Box>
        {/* <div className="col-span-5 bg-green-400 relative overflow-hidden">
        <ClippedDrawer />
      </div> */}
    {/* </div> */}
      </Box>
    
  );
}

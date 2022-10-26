import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ClippedDrawer from "./DashClippedDrawer";
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
          <div className="text-5xl mt-16 mx-auto text-red-700">Add Product</div>

          <Button variant="contained">Contained</Button>

          <div className="caro"></div>


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

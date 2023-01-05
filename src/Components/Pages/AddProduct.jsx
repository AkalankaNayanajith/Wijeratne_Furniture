import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ClippedDrawer from "./DashClippedDrawer";
import InputButton from "../InputButton";
import { Box, CssBaseline } from "@mui/material";
import TextField from "@mui/material/TextField";
import CustomTextField from "../CustomTextField/CustomTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { Result } from "postcss";
import { Link } from "react-router-dom";
import ProductAction from "../SideBar/ProductAction";


const ProductSchema = Yup.object().shape({

})



export default function AddProduct() {

  const initialValues = { productName: "", productID: "" };

  const [newprodname, setNewprodname] = useState('')
  const [prodid, setProdid] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [dicount, setDiscount] = useState('')
  const [price, setPrice] = useState('')
  const [color, setColor] = useState('')
  const [material, setMaterial] = useState('')
  const [country, setCountry] = useState('')
  const [imgpath, setImgpath] = useState('')
  const [image64, setImage64] = useState([])
 
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
    const newProduct = {newprodname, prodid ,category, description, quantity, dicount, price, color, material, country, imgpath}
    console.log(newProduct)
    fetch("http://localhost:8080/product/add",{
    method:"POST",
    headers:{"Content-Type" : "application/json"},
    body:JSON.stringify(newProduct) 
  }).then(() => {
    console.log("New Product Added")
    alert("New Product Added")
  })
  }


  return (
    <>
    {/*  <div className="grid grid-cols-12 w-full"> */}
      <div className='flex '>
        <div className=' h-screen bg-[#051b32] fixed'> 
        <ProductAction/>
        </div>      

        <div className='ml-72 w-[1200px] container'>
          <div className="text-3xl mt-24 mx-auto text-center text-zinc-900">
            Add Product
          </div>

          <div className="">
            <div className="h-20 mt-10  mx-60 bg-white justify-between gap-7 flex  items-center">
             
                <input
                  type="text"
                  className="newprodname h-14 w-[52rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Product Name"
                  onChange={(ev) => {
            setNewprodname(ev.target.value);
            console.log(ev.target.value);
          }}
                />        
            

               
            </div>

            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <input
                  type="text"
                  className="prodid h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Product ID"
                  onChange={(ev) => {
                    setProdid(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />     

<input
                  type="text"
                  className="country h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Country (optional)"
                  onChange={(ev) => {
                    setCountry(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />     
             
            </div>


            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
           
            <input
                  type="text"
                  className="h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Category"
                  
                />     

<input
                  type="text"
                  className="h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Supplier (optional)"
                 
                />     
            </div>


            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <input
                  type="text"
                  className="price h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Unit Price"
                  onChange={(ev) => {
                    setPrice(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />   
            <input
                  type="text"
                  className="h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Quantity"
                  onChange={(ev) => {
                    setQuantity(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />     
{/* 
<input
                  type="text"
                  className="h-14 w-[16rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Discount"
                  onChange={(ev) => {
                    setDiscount(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />      */}
            </div>

            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <input
                  type="text"
                  className="h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Material"
                  onChange={(ev) => {
                    setMaterial(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />     
                <input
                  type="text"
                  className="h-14 w-[25rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Color"
                  onChange={(ev) => {
                    setColor(ev.target.value);
                    console.log(ev.target.value);
                  }}
                />     

                
             

{/* <input
                  type="text"
                  className="h-14 w-[16rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Warranty Period"
                  onChange={(ev) => {
                    setCategory(ev.target.value); //change later for category slash category
                    console.log(ev.target.value);
                  }}
                />      */}
             
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
                onChange={(ev) => {
                  setDescription(ev.target.value);
                  console.log(ev.target.value);
                }}
              ></textarea>
             
            </div>



            <div className="h-20  mx-60 bg-white justify-between gap-7 flex  items-center">
            <input
                  type="text"
                  className="h-14 w-[52rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Image path"
                  onChange={(ev) => {
                    setImgpath(ev.target.value);
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
        <Link to='/adminpanel/adminproductpage'
          type="submit"
          className="px-24 py-3 rounded-lg text-lg bg-red-500 hover:bg-red-600 text-white shadow-lg  hover:shadow-2xl "         
        > Cancel  </Link>

        <button
          type="submit"
          className="px-24 py-3 rounded-lg text-lg  bg-green-500 hover:bg-green-600 text-white shadow-lg  hover:shadow-2xl"
          onClick={handleClick}
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
       
        {/* <div className="col-span-5 bg-green-400 relative overflow-hidden">
        <ClippedDrawer />
      </div> */}
        {/* </div> */}
        </div>


      </div>
    </>
  );
}

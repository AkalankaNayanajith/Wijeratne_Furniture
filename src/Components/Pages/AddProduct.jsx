import { InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState,useEffect  } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import ProductAction from "../SideBar/ProductAction";


const ProductSchema = Yup.object().shape({

})



export default function AddProduct() {

  const initialValues = { productName: "", productID: "" };


  const [newprodname, setNewprodname] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [prodid, setProdid] = useState('')
  const [country, setCountry] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [material, setMaterial] = useState('')
  const [subMaterial, setSubMaterial] = useState('')
  const [supplier, setSupplier] = useState('')
  const [description, setDescription] = useState('')
  const [dicount, setDiscount] = useState('')
  const [color, setColor] = useState('')
  const [image64, setImage64] = useState([])
  const [images64, setImages64] = useState([])
 

  const handleClick = (ev) =>  {
    ev.preventDefault()
    const newProduct = {newprodname, prodid ,category, description, quantity, dicount, price, color, material, country, image64, images64}
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


  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
    console.log(event.target.value);
  };

  const handleMaterialChange = (event) => {
    setMaterial(event.target.value);
    console.log(event.target.value);
  };

  const handleSubMaterialChange = (event) => {
    setSubMaterial(event.target.value);
    console.log(event.target.value);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);     
    console.log(event.target.value);
  };

  //image converting to -- base 64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImage = async (event)=> {
    let optionalImages = Array.prototype.slice.call(event.target.files)
    const uploaded = [...images64]
    optionalImages.some((file) => {uploaded.push(file);})
    // setImages64(uploaded);
    uploaded.map(async (image) =>{
      const bases64 = await convertToBase64(image);
      images64.push(bases64);
    })
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setImage64(base64);
  };

  const handleMainImage = async (event)=> {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setImage64(base64);
  };


  // useEffect (()=> {
  //   console.log(image64);
  //  },[image64])

  useEffect (()=> {    
    console.log(images64);
   },[images64])

   //getting data to database to category dropdown
   const [data, setData] = useState([]);

   useEffect(() => {
     async function getAllItems() {
       await fetch("http://localhost:8080/category")
         .then((res) => res.json())
         .then((res) => setData(res));
     }
     getAllItems();
   }, []);


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

            <Stack className="h-20 mt-10" spacing={2}>
              <Stack direction="row" spacing={4}>
               <TextField label='Product Name'required  variant="outlined" color="secondary"  className="newprodname  w-[52rem] ml-52"
                  newprodname = {newprodname}
                  onChange={(ev) => {
                  setNewprodname(ev.target.value);
                  console.log(ev.target.value);}}
                  error = {! newprodname}/> 
              </Stack>          
            </Stack> 

{/*         <Stack className="h-20" spacing={2}>
              <Stack direction="row" spacing={4}>
               <TextField label='Country of Origin'  variant="outlined" color="secondary"  className="newprodname  w-[52rem] ml-52"                 
                 onChange={(ev) => {
                  setCountry(ev.target.value);
                  console.log(ev.target.value); }}/> 
              </Stack>          
            </Stack> */}
           

          <div className=" flex items-center ">              
            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Quantity' required variant="outlined" color="secondary"  className="newprodname  w-[25.5rem] ml-52"
                 type= 'number' 
                 InputProps={{ inputProps: { min: 0} }}
                 onChange={(ev) => {
                  setQuantity(ev.target.value);
                  console.log(ev.target.value); }}
                  error = {!quantity}/> 
              </Stack>          
            </Stack>


            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Unit Price (Rs)' required variant="outlined" color="secondary"  className="newprodname  w-[25.5rem] ml-4"
                //  inputProps={{
                  // startAdornment: <InputAdornment position='start'> Rs </InputAdornment>,}}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  onChange={(ev) => {
                   setPrice(ev.target.value);
                   console.log(ev.target.value);}}
                 error = {!price}/> 
              </Stack>          
            </Stack>

          </div>

          <div className=" flex items-center ">              
            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Product ID' required variant="outlined" color="secondary"  className="newprodname  w-[25.5rem] ml-52"
                  onChange={(ev) => {
                    setProdid(ev.target.value);
                    console.log(ev.target.value); }}
                  error = {!prodid}/> 
              </Stack>          
            </Stack>

{/* //laka code down  */}

            {/* <div className="mb-3 w-120">
          <TextField
            fullWidth
            id="standard-select-category"
            select
            label="Category"
            value={category}
            onChange={handleChange}
            helperText="Please select category"
            variant="standard"
          >
            {data.map((option, key) => (
              <MenuItem key={option.categoryName} value={option.categoryName}>
                {option.categoryName}
              </MenuItem>
            ))}
          </TextField>
        </div> */}


            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Country'  variant="outlined" color="secondary"  className="newprodname  w-[25.5rem] ml-4"
                 onChange={(ev) => {
                  setCountry(ev.target.value);
                  console.log(ev.target.value); }}/> 
              </Stack>         
            </Stack>
          </div>

          <div className=" flex items-center ">   

            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               {/* <TextField label='Category (By Area)' required variant="outlined" color="secondary"  className="newprodname  w-[25.5rem] ml-52"
                  onChange={(ev) => {
                    setProdid(ev.target.value);
                    console.log(ev.target.value); }}
                  error = {!prodid}/>  */}
               <FormControl fullWidth className="newprodname  w-[25.5rem] ml-52">
               <InputLabel id="demo-simple-select-label" >Category by Area</InputLabel>
                <Select required color="secondary"
                
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="category"
                    onChange={handleCategoryChange}
                    error = {!category}  >
                        <MenuItem value={"Living Room"}>Living Room</MenuItem>
                        <MenuItem value={"Dining Room"}>Dining Room</MenuItem>
                        <MenuItem value={"Office"}>Office</MenuItem>
                        <MenuItem value={"Studying"}>Studying</MenuItem>
                        <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
                        <MenuItem value={"Bedroom"}>Bedroom</MenuItem>
                        <MenuItem value={"Dressing"}>Dressing</MenuItem>                        
                 </Select>
               </FormControl>
              </Stack>          
            </Stack>

            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>               
               <FormControl fullWidth className="newprodname  w-[25.5rem] ml-4">
               <InputLabel id="demo-simple-select-label" >Sub Category</InputLabel>
                <Select required color="secondary"

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subCategory}
                    label="subCategory"
                    onChange={handleSubCategoryChange}                    
                    error = {!subCategory}  >
                    <MenuItem value={"Sofas"}>Sofas</MenuItem>
                    <MenuItem value={"L Shape Sofas"}>L Shape Sofas</MenuItem>
                    <MenuItem value={"Coffee Tables"}>Coffee Tables</MenuItem>
                    <MenuItem value={"Side Stools"}>Side Stools</MenuItem>
                    <MenuItem value={"Dining Tables"}>Dining Tables</MenuItem>
                    <MenuItem value={"Dining Chairs"}>Dining Chairs</MenuItem>
                    <MenuItem value={"Director Tables"}>Director Tables</MenuItem>
                    <MenuItem value={"Manager Tables"}>Manager Tables</MenuItem>
                    <MenuItem value={"Conference Tables"}>Conference Tables</MenuItem>
                    <MenuItem value={"Reception Counters"}>Reception Counters</MenuItem>
                    <MenuItem value={"Workstations"}>Workstations</MenuItem>
                    <MenuItem value={"Study Tables"}>Study Tables</MenuItem>
                    <MenuItem value={"Book Shelves"}>Book Shelves</MenuItem>
                    <MenuItem value={"Beds"}>Beds</MenuItem>
                    <MenuItem value={"Bunk Beds & Pullout Beds"}>Bunk Beds & Pullout Beds</MenuItem>
                    <MenuItem value={"Spring mattresses"}>Spring mattresses</MenuItem>
                    <MenuItem value={"Wardrobes"}>Wardrobes</MenuItem>
                    <MenuItem value={"Dressing Tables"}>Dressing Tables</MenuItem>
                    <MenuItem value={"Shoe Racks"}> Shoe Racks</MenuItem>
                    <MenuItem value={"Towel Racks"}> Towel Racks</MenuItem>
                 </Select>
               </FormControl>
              </Stack>          
            </Stack>

          </div>

          <div className=" flex items-center ">              
            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>               
               <FormControl fullWidth className="newprodname  w-[25.5rem] ml-52">
               <InputLabel id="demo-simple-select-label" >Material </InputLabel>
                <Select required color="secondary"
                
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={material}
                    label="material"
                    onChange={handleMaterialChange}
                    error = {!material}  >
                        <MenuItem value={"Teak"}>Teak</MenuItem>
                        <MenuItem value={"Nadun"}>Nadun</MenuItem>
                        <MenuItem value={"Burutha"}>Burutha</MenuItem>
                        <MenuItem value={"Mahogany"}>Mahogany</MenuItem>
                        <MenuItem value={"Jack"}>Jack</MenuItem>
                        <MenuItem value={"Kohomba"}>Kohomba</MenuItem>
                        <MenuItem value={"Marble"}>Marble</MenuItem>
                        <MenuItem value={"Iron"}>Iron</MenuItem>
                        <MenuItem value={"Aluminium"}>Aluminium</MenuItem>
                        <MenuItem value={"Polyester"}>Polyester</MenuItem>
                        <MenuItem value={"Plastic"}>Plastic</MenuItem>
                 </Select>
               </FormControl>
              </Stack>          
            </Stack>


            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>               
               <FormControl fullWidth className="newprodname  w-[25.5rem] ml-4">
               <InputLabel id="demo-simple-select-label" >Sub Material</InputLabel>
                <Select required color="secondary"
                
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subMaterial}
                    label="subMaterial"
                    onChange={handleSubMaterialChange}
                    error = {!subMaterial}  >
                        <MenuItem value={"Iron"}>Iron</MenuItem>
                        <MenuItem value={"Aluminium"}>Aluminium</MenuItem>
                        <MenuItem value={"Polyester"}>Polyester</MenuItem>
                        <MenuItem value={"Plastic"}>Plastic</MenuItem>
                        <MenuItem value={"Fabric"}>Fabric</MenuItem>
                 </Select>
               </FormControl>
              </Stack>          
            </Stack>

          </div>     


          <Stack className="h-20" spacing={2}>
              <Stack direction="row" spacing={4}>
               <TextField label='Supplier'  variant="outlined" color="secondary"  className="newprodname  w-[52rem] ml-52"
                  supplier = {supplier}
                  onChange={(ev) => {
                  setSupplier(ev.target.value);
                  console.log(ev.target.value);}}/> 
              </Stack>          
            </Stack>  


            <TextField
            fullWidth
            id="standard-select-category"
            select
            label="Category"
            value={category}
            onChange={handleChange}
            helperText="Please select category"
            variant="standard"
          >
            {/* {data.map((option, key) => (
              <MenuItem key={option.categoryName} value={option.categoryName}>
                {option.categoryName}
              </MenuItem>
            ))} */}
          </TextField>              

                {/* <input 
                  type="text"
                  className="h-14 w-[16rem] px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500  transition duration-200 peer focus:border-2  focus:ring-2 focus:ring-blue-500"
                  autocomplete="off"
                  placeholder="Discount"
                  onChange={(ev) => {
                    setDiscount(ev.target.value);
                    console.log(ev.target.value);
                  }}/>      */}
          
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
          </div>

        


          <div className="imageupload mt-12 mx-60 mb-24 flex items-center gap-5 ">
            <div className="box-border border-black container flex flex-wrap border-opacity-50 h-60 w-[28rem] p-4 border-2 grid-cols-4">
             {
               images64.map((image)=>{
                  return ( 
                  <img className="h-16 w-16 object-cover "
                  alt=""
                  src={image} />
                  )
                })
              }
            </div>
            <form class="flex items-center space-x-6">

              <label class="block">
                <span class="sr-only">Choose photo</span>
                <input
                  multiple
                  type="file"
                  id="fileInput"
                  // onClick={handleImages}
                  onChange={handleImage}
                  class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0   file:text-sm file:font-semibold  file:bg-red-100 file:text-violet-700 hover:file:bg-green-200 "
                />
              </label>
            </form>
          </div> 

          <div className="imageupload mt-12 mx-60 mb-24 flex items-center gap-5 ">
            
            <form class="flex items-center space-x-6">
              <div class="shrink-0">
                <img
                  className="h-52 w-52 object-cover mr-11 border-2 border-[#f3f3f3] "
                  alt=""
                  src={image64}
                />
              </div>

              <label class="block">
                <span class="sr-only">Choose photo</span>
                <input
                  multiple
                  type="file"
                  id="fileInput"                  
                  onChange={handleMainImage}
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

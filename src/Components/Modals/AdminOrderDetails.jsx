import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stack, TextField } from '@mui/material';
import React from 'react';

const AdminOrderDetails = ({openOrderDetails,closeOrderDetails}) => {    
    if(!openOrderDetails) return null

  return (

    <div className='w-full h-auto right-0 left-0 top-16 bottom-0 fixed bg-gradient-to-r bg-slate-800 bg-opacity-80 overflow-auto'>
        <div className='mt-6 left-[55rem] top-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed w-[1100px] h-[600px] backdrop-blur-md items-center justify-center rounded-lg  bg-white'>

        <button className=' px-[0.5rem] py-[0.125rem] left-[67.3rem] top-6 transform -translate-x-1/2 -translate-y-1/2 fixed border-2 text-white rounded-lg text-sm font-medium border-red-500 bg-red-500  ext-white hover:border-red-700 hover:bg-red-700 '   
        onClick={closeOrderDetails}>
                <FontAwesomeIcon icon={faXmark} className='fill-white' > </FontAwesomeIcon>
        </button>

        
      <div className="Imagessection w-[50%]">
        <div className="MainImage items-center h-[600px] ">
          <img
            className="bg-center h-[400px] bg-cover mt-20 mx-auto"
            src="../Images/prod7.jpg"
            alt=""
          />
        </div>
        <div className="smallImagesSLider mx-auto w-[50%] flex">
          <img
            className="bg-center bg-contain border-2 border-black"
            src=""
            alt=""
          />
          <img
            className="bg-center bg-contain border-2 border-black"
            src="../Images/prod3.png"
            alt=""
          />
          <img
            className="bg-center bg-contain border-2 border-black "
            // src="../Images/prod3.png"
            alt=""
          />
        </div>
      </div>

      <div className="information h-full w-[50%]">
        <div className="text-black text-left  text-4xl font-poppins font-semibold  mt-20">
       
     fcfyucy
       {/* {product.newprodname} */}
       </div>
        <div className="ratings flex text-left mt-2 ">
          {/* <Ratings review={4} */}
          {/* /> */}
        
          <p className="font-Manrope font-semibold text-[#2F2D3A] items-center ml-5 mt-[0.1rem]">
            (15 Reviews)
          </p>
        </div>

        <div className="price text-xl font-medium text-[#ff0000]">78520
          {/* Rs {product.price} */}
         </div>

      <div className="mr-14">
          <p className="text-justify font-Manrope font-normal text-base ">
          {/* {product.description} */}
          </p>
      </div>

      <div className="AddtoCartButton mt-8 ">
        <a href="/myshoppingcart">
          <button  className="border-2  border-black rounded-none w-[92%] h-[50px] font-sans font-normal text-base text-white bg-black hover:text-white  hover:border-[#2c2c2c] hover:bg-[#2c2c2c]" 
        >
            <p> ADD TO CART</p>
          </button>
        </a> 
        </div>


        <div className="FavBtn mt-4 ">
          <button className="border-2 border-black rounded-none  w-[92%] h-[50px] font-sans font-normal text-base hover:text-white hover:border-[#f63f3f] hover:bg-[#f63f3f]">
            {" "}
            <p> ADD TO FAVORITES</p>{" "}
          </button>
        </div>
      </div>
    
          <h1 className='text-[27px] font-bold text-black font-Pragati-Narrow flex justify-center mt-16'> L O G I N</h1>
          <p className='text-sm flex justify-center mt-16 font-Poppins'>Please enter your e-mail and password</p>


          <Stack className="h-[4.5rem] w-[85%] mt-11 mx-auto" spacing={2}>
              <Stack direction="row" spacing={4}>
               <TextField label='Email'required  variant="outlined" color="secondary"  className="font-Pragati-Narrow w-[510px]"
                  // newprodname = {newprodname}
                  // onChange={(ev) => {
                  // setNewprodname(ev.target.value);
                  // console.log(ev.target.value);}}
                  // error = {! newprodname}
                  /> 
              </Stack>          
            </Stack> 

            <Stack className="h-20  w-[85%] mt-2 mx-auto" spacing={2}>
              <Stack direction="row" spacing={4}>
               <TextField label='Password'required  variant="outlined" color="secondary"  className="font-Pragati-Narrow  w-[510px]"
                
                  // newprodname = {newprodname}
                  // onChange={(ev) => {
                  // setNewprodname(ev.target.value);
                  // console.log(ev.target.value);}}
                  // error = {! newprodname}
                  /> 
              </Stack>          
            </Stack> 

          <div className='flex justify-center'>
            <button className="w-[425px] mt-10 border-2 border-black bg-black text-white  px-16 py-[0.75rem] font-sans font-normal text-lg hover:border-green-600 hover:bg-green-600 rounded-lg ">
            <p className='font-Pragati-Narrow '> L O G I N</p>
            </button>
          </div>

          
          <p className='text-sm flex justify-center mt-4 font-Poppins'>Don't have an account?  
          {/* code for a space */}
          &nbsp;
          <a href="/Contactus"  className='underline underline-offset-4 text-[#B05C0D]'> Create one </a>
          </p>

        </div>

    </div>
  )
}

export default AdminOrderDetails
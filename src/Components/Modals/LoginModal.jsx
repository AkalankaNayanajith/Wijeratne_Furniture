import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stack, TextField } from '@mui/material';
import React from 'react';

const LoginModal = ({openLoginM,closeLoginM}) => {    
    if(!openLoginM) return null

  return (

    <div className='w-full h-auto right-0 left-0 top-16 bottom-0 fixed bg-gradient-to-r from-green-400 to-blue-500 bg-opacity-100 overflow-auto z-50 '>
        <div className='mt-6 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed w-[500px] h-[600px] backdrop-blur-md items-center justify-center rounded-lg  bg-white'>

        <button className=' px-[0.5rem] py-[0.125rem] left-[29.6rem] top-6 transform -translate-x-1/2 -translate-y-1/2 b fixed border-2 text-white rounded-lg text-sm font-medium border-red-500 bg-red-500  ext-white hover:border-red-700 hover:bg-red-700 '   onClick={closeLoginM}>
                <FontAwesomeIcon icon={faXmark} className='fill-white' > </FontAwesomeIcon>
        </button>

          
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

          
          <p className='text-sm flex justify-center mt-4 font-Poppins text-black'>Don't have an account?  
          {/* code for a space */}
          &nbsp;
          <a href="/Contactus"  className='underline underline-offset-4 text-[#B05C0D]'> Create one </a>
          </p>

        </div>

    </div>
  )
}

export default LoginModal
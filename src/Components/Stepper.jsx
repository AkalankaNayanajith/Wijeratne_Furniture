import { Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const Stepper = () => {
  const [activePage, setActivePage] = useState(1);

  const handleNext = () => {
    setActivePage(activePage + 1);
  };

  const handlePrevious = () => {
    setActivePage(activePage - 1);
  };

  return (
    <div className="w-1200 h-500 border-black p-8">
      <div className="flex justify-between items-center">
        <div
          className={`w-1/3 h-px ${
            activePage >= 1 ? 'bg-green-500' : 'bg-gray-400'
          }`}
        ></div>
        <div
          className={`w-1/3 h-px ${
            activePage >= 2 ? 'bg-green-500' : 'bg-gray-400'
          }`}
        ></div>
        <div
          className={`w-1/3 h-px ${
            activePage >= 3 ? 'bg-green-500' : 'bg-gray-400'
          }`}
        ></div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            activePage >= 1 ? 'bg-green-500' : 'bg-gray-400'
          }`}
        >
          <span className="text-white text-xs">1</span>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            activePage >= 2 ? 'bg-green-500' : 'bg-gray-400'
          }`}
        >
          <span className="text-white text-xs">2</span>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            activePage >= 3 ? 'bg-green-500' : 'bg-gray-400'
          }`}
        >
          <span className="text-white text-xs">3</span>
        </div>
      </div>
      <div className="mt-8">
        {activePage === 1 && (
        <div>
            <Stack className="h-20 mt-6" spacing={2}>
            <Stack direction="row" spacing={4}>
            <TextField label='Order Name (e.g:- 20 school chairs)' required  variant="outlined" color="secondary"  className="newordername  w-[52rem] ml-52"
               /> 
            </Stack>          
          </Stack>
             
            <Stack className="h-20" spacing={1}>
              <Stack direction="row" spacing={1}>
               <TextField label='Material' required variant="outlined" color="secondary"  className="material  w-[25.5rem] ml-52" /> 
              </Stack>          
            </Stack>

            

          <button
          className="px-4 py-2 mr-4 bg-blue-500 text-white rounded"
          onClick={handlePrevious}
        >
          Previous
        </button>

        <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleNext}
          >
            Next
          </button>


        </div>
          
        )}
        {activePage === 2 && (
          <div>
          <Stack className="h-20 mt-6" spacing={2}>
          <Stack direction="row" spacing={4}>
          <TextField label='Order Name (e.g:- 20 school chairs)' required  variant="outlined" color="secondary"  className="newordername  w-[52rem] ml-52"
             /> 
          </Stack>          
        </Stack>
           
          <Stack className="h-20" spacing={1}>
            <Stack direction="row" spacing={1}>
             <TextField label='Material' required variant="outlined" color="secondary"  className="material  w-[25.5rem] ml-52" /> 
            </Stack>          
          </Stack>

          

        <button
        className="px-4 py-2 mr-4 bg-blue-500 text-white rounded"
        onClick={handlePrevious}
      >
        Previous
      </button>

      <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleNext}
        >
          Next
        </button>


      </div>

          
        )}
        {activePage === 3 && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleNext}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;

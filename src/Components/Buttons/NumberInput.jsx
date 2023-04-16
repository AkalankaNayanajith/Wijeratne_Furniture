import React, { useState } from "react";

function NumberInputButton() {
  const [value, setValue] = useState(1);

  const handleDecrease = () => {
    if (value > 1){ 
    setValue(value - 1);}
    else {setValue (value) };
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

//   const HandleOnChange = (value) => {
//     setItemTotal(count* price);
//     localStorage.setItem("total", value* price );
//     localStorage.setItem("count", value)
// }

  return (
    <div className="flex items-center justify-center">
      <button
        className="rounded-l-md h-8 px-3 py-auto border bg-gray-500  text-white hover:bg-slate-700 focus:outline-none "
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        className="w-12 h-8 px-2 py-2 border-t border-b text-center bg-white text-black focus:outline-none  "
        type="number"
        value={value}
        min="1"    
        onChange={(event) => {
          setValue(event.target.value);
          // HandleOnChange(event.target.value)
        }}
      />
      <button
        className="rounded-r-md h-8 px-3 py-auto border  bg-gray-500 text-white hover:bg-slate-700 focus:outline-none "
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}

export default NumberInputButton;

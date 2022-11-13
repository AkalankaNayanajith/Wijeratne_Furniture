
import React from "react";

function CustomTextField({name}) {
  return (
    <label className="relative p-2">
      <input
        type="text"
        className="h-14 w-96 px-6 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-purple-600  transition duration-200 peer"
        autocomplete="off"
      />
      <span className="text-xl text-black text-opacity-80 absolute left-0 top-6 mx-4 px-2 transition-all duration-200 input-text cursor-text peer-focus:text-sm peer-focus:text-purple-600 peer-focus:-top-1 peer-focus:bg-white peer-focus:left-3">
       {name}
      </span>
    </label>
  );
}

export default CustomTextField;

import React from "react";

export default function InputButton() {
  return (
    <label className="relative">
      <input
        type="text"
        className="h-20 w-60 px-6 text-3xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-purple-600  transition duration-200 peer"
        autocomplete="off"
      />
      <span className="text-3xl text-black text-opacity-80 absolute left-0 top-4 mx-4 px-2 transition-all duration-200 input-text cursor-text peer-focus:text-sm peer-focus:text-purple-600 peer-focus:-top-4">
        Input
      </span>
    </label>
  );
}

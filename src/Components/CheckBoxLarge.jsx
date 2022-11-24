import React from 'react'

const CheckBoxLarge = () => {
  return (
    <label className="inline-flex items-center cursor-pointer">
    <input
      id="customCheckLogin"
      type="checkbox"
      className="form-checkbox border-0 rounded text-gray-800  w-5 h-5"
      style={{ transition: "all .15s ease" }}
    />  </label>
  )
}

export default CheckBoxLarge
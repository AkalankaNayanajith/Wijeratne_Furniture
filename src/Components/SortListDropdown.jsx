import React from "react";

const SortListDropdown = () => {
  return (
 
    <select id="Sort" name="Sort" className=" bg-[#DFDFDF] text-lg  h-14 w-full p-4 rounded-none outline-none border-[#DBD9D9] border-2 focus:border-2 focus:border-[#c2c1c1] focus:ring-2 focus:ring-[#c2c1c1]  ">
                    <option value="Best Selling">Best Selling</option>
                    <option value="Featured">Featured</option>
                    <option value="Alphabetically, A-Z">Alphabetically, A-Z </option>
                    <option value="Alphabetically, Z-A">Alphabetically, Z-A </option>
                    <option value="Date,New to Old">Date,New to Old</option>
                    <option value="Date,Old to New">Date,Old to New</option>
                    <option value="Price, High to Low">Price, High to Low</option>
                    <option value="Price, Low to High">Price, Low to High</option>
        </select>
  
  );
};

export default SortListDropdown;

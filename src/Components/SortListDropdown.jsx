import React from "react";

const SortListDropdown = () => {
  return (
    <>
      
      <button id="dropdownDefault" dataDropdownToggle="dropdown" className="text-black bg-[#DFDFDF] hover:bg-blue-800 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-none text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-[#DFDFDF] dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button 
      
      <svg className="ml-2 w-4 h-4" ariaHidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
          </path>
     </svg>
          
          </button>

<div id="dropdown" className=" z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute">
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" ariaLabelledby="dropdownDefault">
      <li>
        <a href="wwww" className="block py-2 px-4 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="www" className="block py-2 px-4 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="ww" className="block py-2 px-4 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="ww" className="block py-2 px-4 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>

</div>
    </>
  );
};

export default SortListDropdown;

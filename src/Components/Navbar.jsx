import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping,faBars,faXmark, faSearch} from '@fortawesome/free-solid-svg-icons'
import {faHeart,faUser} from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {                             //Arrow function
    const [nav, setNav]= useState(false)          //useState default value is false

    const handleNav = () => {                   //when we click on our menu, handleNav function should be executed
      setNav(!nav)                             //setNav to its opposite value of current value---that means when we click the value must be changed
    }


  return (    
    <div className='text-white flex justify-between  max-w-[1500px] h-20 px-5 mx-auto items-center' >     
      <div> <a href='www.google.com'> <h1 className='text-4xl font-praise '> Wijeratne</h1></a> </div>
      <ul className='hidden md:flex'>
          <li className='p-5'>Hot Deals !</li>
          <li className='p-5'>Products</li>
          <li className='p-5'>My Orders</li>
          <li className='p-5'>Customized Orders</li>
          <li className='p-5'>Track My Order</li>
        </ul>

      <div>
        <ul className='hidden md:flex'>
          <li className='p-4'><FontAwesomeIcon icon={faSearch} className='fill-white' > </FontAwesomeIcon> </li>
          <li className='p-4'><FontAwesomeIcon icon={faUser} className='fill-white' > </FontAwesomeIcon> </li>
          <li className='p-4'><FontAwesomeIcon icon={faHeart} className='fill-white' > </FontAwesomeIcon></li>
          <li className='p-4'><FontAwesomeIcon icon={faCartShopping} className='fill-white' > </FontAwesomeIcon></li>
        </ul>
      </div>
      

        <div onClick = {handleNav} className='block md:hidden'>
          {!nav ? <FontAwesomeIcon icon={faXmark} />  : <FontAwesomeIcon icon={faBars} /> }  
          {/* if the nav value is true then show x mark if not show menu mark */}
        </div>


        <div className= {! nav ? 'fixed left-0 top-16 w-[60%] h-full border-r border-r-gray-900  bg-[#000300] ease-in duration-500 block md:hidden': 'fixed ease-out duration-1000 left-[-135%]'}> 
        {/* if the nav value is true then show menu, if not hide menu to left */}

          <ul className='pt-0 uppercase p-4 block md:hidden'>
            <li className='p-4 border-b border-gray-600'>Hot Deals !</li>
            <li className='p-4 border-b border-gray-600'>Products</li>
            <li className='p-4 border-b border-gray-600'>My Orders</li>
            <li className='p-4 border-b border-gray-600'>Customized Orders</li>
            <li className='p-4 border-b border-gray-600'>Track My Order</li>
            <li className='p-4 border-b border-gray-600'>Favourites</li>
            <li className='p-4 border-b border-gray-600'>Search</li>
            <li className='p-4 '>My Account</li>
            <li className='p-4 '>Settings with icon </li>
            <li className='p-4 '>Logout with icon </li>
          </ul> 
        </div>

    </div>
   
       
  )
}

export default Navbar

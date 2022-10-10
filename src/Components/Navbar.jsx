import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping,faBars,faXmark, faSearch} from '@fortawesome/free-solid-svg-icons'
import {faHeart,faUser} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {                             //Arrow function
    const [nav, setNav]= useState(false)          //useState default value is false

    const handleNav = () => {                   //when we click on our menu, handleNav function should be executed
      setNav(!nav)                             //setNav to its opposite value of current value---that means when we click the value must be changed
    }


  return (    
    <div className='text-white flex justify-between  bg-[#000300] max-w-full h-20 px-5 mx-0 items-center' >     
      <div> <Link to='/'> <h1 className='text-4xl font-praise '> Wijeratne</h1></Link> </div>
      <ul className='hidden md:flex '>
          <Link to='/hotdeals' className='p-5 cursor-pointer'> Hot Deals ! </Link> 
          <Link to='/Products' className='p-5 cursor-pointer'> Products</Link>
          <Link to='/myorders' className='p-5 cursor-pointer'> My Orders</Link>
          <Link to='/customizedorders' className='p-5 cursor-pointer text-center'> Customized Orders </Link>
          <Link to='/trackmyorder' className='p-5 cursor-pointer'> Track My Order</Link>
        </ul>

      <div>
        <ul className='hidden md:flex'>
          <li className='p-4 cursor-pointer'><FontAwesomeIcon icon={faSearch} className='fill-white' > </FontAwesomeIcon> </li>
          <li className='p-4 cursor-pointer'><FontAwesomeIcon icon={faUser} className='fill-white' > </FontAwesomeIcon> </li>
          <li className='p-4 cursor-pointer'><FontAwesomeIcon icon={faHeart} className='fill-white' > </FontAwesomeIcon></li>
          {/* <li className='p-4 cursor-pointer'><FontAwesomeIcon icon={faCartShopping} className='fill-white' > </FontAwesomeIcon></li> */}
          <button className='p-4 cursor-pointer'><FontAwesomeIcon icon={faCartShopping} className='fill-white' > </FontAwesomeIcon></button>
        </ul>
      </div>
      

        <div onClick = {handleNav} className='block md:hidden'>
          {!nav ? <FontAwesomeIcon icon={faXmark} />  : <FontAwesomeIcon icon={faBars} /> }  
          {/* if the nav value is true then show x mark if not show menu mark */}
        </div>


        <div className= {! nav ? 'fixed left-0 top-16 w-[60%] h-full border-r z-50 border-r-gray-900  bg-[#000300] ease-in duration-500 block md:hidden': 'fixed ease-out duration-1000 left-[-135%]'}> 
        {/* if the nav value is true then show menu, if not hide menu to left */}

          <ul className='pt-0 uppercase p-4 flex flex-col md:hidden'>
            <li className='p-4 border-b cursor-pointer border-gray-600'>Hot Deals !</li>
            <li className='p-4 border-b cursor-pointer border-gray-600'> <Link to='/hotdeals' className=' cursor-pointer'> Hot Deals !
            </Link></li>
            <Link to='/hotdeals' className=' cursor-pointer p-4 border-b  border-gray-600 h-full w-full'> Hot Deals !
            </Link>
            <li className='p-4 border-b cursor-pointer border-gray-600'>Products</li>
            <li className='p-4 border-b cursor-pointer border-gray-600'>My Orders</li>
            <li className='p-4 border-b cursor-pointer border-gray-600'>Customized Orders</li>
            <li className='p-4 border-b cursor-pointer border-gray-600'>Track My Order</li>
            <li className='p-4 border-b cursor-pointer border-gray-600'>Favourites</li>
            <li className='p-4 border-b cursor-pointer border-gray-600'>Search</li>
            <li className='p-4 '>My Account</li>
            <li className='p-4 '>Settings with icon </li>
            <li className='p-4 '>Logout with icon </li>
          </ul> 
        </div>

    </div>
   
       
  )
}

export default Navbar

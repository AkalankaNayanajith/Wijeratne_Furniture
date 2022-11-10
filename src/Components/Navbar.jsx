import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown, faBars, faCartShopping, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {                             //Arrow function
    const [nav, setNav]= useState(false)          //useState default value is false

    const handleNav = () => {                   //when we click on our menu, handleNav function should be executed
      setNav(!nav)                             //setNav to its opposite value of current value---that means when we click the value must be changed
    }

    
    
    const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: 12,
        top: 16,
        
        padding: '0 4px',
      },
    }));
  return (    
    <div className='text-white flex justify-between  bg-[#000300] max-w-full h-18 px-5 mx-0 items-center' >     
      <div> <Link to='/'> <h1 className='text-4xl font-praise hover:text-[#B05C0D] '> Wijeratne</h1></Link> </div>
      <ul className='hidden md:flex '>
          <Link to='/hotdeals' className='p-5 cursor-pointer  text-base hover:text-cyan-500'> Hot Deals ! </Link> 
          <Link to='/Products' className='p-5 cursor-pointer text-base group hover:text-cyan-500'> Products <FontAwesomeIcon icon={faAngleDown} className='fill-white items-center text-base px-1 group-hover:rotate-180' ></FontAwesomeIcon> </Link>
          <Link to='/myorders' className='p-5 cursor-pointer text-base hover:text-cyan-500'> My Orders</Link>
          <Link to='/customizedorders' className='p-5 cursor-pointer text-base text-center hover:text-cyan-500'> Customized Orders </Link>
          <Link to='/trackmyorder' className='p-5 cursor-pointer text-base hover:text-cyan-500 '> Track My Order</Link>
        </ul>

      <div>
        <ul className='hidden md:flex'>
          <li className='p-4 cursor-pointer text-base hover:text-cyan-500'><FontAwesomeIcon icon={faSearch} className='fill-white' > </FontAwesomeIcon> </li>
          <button className='p-4 cursor-pointer text-base hover:text-cyan-500'><FontAwesomeIcon icon={faUser} className='fill-white ' > </FontAwesomeIcon> </button>  
          <StyledBadge className="cart" badgeContent={78} color="error"> <button className='p-4 cursor-pointer text-base hover:text-cyan-500'><FontAwesomeIcon icon={faHeart} className='fill-white' > </FontAwesomeIcon></button>  </StyledBadge>
          {/* <li className='p-4 cursor-pointer'><FontAwesomeIcon icon={faCartShopping} className='fill-white' > </FontAwesomeIcon></li> */}
          <StyledBadge className="cart" color="error" badgeContent={10}>
             <button className='p-4 cursor-pointer text-base hover:text-cyan-500'><FontAwesomeIcon icon={faCartShopping} className='fill-white ' > </FontAwesomeIcon></button>
             </StyledBadge>
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

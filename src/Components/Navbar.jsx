import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown, faBars, faCartShopping, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import CartModal from './Modals/CartModal'
import FavouritesModal from './Modals/FavouritesModal'
import LoginModal from "./Modals/LoginModal";

const Navbar = () => {                             //Arrow function
    const [nav, setNav]= useState(false)          //useState default value is false
    const [productcardss, setProductcardss]= useState([])          
    const [searchProdName, setSearchProdName]= useState()       
    const [openLogin, setOpenLogin] = React.useState(false);  

    useEffect(() => {
      console.log(productcardss);
    }, [productcardss])
    
    
    const navigate = useNavigate;


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

    
  const [openCartModal, setOpenCartModal] = React.useState(false);
  const [openFavouritesModal, setOpenFavouritesModal] = React.useState(false);
  
  const handleOnChangeSearchStr = (event) => {
    setSearchProdName(event.target.value)
   }

  function searchCLick(searchProdName){    
   navigate(`/SearchPage?query=${searchProdName}`)
  }
  


  return (    
    <div className='text-white flex justify-between  bg-[#000300] max-w-full h-18 px-5 mx-0 items-center' >     
      <div> <Link to='/'> <h1 className='text-4xl font-praise hover:text-[#B05C0D] '> Wijeratne</h1></Link> </div>
      <ul className='hidden md:flex '>
          <Link to='/hotdeals' className='p-5 pl-10 cursor-pointer  text-base hover:text-cyan-500 focus:text-cyan-500'> Hot Deals 🔥 </Link> 
          <Link to='/Products' className='p-5 cursor-pointer text-base group hover:text-cyan-500 focus:text-cyan-500' > Products <FontAwesomeIcon icon={faAngleDown} className='fill-white items-center text-base px-1 group-hover:rotate-180 group-focus:rotate-180' ></FontAwesomeIcon> </Link>
          <Link to='/myorders' className='p-5 cursor-pointer text-base hover:text-cyan-500 focus:text-cyan-500'> My Orders</Link>
          <Link to='/customizedorders' className='p-5 cursor-pointer text-base text-center hover:text-cyan-500 focus:text-cyan-500'> Customized Orders </Link>
          {/* <Link to='/trackmyorder' className='p-5 cursor-pointer text-base hover:text-cyan-500  focus:text-cyan-500'> Track My Order</Link> */}
        </ul>


        <div className='relative'>
          <input
            type='text'
            placeholder='Search...'
            className='px-4 py-2 rounded-md border-2 text-black border-gray-200 focus:outline-none focus:border-gray-400 pl-4' onChange={handleOnChangeSearchStr} />
          <button className='absolute inset-y-0 right-0 px-4 cursor-pointer text-base text-black hover:text-cyan-500 focus:text-cyan-500'onClick={() => {
              searchCLick(searchProdName);
              }}>
            <FontAwesomeIcon onClick={() => {
              searchCLick(searchProdName);
              console.log("lol"); 
              }} icon={faSearch} className='fill-current' />
          </button>
        </div>


      <div>
        <ul className='hidden md:flex'>

        <li className='relative'>
            <button
              className='p-4 cursor-pointer text-base rounded-lg bg-orange-500 hover:bg-cyan-600 focus:bg-cyan-600' onClick={()=> setOpenLogin(true)}> Log in
            </button>
         </li>          
          {/* <Link to='/logintest' className='p-4 cursor-pointer text-base hover:text-cyan-500 focus:text-cyan-500'><FontAwesomeIcon icon={faUser} className='fill-white ' > </FontAwesomeIcon> </Link>   */}
          <StyledBadge className="cart" badgeContent={0} color="error"> 
            <button className='p-4 cursor-pointer text-base hover:text-cyan-500 focus:text-cyan-500' onClick={()=> setOpenFavouritesModal(true)} >
              <FontAwesomeIcon icon={faHeart} className='fill-white' > </FontAwesomeIcon></button>  </StyledBadge>
          {/* <li className='p-4 cursor-pointer'><FontAwesomeIcon icon={faCartShopping} className='fill-white' > </FontAwesomeIcon></li> */}
          <StyledBadge className="cart" color="error" badgeContent={0}>
             <button className='p-4 cursor-pointer text-base hover:text-cyan-500 focus:text-cyan-500' onClick={()=> setOpenCartModal(true)}><FontAwesomeIcon icon={faCartShopping} className='fill-white ' > </FontAwesomeIcon></button>
             </StyledBadge>
        </ul>
      </div>


      
      <CartModal open={openCartModal} closeCartHandler={()=> setOpenCartModal(false)}/>
      <FavouritesModal openFav={openFavouritesModal} closeFavHandler={()=> setOpenFavouritesModal(false)}/>
      

        <div onClick = {handleNav} className='block md:hidden'>
          {!nav ? <FontAwesomeIcon icon={faXmark} />  : <FontAwesomeIcon icon={faBars} /> }  
          {/* if the nav value is true then show x mark if not show menu mark */}
        </div>


        <div className= {! nav ? 'fixed left-0 top-16 w-[60%] h-full border-r z-50 border-r-gray-900  bg-[#000300] ease-in duration-500 block md:hidden': 'fixed ease-out duration-1000 left-[-135%]'}> 
        {/* if the nav value is true then show menu, if not hide menu to left */}

          <ul className='pt-0 uppercase p-4 flex flex-col md:hidden'>
            <li className='p-4 border-b cursor-pointer border-gray-600'>Hot Deals !</li>
            <li className='p-4 border-b cursor-pointer border-gray-600'> <Link to='/hotdeals' className=' cursor-pointer'> 
            Hot Deals !</Link></li>
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

      
      <LoginModal openLoginM={openLogin} closeLoginM={()=> setOpenLogin(false)}/>



    </div>

    
   
       
  )
}

export default Navbar

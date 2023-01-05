import { faBoxesStacked, faChartLine, faChartPie, faFilter, faGlobe, faMoneyCheckDollar, faRightFromBracket, faSackDollar, faStar, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const CustomizedOrdersAction = () => {
  return (
    <>
    <div className='w-[20%] h-screen bg-[#051b32] fixed'>
            <div className='h-16'></div>            
            <Link to="/adminpanel" className="pt-[20px] cursor-pointer ">
                <div className='h-16 border-y-2 border-[#345378] text-white text-lg pl-12 text-left hover:cursor-pointer hover:bg-[#345378]  flex items-center'>          
                    <FontAwesomeIcon icon={faChartPie} className='fill-white pr-5' > </FontAwesomeIcon> Dashboard </div></Link> 

            <Link to="/adminpanel/adminorders" className="pt-[20px] cursor-pointer "> 
                <div className='h-16 border-b-2 border-[#345378] text-white text-lg pl-12 text-left hover:cursor-pointer hover:bg-[#345378]  flex items-center'>  
                    <FontAwesomeIcon icon={faSackDollar} className='fill-white pr-5' > </FontAwesomeIcon> Orders </div></Link>      

            <Link to="/adminpanel/admincustomorders" className="pt-[20px] cursor-pointer "> 
                <div className='h-16 border-b-2 border-[#345378] text-white text-lg pl-12 text-left hover:cursor-pointer  bg-[#345378]   flex items-center'>  
                    <FontAwesomeIcon icon={faMoneyCheckDollar} className='fill-white pr-5' > </FontAwesomeIcon> Customized Orders </div></Link> 

            <Link to="/adminpanel/adminproductpage" className="pt-[20px] cursor-pointer "> 
                <div className='h-16 border-b-2 border-[#345378] text-white text-lg pl-12 text-left hover:cursor-pointer hover:bg-[#345378] flex items-center'>  
                    <FontAwesomeIcon icon={faBoxesStacked} className='fill-white pr-5' > </FontAwesomeIcon> Products </div></Link> 

            <Link to="/adminpanel/admincategories" className="pt-[20px] cursor-pointer "> 
                <div className='h-16 border-b-2 border-[#345378] text-white text-lg pl-12 text-left hover:cursor-pointer hover:bg-[#345378]  flex items-center'>  
                    <FontAwesomeIcon icon={faFilter} className='fill-white pr-5' > </FontAwesomeIcon> Categories </div></Link> 

            <Link to="/adminpanel/adminuserpage" className="pt-[20px] cursor-pointer "> 
                <div className='h-16 border-b-2 border-[#345378] text-white text-lg pl-12 text-left hover:cursor-pointer hover:bg-[#345378]  flex items-center'>  
                    <FontAwesomeIcon icon={faUsers} className='fill-white pr-5' > </FontAwesomeIcon> Staff </div></Link> 

            <Link to="/adminpanel/adminsuppliers" className="pt-[20px] cursor-pointer "> 
                <div className='h-16 border-b-2 border-[#345378] text-white text-lg pl-12 text-left hover:cursor-pointer hover:bg-[#345378]  flex items-center'>  
                    <FontAwesomeIcon icon={faGlobe} className='fill-white pr-5' > </FontAwesomeIcon> Suppliers </div></Link> 

            <Link to="/adminpanel/adminreports" className="pt-[20px] cursor-pointer "> 
                <div className='h-16 border-b-2 border-[#345378] text-white text-lg pl-12 text-left hover:cursor-pointer hover:bg-[#345378]  flex items-center'>  
                    <FontAwesomeIcon icon={faChartLine} className='fill-white pr-5' > </FontAwesomeIcon> Reports </div></Link> 
            
            <Link to="/adminpanel/adminreviews" className="pt-[20px] cursor-pointer "> 
                <div className='h-16 border-b-2 border-[#345378] text-white text-lg pl-12 text-left hover:cursor-pointer hover:bg-[#345378]  flex items-center'>  
                    <FontAwesomeIcon icon={faStar} className='fill-white pr-5' > </FontAwesomeIcon> Reviews </div></Link> 

            <Link to="/adminlogin" className="pt-[20px] cursor-pointer "> 
                <div className='h-16 text-white text-lg pl-12 text-left hover:cursor-pointer hover:bg-[#345378]  flex items-center'>  
                    <FontAwesomeIcon icon={faRightFromBracket} className='fill-white pr-5' > </FontAwesomeIcon> Log Out </div></Link> 
        </div>
    
    </>
  )
}

export default CustomizedOrdersAction
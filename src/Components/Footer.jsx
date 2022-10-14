import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
  
  <>
    <div className='Footer justify-between w-[100%] h-[500px] flex  bg-[#DFDFDF]'>

      <div className='px-[40px]'>
        <a href='/'> <h1 className='text-4xl w-[35%] font-praise pt-[35px] hover:text-[#B05C0D]'> Wijeratne</h1></a>
        <p className='font-Manuale '> “We furnish the dreams !” </p>
        <div className='flex pt-16'><img className='object-scale-down pr-[10px]' src="../Images/Email.svg" alt="" />wijeratnefurniture@gmail.com</div>
        <div className='flex pt-2'><img className='object-scale-down pr-4 ' src="../Images/PhoneIcon.svg" alt="" />  077 919 3612</div>
        <div className='flex pt-2'><img className='object-scale-down pr-3 max-h-[24px]' src="../Images/GPS.svg" alt="" />  38/B <br/>
Ihala idibedda road,<br/>
Moratuwa </div>
      </div>

      <div className='w-[12%] pl-5'>          
          <h2 className='pt-[40px] font-bold'> Shop </h2>
            <ul className=' flex flex-col'>             
              <Link to="/products" className='pt-[20px] cursor-pointer'> All Products </Link>
              <Link to='/livingroom' className='pt-[20px] cursor-pointer'> Living Room </Link>
              <Link to='/diningroom' className='pt-[20px] cursor-pointer'> Dining Room</Link>
              <Link to='/pantry' className='pt-[20px] cursor-pointer'> Pantry </Link>            
              <Link to='/bedroom' className='pt-[20px] cursor-pointer'> Bed Room </Link>            
              <Link to='/hotdeals' className='pt-[20px] cursor-pointer'> Hot Deals! </Link>            
              <Link to='/newarrivals' className='pt-[20px] cursor-pointer'> New Arrivals </Link>            
            </ul>
      </div>

      <div className='w-[12%] pl-7'>
        <h2 className='pt-[40px] font-bold'> Links </h2>
            <ul className=' flex flex-col'>             
              <Link to="/" className='pt-[20px] cursor-pointer'> Home </Link>
              <Link to='/aboutus' className='pt-[20px] cursor-pointer'> About Us </Link>
              <Link to='/contactus' className='pt-[20px] cursor-pointer'> Contact </Link>
              <Link to='/myaccount' className='pt-[20px] cursor-pointer'> My Account </Link>            
            </ul>
      </div>


      <div className='w-[12%] pl-7'>
      <h2 className='pt-[40px] font-bold'> Help </h2>
            <ul className=' flex flex-col'>             
              <Link to="/trackmyorder" className='pt-[20px] cursor-pointer'> Track My Order </Link>
              <Link to='/termsofuse' className='pt-[20px] cursor-pointer'> Terms of Use </Link>
              <Link to='/privacypolicy' className='pt-[20px] cursor-pointer'> Privacy Policy </Link>
              <Link to='/refundpolicy' className='pt-[20px] cursor-pointer'> Refund Policy </Link>            
              <Link to='/faq' className='pt-[20px] cursor-pointer'> FAQs </Link>            
            </ul>         
      </div>

      <div className='w-[25%] pl-5'>
        <div> 
          <h2 className='pt-[40px] px-4 font-bold'> Sign up for exclusive offers ! </h2>
        </div>
        <div className='pt-6 px-4 w-full'>
        <input className='px-2 focus:outline-none rounded-none placeholder:text-[#181433]/20 h-10' type="text" placeholder='Your email address'/>
        <button className='bg-[#3734A9] rounded-none h-10 w-28 font-extralight text-[#DFDFDF]'> Subscribe</button>
        </div>

        <div className='px-4 pt-6 pb-5'>
          <p className='text-[10px]'> *  For more information on how we use your personal <br/> details please refer to our <a href="/PrivacyPolicy"  className='underline text-[#3734A9]'>Privacy Policy. </a> </p>
        </div>

        <div>
          <h2 className='px-4 font-bold pt-8'> Follow us on </h2>
        </div>

        <div className='hidden md:flex'>        
          <ul className='hidden md:flex'>          
          <li className='p-4'><a href='https://www.facebook.com'><img className='object-scale-down' src="../Images/Facebook.svg" alt="" /> </a> </li>
          <li className='p-4'><a href='https://www.instagram.com'><img className='object-scale-down' src="../Images/Instagram.svg" alt=""/> </a></li>
          <li className='p-4'><a href='https://www.youtube.com'><img className='object-scale-down' src="../Images/Youtube.svg" alt=""/>    </a></li>
          <li className='p-4'><a href='https://www.twitter.com'><img className='object-scale-down' src="../Images/Twitter.svg" alt=""/>    </a></li>          
          </ul>
        </div>
      </div>

    </div>

      <div className='h-0.5  w-full bg-[#dfdfdf]'><div className='w-[90%] h-full mx-auto bg-black'> </div>
      </div>

      <div>
          <p className='text-[#000300] text-center text-xs h-[40px] font-Manrope pt-3 bg-[#DFDFDF]'> Copyright @ Wijerathne Furniture 2022. All Rights Reserved. </p>
      </div>



  </>
    
  )
}

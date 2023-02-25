import React, { useEffect } from 'react'

export default function ContactUs() {
  useEffect(() => { 

    window.scrollTo(0, 0)})

  return (
   <>
   
    <div className='text-5xl text-center  w-full mt-[4rem] font-Pragati-Narrow'>Contact Us</div>
    
    <div className='h-[0.068rem] mt-5  w-full bg-white'>
      <div className='w-[3.2%] h-full mx-auto bg-black'> </div> 
    </div>

    <div className='faqcontent mx-auto mb-24 mt-[2rem] w-[47%]'>
        <div className='mt-[4rem] text-left'>
          <p className='w-full mt-6 text-[16px] text-justify'>Please fill out the form below, We're always happy to help! We will response you within <span className='font-bold'>24 hours.</span>  <br /><br />

          For specific order questions, please <span className='font-bold'> include your order number </span> which you would have received by email.Please note, if it's a shipping related question please read our <a href="/Faq"  className='underline underline-offset-4 text-[#B05C0D] font-semibold'>FAQs.</a> </p>
        </div>
    </div>
        </>
  )
}

import React, { useEffect } from 'react'

export default function FAQ() {

  useEffect(() => { 

    window.scrollTo(0, 0)})

  return (
    <>
    <div className='text-4xl text-center  w-full mt-[4rem] font-Pragati-Narrow'>FAQs </div>
    
    <div className='h-[0.068rem] mt-5  w-full bg-white'>
      <div className='w-[3.2%] h-full mx-auto bg-black'> </div> 
    </div>

    <div className='faqcontent mx-auto mb-24 mt-[2rem] w-[40%]'>
        <div className='mt-[4rem] text-left'>
          <p className='font-[650] w-full text-[16px] mt-6'> When Will My Order Ship? </p>
          <p className='w-full mt-6 text-[16px] text-justify'> Orders are usually processed and shipped within 3 working days of purchase. </p>

          <p className='font-[650] w-full text-[16px] mt-6'> How Long Does Shipping Take? </p>
          <p className='w-full mt-6 text-[16px] text-justify'> Shipping times vary as we do ship worldwide from different fulfillment centers based on your location. </p>

          <p className='font-[650] w-full text-[16px] mt-6'> Estimated Delivery Time: </p>
          <p className='w-full mt-6 text-[16px] text-justify'> Your tracking number will be updated 3-7 days after your order has been shipped.     </p>

          <p className='font-[650] w-full text-[16px] mt-6'> How Do I Cancel An Order? </p>
          <p className='w-full mt-6 text-[16px] text-justify'> We are only able to cancel orders within the first 12 hours after the order is placed. After that the order has most likely been processed and is preparing for shipment or has been shipped. Once this takes effect, it's out of our hands. We apologize for any inconvenience this may cause, but we pride ourselves on prompt service and this includes getting your orders out as fast as possible. </p>

          <p className='font-[650] w-full text-[16px] mt-6'> What Is Your Return Policy? </p>
          <p className='w-full mt-6 text-[16px] text-justify'> If there’s something wrong with your order (defective product, incorrect order, damaged order etc.), please contact us within 7 days from receiving your order and we’ll be happy to assist you reviewing the case and if it is approved we will be sending a replacement. Please do not return anything before we review the case, our customer service team will review the request and will send further instructions. Beauty Reina™ reserves the right to deny any return request.
          <br/><br/>
          You will be responsible for paying for your own shipping costs for returning your item. Original shipping charges and 10% restocking fee          are not refundable.</p>

          <p className='font-[650] w-full text-[16px] mt-6'> What Methods of Payment Do You Accept?</p>
            <p className='w-full mt-6 text-[16px] text-justify'> We accept PayPal, Credit Card (Visa, MasterCard, Discover, and American Express) and Debit Card </p>

          <p className='font-[650] w-full text-[16px] mt-6'> Need additional help? <a href="/Contactus"  className='underline underline-offset-4 text-[#B05C0D]'>Contact Us </a></p>
        </div>
    </div>
    </>
  )
}

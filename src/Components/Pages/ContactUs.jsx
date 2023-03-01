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

    <div className='mx-auto mb-24 mt-[0.6rem] w-[87%]'>
        <div className='mt-[4rem] text-left'>
          <div className='flex w-full mt-4'>

            {/* google map  */}
              <iframe className='rounded-lg shadow-lg'src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.9504550912454!2d79.      8965035!3d6.7819127!3m2!1i1024!2i768!4f13.      1!3m3!1m2!1s0x3ae2450d4c94b61f%3A0x1f26f09542ac90ac!2s39%20Ihala%20Indibedda%20Rd%2C%20Moratuwa%2010400!5e0!3m2!1sen!2slk!4v1677661     711181!5m2!1sen!2slk" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"      title="Iframe Example"></iframe>


              {/* paragraph  */}
            <div className='w-[62%] ml-24'>
                <p className=' text-[16px] text-justify'>Please Email or make a phone call for any questions or inquiries, We're always happy to help! We will response you within <span className='font-bold'>24 hours.</span><br /><br />
                You can contact us in person at our showroom.  <br /><br />

                For specific order questions, please <span className='font-bold'> include your order number </span> which you would have received by email.Please note, if it's a shipping related question please read our <a href="/Faq"  className='underline     underline-offset-4 text-[#B05C0D] font-semibold'>FAQs.</a> </p>

                {/* contact info  */}
                <div className='flex pt-24 justify-center'>
                <div className="flex text-base mr-6">
                  <img className="object-scale-down pr-5 max-h-[28px]" src="../Images/PhoneIcon.svg" alt="" />
                  Mr. M.B Wijeratne <br />
                  077 919 3612
                </div>
                <div className="flex text-base ml-6">
                  <img className="object-scale-down pr-4 max-h-[24px]" src="../Images/GPS.svg" alt="" />
                  38/B <br />
                  Ihala idibedda road,<br />
                  Moratuwa
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

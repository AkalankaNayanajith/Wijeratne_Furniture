import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const TrackMyOrder = () => {
  return (
    <div className='mt-36 ml-[35rem] '>
      <PayPalScriptProvider options={{"client-id" : "AXbCCGoZ2_0grW1ZOhd5nsFnSUQQq-oCQktBVeuXLAIUUI1PtjUjwZABeWddxfvW3E0QdjGyl2_GWqkq"}}>
        <PayPalButtons createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: "Rs",
                                        value: "99.99",
                                    },
                                },
                            ],
                        })
                      }} 
                      >
        </PayPalButtons>
      </PayPalScriptProvider>
    </div>
  )
}

export default TrackMyOrder
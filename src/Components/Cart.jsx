import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping,faBars,faXmark, faSearch} from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    const [cartt, setCartt]= useState(false)          //useState default value is false

    const handleCart = () => {                   //when we click on our menu, handleNav function should be executed
      setCartt(!cartt)                             //setNav to its opposite value of current value---that means when we click the value must be changed
    }

  return (
<>

<div>
    <div onClick = {handleCart} className=''>
          {!cartt ? <FontAwesomeIcon icon={faXmark} />  : <FontAwesomeIcon icon={faBars} /> }  
          {/* if the cart value is true then show x mark if not show menu mark */}
    </div>

    <div className= {! cartt ? 'fixed left-0 top-16 w-[60%] h-full border-r z-50 border-r-gray-900  bg-[#000300] ease-in duration-500' : 'fixed ease-out duration-1000 left-[-135%]'}>
    </div>


    <div>Cart</div>

</div>
   
</>
  )
}

import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard';
 
export default function SearchPage({review,newprodname,prodid, category,description, quantity,dicount,price,color,material,country,image64,}) {
  const [productcardss, setProductcardss] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/product/getAll")
      .then((response) => response.json())
      .then((result) => {
        setProductcardss(result);
      });
  }, []);

function OneViewData (newprodname,price,image64,images64,prodid,review,description ){
    localStorage.setItem('Name', newprodname);
    localStorage.setItem('Price', price);
    localStorage.setItem('Image', image64);
    localStorage.setItem('ID', prodid);
    localStorage.setItem('Review', review);
    localStorage.setItem('Description', description);  
}

  return (
    <>
    <div className="h-full w-full ">
      <div className="text-5xl text-center font-normal w-full mt-[3rem] font-Pragati-Narrow tracking-widest">
      <div className='relative'>
          <input
            type='text'
            placeholder='Search...'
            className='px-4 py-2 rounded-md border-2 text-black border-gray-200 focus:outline-none focus:border-gray-400 pl-4' 
            />
          <button className='absolute inset-y-0 right-0 px-4 cursor-pointer text-base text-black hover:text-cyan-500 focus:text-cyan-500'onClick={() => {
            //   searchCLick(searchProdName);
              }}>
            <FontAwesomeIcon icon={faSearch} className='fill-current' />
          </button>
        </div>
      </div>

      
     </div>
      

     <div className='productDisplay container flex border-l-[3px] border-[#DFDFDF]'>
     <div className=" container flex flex-wrap">
        {
         productcardss.map((product) => {
            return <ProductCard
                      newprodname={product.newprodname}
                      price={product.price}
                      imgpath={product.image64}
                      key={product.prodid}
                      review={review}
                      onClickHandler={() => {navigate(`${product.id}`)}}
                    />
          } ) 
          
        }
      </div>
      </div>
      </>
     

  );
}

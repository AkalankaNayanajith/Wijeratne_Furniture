import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ratings from "./Ratings";
import ReactImageMagnify from "react-image-magnify";


const OneProductView = () => {
  
  let {productID}=useParams()

  const [product, setProduct] = useState({});

  useEffect(() => { 

    window.scrollTo(0, 0)//scroll to top when the page laods

    fetch(`http://localhost:8080/product/${productID}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result) ; 
      setProduct(result)
    });
  
  }, []);
  
  useEffect(() => {
    console.log(product.images64) ; 
  }, [product])
  
    return (
    <>
      <div className="Imagessection w-[50%]">
        <div className="MainImage items-center h-[600px] ">
        <ReactImageMagnify className="z-50 bg-center h-[600px] bg-cover mt-2 mx-auto" {...{ // add z-50 to show modal over anything else
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            // isFluidWidth: true,        
            width: 400,
            height: 500,
            src:product.image64
             },
          largeImage: {
              src: product.image64,
              width: 1200,
              height: 800
              },
              enlargedImageContainerDimensions: {
                width: '200%',
                height: '100%'
            }
          }} />
         
          {/* <img
            className="bg-center h-[600px] bg-cover mt-20 mx-auto"
            src={product.image64}
            alt=""
          /> */}
        </div>
        <div className="smallImagesSLider mx-auto w-[50%] flex">
        
          
{/*                   
          <img
            className="bg-center bg-contain border-2 border-black"
            src={product.images64.data}
            alt=""
          /> */}



          {/* <img
            className="bg-center bg-contain border-2 border-black "
            src={product.images64}
            alt=""
          /> */}
        </div>
      </div>

      <div className="information h-full w-[50%]">
        <div className="text-black text-left  text-4xl font-poppins font-semibold  mt-20">
       
     
       {product.newprodname}
       </div>
        <div className="ratings flex text-left mt-2 ">
          <Ratings review={4}/>
        
          <p className="font-Manrope font-semibold text-[#2F2D3A] items-center ml-5 mt-[0.1rem]">
            (15 Reviews)
          </p>
        </div>

        <div className="price text-xl font-medium text-[#ff0000]">Rs {product.price} </div>

      <div className="mr-14">
          <p className="text-justify font-Manrope font-normal text-base ">
          {product.description}
          </p>
      </div>

      <div className="AddtoCartButton mt-8 ">
        <a href="/myshoppingcart">
          <button  className="border-2  border-black rounded-none w-[92%] h-[50px] font-sans font-normal text-base text-white bg-black hover:text-white  hover:border-[#2c2c2c] hover:bg-[#2c2c2c]" 
        >
            <p> ADD TO CART</p>
          </button>
        </a> 
        </div>


        <div className="FavBtn mt-4 ">
          <button className="border-2 border-black rounded-none  w-[92%] h-[50px] font-sans font-normal text-base hover:text-white hover:border-[#f63f3f] hover:bg-[#f63f3f]">
            {" "}
            <p> ADD TO FAVORITES</p>{" "}
          </button>
        </div>
      </div>
    </>
  );
};


export default OneProductView;

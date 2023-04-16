import React from "react";
import Ratings from "./Ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import FavouritesModal from './Modals/FavouritesModal'

function ProductCard({  review,  newprodname, prodid ,category, description, quantity, dicount, price, color, material, country, imgpath,onClickHandler }) {

  const [openFavouritesModal, setOpenFavouritesModal] = React.useState(false);

  return (
    <div className="m-8 relative" >
      <FavouritesModal openFav={openFavouritesModal} closeFavHandler={()=> setOpenFavouritesModal(false)}/>

      <div className="max-w-xs  bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl ease-in-out hover:scale-105 duration-300" >

      <button className='absolute top-[0.6rem] right-0 px-4 cursor-pointer text-3xl opacity-95 text-black hover:text-red-500 focus:text-red-600 z-20 transition-none'onClick={()=> setOpenFavouritesModal(true)}>
            <FontAwesomeIcon icon={faHeart} className='fill-white' />
      </button>
      
        
          <img
            className="w-full h-72 p-8 rounded-t-lg"
            // src="../Images/prod5.png"
            key={prodid}
            src={imgpath}
            alt="prod"
          />
        
        <div className="px-5 pb-5">
          
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {newprodname}
            </h5>
            <Ratings review = {review} />
            <p className="text-red-500 font-semibold text-xl"> Rs {price} </p>
           

          <div className="flex justify-between items-center mt-3">
            <button type="button"
              className="text-white w-full bg-black hover:bg-[#1c1d1d] focus:ring-4 focus:outline-none focus:ring-[#2a2c2c]  font-medium rounded-lg text-sm px-[5rem] py-2.5 text-center dark:bg-[#1c1d1d]  dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={onClickHandler}
            >
            SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

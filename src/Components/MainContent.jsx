import React from 'react';
import product_card from "./ProductCardHomePage";

const MainContent = () => {
    console.log (product_card);
    const listItems = product_card.map((item) =>
    <div className='card' key={item.id}>
        <div className='card_img'> 
        <img src= {item.thumb} />
        </div>

        <div className='card_header'>
            <h2 className='text-white'> {item.productName} </h2>
            <p className='text-white'> {item.description} </p>
            <p className='price text-white'> {item.Currency} <span> {item.price}</span></p>
            <div className='btn text-white'> Add to cart</div>
        </div>
    </div>
);

return(
    <div className = "main_content">
        <h3> Chairs </h3>
        {listItems }
    </div>
)


}
export default MainContent;
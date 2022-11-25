import Ratings from "./Ratings";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function TrackMyOrder({review,newprodname,prodid, category,description, quantity,dicount,price,color,material,country,imgpath,}) {
//here it is not track my order, but here I retrieve data from db and show them in product cards
//edit later
// same code here copied for products.jsx file

  const [productcardss, setProductcardss] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product/getAll")
      .then((response) => response.json())
      .then((result) => {
        setProductcardss(result);
      });
  }, []);



  return (
    <>
      <div className=" container flex">
        {productcardss.map((product) => (
          
          <ProductCard
            newprodname={product.newprodname}
            price={product.price}
            imgpath={product.imgpath}
            key={product.prodid}
            review={review}/>

        ))}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";

const AddedToCart = () => {
  
    const [newprodname, setNewprodname] = useState("");
    const [price, setPrice] = useState("");
    const [imagepath, setImagepath] = useState("");
    const [prodid, setProdId] = useState("");
    const [review, setReview] = useState("");
    const [description, setDescription] = useState("");
  
    useEffect(() => {
  
      setNewprodname(localStorage.getItem('Name'));
      setPrice(localStorage.getItem('Price'));
      setImagepath(localStorage.getItem('Image'));
      setProdId(localStorage.getItem('ID'));
      setReview(localStorage.getItem('Review'));
      setDescription(localStorage.getItem('Description'));  }, []);
    
      return (
    
<>

        <div className="LargeImage items-center h-[600px] ">
          <img
            className="bg-center bg-cover mt-20 mx-auto"
            src={imagepath}
            alt=""
          />
        </div>
</>
    
  );
  }

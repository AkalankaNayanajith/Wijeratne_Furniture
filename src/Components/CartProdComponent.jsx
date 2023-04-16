import React, { useEffect, useState } from "react";
import axios from "axios";

const CartProdComponent = () => {
  
        const [newprodname, setNewprodname] = useState("");
        const [price, setPrice] = useState(0);
        const [imgpath, setImgpath] = useState("");
        const [prodid, setProdId] = useState("");
        const [review, setReview] = useState("");
        const [description, setDescription] = useState("");
        const [itemCount, setItemCount] = useState(1);
        const [ itemTotal, setItemTotal ] = useState(0);
        const [qt, setQt] = useState(1)

        const HandleOnChange = (count) => {
            setItemTotal(count* price);
            localStorage.setItem("total", count* price );
            localStorage.setItem("count", count)
        }

        const removeButtonOnClick = async () => {
            // let data = await axios.delete(`http://localhost:8080/product/delete/${prodid}`)
            // .then(function (response) {
            //   // handle success
            //   console.log(response);
            // })
            // .catch(function (error) {
            //   // handle error
            //   console.log(error);
            // })
            // .finally(function () {
            //   // always executed
            // });
        }
      

    useEffect(() => {

        setNewprodname(localStorage.getItem('Name'));
        setPrice(localStorage.getItem('Price'));
        setImgpath(localStorage.getItem('Image'));
        setProdId(localStorage.getItem('ID'));
        setReview(localStorage.getItem('Review'));
        setDescription(localStorage.getItem('Description'));  }, []);
      

        // var Pr = {price};
        // // var Icount = count;
        
  return (
    <>
     
      <tr className="border-b-2 mb-6 w-full border-[#DBD9D9]">
        <td>
          <div className="h-28 flex mt-4 mb-4 items-center">
            <div className="h-24 w-24 ml-[13.5rem] rounded-lg border-2 border-[#A6A6A6]">
              <img
                className="h-[90%] w-[90%] m-auto mt-1"
                src={imgpath}
                alt=""
              />
            </div>
            <div className="pl-[3rem] ">
              <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-xl ">
              <a href="oneproductview">  {newprodname} </a>
              </h3>
              <p className="font-light mt-[0.1rem] text-[#585d61] font-sans text-sm italic">
                             {/* {selectedcolor}  {selectedmaterial} */}
              </p>
              <button onClick={removeButtonOnClick}>
                <p className="text-[#CB6202] mt-[0.1rem] underline underline-offset-2 ">
                  Remove
                </p>
              </button>
            </div>
          </div>
        </td>
        <td>
          <p className="text-[#34383b] text-right font-sans text-xl ">
           Rs  {price}
          </p>
        </td>
        <td className="items-end text-right">
          <input
            className="count h-12 text-xl  border-[#A6A6A6] w-16 text-center border-2 rounded-md mr-20 "
            type="number"
            min="1"        
            value={qt}
            //qt means quantity here
            onChange={(event) => {
              setQt(event.target.value);
              HandleOnChange(event.target.value)
            }}
           
          />
        </td>
        <td>
          <p className="text-[#34383b] font-sans text-right text-xl pr-52">
          {itemTotal} 
          {/* //change the above line to calculate total value later on  */}
     
          </p>
        </td>
      </tr>
    </>
  );
}

export default CartProdComponent;

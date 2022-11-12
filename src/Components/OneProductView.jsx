import React from "react";
import Ratings from "./Ratings";

const OneProductView = () => {
  return (
    <>
      <div className="Imagessection w-[50%]">
        <div className="LargeImage items-center h-[600px] ">
          <img
            className="bg-center bg-cover mt-20 mx-auto"
            src="../Images/prod1.png"
            alt=""
          />
        </div>
        <div className="smallImagesSLider mx-auto w-[50%] flex">
          <img
            className="bg-center bg-contain border-2 border-black"
            src="../Images/prod3.png"
            alt=""
          />
          <img
            className="bg-center bg-contain border-2 border-black"
            src="../Images/prod3.png"
            alt=""
          />
          <img
            className="bg-center bg-contain border-2 border-black "
            src="../Images/prod3.png"
            alt=""
          />
        </div>
      </div>

      <div className="information h-full w-[50%]">
        <div className="text-black text-left  text-4xl font-poppins font-semibold  mt-20">
          Zoltro Gaming Chair
        </div>

        <div className="ratings flex text-left mt-2 ">
          <Ratings />

          <p className="font-Manrope font-semibold text-[#2F2D3A] items-center ml-5 mt-[0.1rem]">
            (15 Reviews)
          </p>
        </div>

        <div className="price text-xl font-medium text-[#ff0000]">Rs 67999</div>

        <div className="mr-14">
          <p className="text-justify font-Manrope font-normal text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
            fermentum iaculis eu non. In pellentesque massa placerat duis. Augue
            neque gravida in fermentum et. Viverra ipsum nunc aliquet bibendum
            enim. Lorem ipsum dolor sit amet. Metus vulputate eu scelerisque
            felis imperdiet. Faucibus nisl tincidunt eget nullam non nisi.
            Facilisis volutpat est velit egestas dui id ornare arcu. Amet risus
            nullam eget felis eget. Euismod elementum nisi quis.im.
            <br />
            Lorem ipsum dolor sit amet. Metus vulputate eu scelerisque felis
            imperdiet. Faucibus nisl tincidunt eget nullam non nisi. Facilisis
            volutpat est velit egestas dui id ornare arcu. Amet risus nullam
            eget felis eget. Euismod elementum nisi quis.im. Lorem ipsum dolor
            sit amet. Metus vulputate eu scelerisque felis imperdiet. Faucibus
            nisl tincidunt eget nullam non nisi. Facilisis volutpat est velit
            egestas dui id ornare arcu. Amet risus nullam eget felis eget.
            Euismod elementum nisi quis.
          </p>
        </div>

        <div className="AddtoCartButton mt-8 ">
          <button className="border-2 border-black rounded-none w-[92%] h-[50px] font-sans font-normal text-base hover:text-white hover:bg-black">
            {" "}
            <p> ADD TO CART</p>{" "}
          </button>
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

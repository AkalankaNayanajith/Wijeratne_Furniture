import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -5,
    top: 0,

    padding: "0 4px",
  },
}));
const PaymentInformation = () => {
  return (
    <>
      <div className="w-full h-full flex">
        <div className="bg-white w-[55%] h-full"></div>

        <div className="bg-[#DFDFDF] border-l-2 border-[#898686] flex-1 h-full pl-16 pt-6">
          <div className="h-28 flex items-center">
            <div className="h-24 w-24 rounded-lg border-2 border-[#A6A6A6]">
              <StyledBadge className="cart" color="error" badgeContent={10}>
                <img
                  className="h-[90%] w-[90%] m-auto mt-1"
                  src="../Images/prod4.jpg"
                  alt=""
                />
              </StyledBadge>
            </div>
            <div className="pl-[2rem] ">
              <h3 className="text-[#34383b] max-w-sm min-w-sm font-sans text-xl ">
                luxury Bed{" "}
              </h3>
              <p className="font-thin mt-[0.1rem] text-[#585d61]  text-sm italic">
                {" "}
                Black, Metal & Leather
              </p>
              <button>
                {" "}
                <p className="text-[#CB6202] mt-[0.1rem] underline underline-offset-2 ">
                  Remove
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInformation;

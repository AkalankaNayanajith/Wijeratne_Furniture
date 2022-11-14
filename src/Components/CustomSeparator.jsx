import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import * as React from "react";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}



export default function CustomSeparator() {
  const navigate = useNavigate();

  const navigateToCart = () => {  
    navigate('/myshoppingcart');
  };
  const navigateToInformation = () => {  
    navigate('/Paymentinformation');
  };
  const navigateToShipping = () => {  
    navigate('/shipping');
  };
  const navigateToPayment = () => {  
    navigate('/payment');
  };


  const breadcrumbs = [
    <Link
    
      underline="hover"
      key="1"
      color="inherit"
      href="/myshoppingcart"
      onClick={navigateToCart}
    >
      Cart
    </Link>,
    <Typography key="3" color="text.primary" fontWeight= "600">
    Information
  </Typography>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={navigateToShipping}
    >
      Shipping
    </Link>,
     <Link
     underline="hover"
     key="3"
     color="inherit"
     href="/"
     onClick={navigateToPayment}
   >
     Payment
   </Link>,
    
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

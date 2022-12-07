import { Payment } from "@mui/icons-material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomizedOrders from "./Components/CustomizedOrders";
import HotDeals from "./Components/HotDeals";
import Login from "./Components/Login";
import Logintest from "./Components/Logintest";
import MainContent from "./Components/MainContent";
import MyOrders from "./Components/MyOrders";
import MyOrdersModal from "./Components/MyOrdersModal";
import MyShoppingCart from "./Components/MyShoppingCart";
import OneProductView from "./Components/OneProductView";
import AboutUs from "./Components/Pages/AboutUs";
import AddProduct from "./Components/Pages/AddProduct";
import ContactUs from "./Components/Pages/ContactUs";
import FAQ from "./Components/Pages/FAQ";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import RefundPolicy from "./Components/Pages/RefundPolicy";
import TermsOfUse from "./Components/Pages/TermsOfUse";
import PaymentInformation from "./Components/PaymentInformation";
import Products from "./Components/Products";
import Shipping from "./Components/Shipping";
import Slider from "./Components/Slider";
import TrackMyOrder from "./Components/TrackMyOrder";
import AdminLogin from "./Components/Pages/AdminLogin";
import CustomerLayout from "./Components/CustomerLayout";
import AdminLayout from "./Components/AdminLayout";
import Dashboard from "./Components/Pages/Dashboard";
import AddUser from "./Components/Pages/AddUser";
import UserAction from "./Components/Pages/UserAction";
import ProductAction from "./Components/Pages/ProductAction";
import UserActionAddUser from "./Components/Pages/AddUser";
import AdminProductPage from "./Components/Pages/AdminProductPage";
import AdminUserPage from "./Components/Pages/AdminUserPage";

function App() {
  return (
    <>
      <BrowserRouter>
     
        {/* <div className=" flex w-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"> */}
   
        {/* </div> */}
        <Routes>
          <Route exact path="/" element={<CustomerLayout/>}>
            <Route index={true} element={<div className="HomePage flex w-[100%] h-[100%] p-0 bg-slate-900 justify-between flex-wrap m-0 relative"> <Slider /> <MainContent /></div> }/>

            <Route exact path="aboutus" 
            element={  <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><AboutUs /></div> }/>

            <Route exact path="contactus" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><ContactUs /></div> }/>

            <Route exact path="myorders" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><MyOrders /> </div> }/>

            <Route exact path="customizedorders" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"> <CustomizedOrders /> </div> }/>

            <Route exact path="hotdeals" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><HotDeals /></div> }/>

            <Route exact path="trackmyorder" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"> <TrackMyOrder /> </div> }/>
            
            <Route exact path="TermsOfUse" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><TermsOfUse /> </div> }/>

            <Route exact path="faq"
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><FAQ /></div> }/>

            <Route exact path="RefundPolicy" 
            element={<div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"> <RefundPolicy /></div> }/>

            <Route exact path="PrivacyPolicy" 
            element={  <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"> <PrivacyPolicy />  </div> }/>

            <Route exact path="products" 
            element={  <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">  <Products /></div>  }/>

            <Route exact path="oneproductview" 
            element={  <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"> <OneProductView /> </div> }/>

            <Route exact path="myshoppingcart" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><MyShoppingCart /> </div> }/>

            <Route exact path="paymentinformation" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><PaymentInformation /> </div> }/>
            
            <Route exact path="shipping" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"> <Shipping /> </div> }/>

            <Route exact path="payment" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><Payment /></div> }/>

            <Route exact path="myordersmodal" 
            element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><MyOrdersModal /></div> }/>

            <Route exact path="login" element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"><Login /></div> }/>
            
            <Route exact path="logintest" element={ <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"> <Logintest />  </div> }/>

          </Route>


         
            <Route exact path="/adminlogin" element={ <AdminLogin /> }/>
         
            <Route exact path="productaction" element={  <ProductAction /> }/>

          <Route exact path="/adminpanel" element={<AdminLayout/>}>
            <Route index={true} element={ <Dashboard />  }/>
            <Route exact path="useraction" element={  <UserAction /> }/>
            <Route exact path="useractionadduser" element={  <UserActionAddUser /> }/>
            <Route exact path="adminproductpage" element={  <AdminProductPage /> }/>
            <Route exact path="addproduct" element={  <AddProduct /> }/>
            <Route exact path="adminuserpage" element={  <AdminUserPage /> }/>
            <Route exact path="adduser" element={  <AddUser/> }/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

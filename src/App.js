import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductCardHomePage from "./Components/ProductCardHomePage";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import MyOrders from "./Components/MyOrders";
import CustomizedOrders from "./Components/CustomizedOrders";
import TrackMyOrder from "./Components/TrackMyOrder";
import HotDeals from "./Components/HotDeals";
import Cart from "./Components/Cart";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import RefundPolicy from "./Components/Pages/RefundPolicy";
import FAQ from "./Components/Pages/FAQ";
import TermsOfUse from "./Components/Pages/TermsOfUse";
import Products from "./Components/Products";
import ClippedDrawer from "./Components/Pages/DashClippedDrawer";
import AdminBar from "./Components/Pages/AdminBar";
import AddProduct from "./Components/Pages/AddProduct";
import Slider from "./Components/Slider";
import OneProductView from "./Components/OneProductView";
import MyShoppingCart from "./Components/MyShoppingCart";
import PaymentInformation from "./Components/PaymentInformation";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        {/* <div className=" flex w-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative"> */}
        {/* <AdminBar /> */}
        {/* <ClippedDrawer /> */}
        {/* </div> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="HomePage flex w-[100%] h-[100%] p-0 bg-slate-900 justify-between flex-wrap m-0 relative">
                <Slider />
                <MainContent />
              </div>
            }
          />

          <Route
            exact
            path="/aboutus"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <AboutUs />
              </div>
            }
          />

          <Route
            exact
            path="/contactus"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <ContactUs />
              </div>
            }
          />

          <Route
            exact
            path="/myorders"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <MyOrders />
              </div>
            }
          />

          <Route
            exact
            path="/customizedorders"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <CustomizedOrders />
              </div>
            }
          />

          <Route
            exact
            path="/hotdeals"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <HotDeals />
              </div>
            }
          />

          <Route
            exact
            path="/TrackMyOrder"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <TrackMyOrder />
              </div>
            }
          />

          <Route
            exact
            path="/faq"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <FAQ />
              </div>
            }
          />

          <Route
            exact
            path="/TermsOfUse"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <TermsOfUse />
              </div>
            }
          />

          <Route
            exact
            path="/RefundPolicy"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <RefundPolicy />
              </div>
            }
          />

          <Route
            exact
            path="/PrivacyPolicy"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <PrivacyPolicy />
              </div>
            }
          />

          <Route
            exact
            path="/Products"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <Products />
              </div>
            }
          />

          <Route
            exact
            path="/singleproduct"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <OneProductView />
              </div>
            }
          />

          <Route
            exact
            path="/myshoppingcart"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <MyShoppingCart />
              </div>
            }
          />

          <Route
            exact
            path="/paymentinformation"
            element={
              <div className=" flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative">
                <PaymentInformation />
              </div>
            }
          />

          <Route exact path="/AddProduct">
            <Route index={true} element={<AddProduct/>}/>
              
            {/* <Route path="products">
                  <Route path="New"></Route>
                </Route> */}
          </Route>
        </Routes>
        {/* <Footer/> */}
        {/* <ProductCardHomePage/> */}
      </BrowserRouter>
    </>
  );
}

export default App;

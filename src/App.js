import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ProductCardHomePage from './Components/ProductCardHomePage';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import AboutUs from './Components/Pages/AboutUs';
import ContactUs from './Components/Pages/ContactUs';
import MyOrders from './Components/MyOrders';
import CustomizedOrders from './Components/CustomizedOrders';
import TrackMyOrder from './Components/TrackMyOrder';
import HotDeals from './Components/HotDeals';
import Cart from './Components/Cart';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import RefundPolicy from './Components/Pages/RefundPolicy';
import FAQ from './Components/Pages/FAQ';
import TermsOfUse from './Components/Pages/TermsOfUse';
import Products from './Components/Products';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='Navigation'>
        <Navbar/>
        <div className='Home'>
          <Switch>

            <Route exact path="/"> 
              <Hero/>
              <div className=' flex w-[100%] h-[100%] p-0 bg-slate-900 justify-between flex-wrap m-0 relative'>
                  <MainContent/>
              </div>
            </Route>

            <Route exact path="/aboutus"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <AboutUs/>
              </div>
            </Route>

            <Route exact path="/contactus"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <ContactUs/>
              </div>
            </Route>

            <Route exact path="/myorders"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <MyOrders/>
              </div>
            </Route>

            <Route exact path="/customizedorders"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <CustomizedOrders/>
              </div>
            </Route>

            <Route exact path="/hotdeals"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <HotDeals/>
              </div>
            </Route>

            <Route exact path="/TrackMyOrder"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <TrackMyOrder/>
              </div>
            </Route>

            <Route exact path="/faq"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <FAQ/>
              </div>
            </Route>

            <Route exact path="/TermsOfUse"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <TermsOfUse/>
              </div>
            </Route>

            <Route exact path="/RefundPolicy"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <RefundPolicy/>
              </div>
            </Route>

            <Route exact path="/PrivacyPolicy"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <PrivacyPolicy/>
              </div>
            </Route>

            <Route exact path="/Products"> 
              <div className=' flex w-[100%] h-[100%] p-0 bg-white text-black justify-between flex-wrap m-0 relative'>
                  <Products/>
              </div>
            </Route>
                     
          </Switch>
     
        </div>
     <Footer/>
     {/* <ProductCardHomePage/> */}

     </div>


     </BrowserRouter> 

    </>
    
  );
}

export default App;

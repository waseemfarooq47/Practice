import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home/Home'
import Listing from './Listing/Listing'
import Details from './Details/restDetails'
import PlaceOrder from './Booking/PlaceOrder'
const Routing=()=>{
    return(
        <>
            <BrowserRouter>
                    <Header/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/list/:id" component={Listing}/>
                        <Route path="/detail/:id" component={Details}/>
                        <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                    <Footer/>  
            </BrowserRouter>  
        </>
        
    ) 
}

export default Routing
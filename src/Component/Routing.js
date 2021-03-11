import React from 'react';
import {Route,BrowserRouter, Switch} from 'react-router-dom';
import Home from './Home/Home';
import RestaurentDeatils from './Details/RestaurentDeatils'; 
import Header from './Header';
import Footer from './Footer';
import ListingApi from './Listing/ListingApi';
import Booking from './Order/Booking';
import Placeholder from './Order/BookingForm';
import Login from "./Login";



const Routing=()=>{
    return(
        <BrowserRouter>
        <div className>
      
        <Header/>
        <Route  exact path='/' component={Home}>
        </Route>
        <Route path='/list/:id' component={ListingApi}></Route>   
        <Route path='/deatils/:id' component={RestaurentDeatils}></Route>    
        <Route path='/viewbooking' component={Booking}></Route> 
        <Route path='/booking/:id'  component={Placeholder}></Route>
       <Route path="/login" component={Login}></Route>
        
        
       
       

        </div>
        </BrowserRouter>
    )

}

export default Routing;
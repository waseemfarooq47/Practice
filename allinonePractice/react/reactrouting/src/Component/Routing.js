import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Post from './Post'
import Profile from './Profile'
import ProfileDetails from './ProfileDetails'


const Routing=()=>{
    return (
        <BrowserRouter>
            <Header/>
                    <Route exact path='/' component={Home} />
                    <Route exact path="/post" component={Post} />
                    <Route  path="/profile" component={Profile} />
                    <Route  path="/post/:topic" component={ProfileDetails} />
            <Footer/>  
        </BrowserRouter>
    )
}


export default Routing
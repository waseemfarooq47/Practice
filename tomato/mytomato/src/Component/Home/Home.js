import React from "react";
import QuickSearch from './QuickSearch'
import Search from './Search'
import './Home.css'

const Home =(props)=>{
        console.log(">>>home",props)
        return(
            <>
                <Search/>
                <QuickSearch/>
            </>
        )
    }

export default Home

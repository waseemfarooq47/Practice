import React,{Component} from "react";
import QuickSearch from './QuickSearch'
import Search from './Search'
import './Home.css'

class Home extends Component {
    render(){
        return(
            <>
                <Search/>
                <QuickSearch/>
            </>
        )
    }
}
export default Home

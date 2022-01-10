import React,{Fragment,Component} from "react";
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <Fragment>
                <Link to='/'>Home</Link>
                <Link to='/post'>Post</Link>
                <Link to='/profile'>Profile</Link>
            </Fragment>
        )
    }
}

export default Header
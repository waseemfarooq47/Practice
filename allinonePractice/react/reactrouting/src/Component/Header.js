import React,{Fragment,Component} from "react";
import {Link} from 'react-router-dom'
import './header.css'

class Header extends Component{
    render(){
        return(
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand text-weight-bold" href="#">Broda!</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="linker" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                <   Link className="linker" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                <   Link className="linker" to="/post">Post</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                </nav>
            </Fragment>
        )
    }
}

export default Header
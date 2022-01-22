import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <>
                
                <header className="main-header bg-dark">
                    <div className="logo">
                        <Link to="/">
                        <span className="logoname"><a href="#">Tomato!</a></span>
                        </Link>
                        
                        
                    </div>
                    <div className="social-logo">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="facebook" />
                        {/* <img src="image/youtube1.png" alt="yooutube" /> */}
                        <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="instagram" />
                    </div>
                </header>
                       
            </>
        )
    }

}

export default Header
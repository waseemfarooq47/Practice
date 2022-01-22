import React,{Component} from "react";
import './Header.css'

class Footer extends Component{
    render(){
        return(
            <>
                        <div className="col-12 mt-5 bg-dark">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <ul className="footerdet">
                                        <li>
                                            <h4>Company</h4>
                                        </li>
                                        <li>Who We Are</li>
                                        <li>Contact</li>
                                        <li>Blogs</li>
                                        <li>Reports</li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <ul className="footerdet">
                                        <li>
                                            <h4>For You</h4>
                                        </li>
                                        <li>Privacy</li>
                                        <li>Terms</li>
                                        <li>Sitemap</li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <ul className="footerdet">
                                        <li>
                                            <h4>For Restaurants</h4>
                                        </li>
                                        <li>Add restaurant</li>
                                        <li>Business App</li>
                                        <li>Restaurant Widgets</li>
                                        <li>Products for Businesses</li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <ul className="footerdet">
                                        <li>
                                            <h4>Social</h4>
                                        </li>
                                        <li><a href="">Facebook</a> </li>
                                        <li><a href="">Twitter</a> </li>
                                        <li><a href="">Instagram</a> </li>
                                        <li><a href="">Snapchat</a> </li>

                                    </ul>
                                </div>
                                <hr />
                                <div className="col-12 text-center text-white">
                                    &copy; <i className="fa fa-heart ms-3"></i> <span className="footname">Waseem Farooq</span>
                                </div>

                            </div>
                        </div>
            </>
        )
    }

}

export default Footer
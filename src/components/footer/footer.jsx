import React from 'react'

const Footer = ({ Link }) => {
    return (
        <footer className="footer_area clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="single_widget_area d-flex mb-30">

                            <div className="footer_menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/">Shop</Link></li>
                                    <li><Link to="/">Category</Link></li>
                                    <li><Link to="/">Cart</Link></li>
                                    <li><Link to="/">About</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="single_widget_area mb-30">
                            <ul className="footer_widget_menu">
                                <li><Link to="/">Order Status</Link></li>
                                <li><Link to="/">Payment Options</Link></li>
                                <li><Link to="/">Shipping and Delivery</Link></li>
                                <li><Link to="/">Guides</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Terms of Use</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer_social d-flex flex-row justify-content-center">
                    <ul>
                        <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-skype" aria-hidden="true"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-pinterest" aria-hidden="true"></i></Link></li>
                    </ul>
                </div>

                <div className="col-md-12 text-center">
                    <p>
                        Copyright &copy;2021 All rights reserved to Miler
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

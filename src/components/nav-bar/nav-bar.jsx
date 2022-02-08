import React from 'react'

const NavBar = ({ Link }) => {
    return (
        <header className="header_area">
            <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
                <nav className="classy-navbar" id="essenceNav">
                    <Link className="nav-brand" to="/">MILER</Link>
                    <div className="classy-navbar-toggler">
                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                    </div>

                    <div className="classy-menu">
                        <div className="classycloseIcon">
                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                        </div>

                        <div className="classynav">
                            <ul>
                                <li><Link to="/">Shop</Link>
                                    <div className="megamenu">
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">Women's Collection</li>
                                            <li><Link to="/">Dresses</Link></li>
                                            <li><Link to="/">Blouses &amp; Shirts</Link></li>
                                            <li><Link to="/">T-shirts</Link></li>
                                            <li><Link to="/">Rompers</Link></li>
                                            <li><Link to="/">Bras &amp; Panties</Link></li>
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">Men's Collection</li>
                                            <li><Link to="/">T-Shirts</Link></li>
                                            <li><Link to="/">Polo</Link></li>
                                            <li><Link to="/">Shirts</Link></li>
                                            <li><Link to="/">Jackets</Link></li>
                                            <li><Link to="/">Trench</Link></li>
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">Kid's Collection</li>
                                            <li><Link to="/">Dresses</Link></li>
                                            <li><Link to="/">Shirts</Link></li>
                                            <li><Link to="/">T-shirts</Link></li>
                                            <li><Link to="/">Jackets</Link></li>
                                            <li><Link to="/">Trench</Link></li>
                                        </ul>
                                        <div className="single-mega cn-col-4">
                                            <img src="assets/img/bg-img/bg-6.jpg" alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="/">Category</Link>
                                    <ul className="dropdown">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/">Shop</Link></li>
                                        <li><Link to="/">Product Details</Link></li>
                                        <li><Link to="/">Checkout</Link></li>
                                        <li><Link to="/">Single Blog</Link></li>
                                        <li><Link to="/">Regular Page</Link></li>
                                        <li><Link to="/">Contact</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="header-meta d-flex clearfix justify-content-end">
                    <div className="search-area">
                        <form action="#" method="post">
                            <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>

                    <div className="favourite-area">
                        <Link to="/"><img src="assets/img/core-img/heart.svg" alt="" /></Link>
                    </div>

                    <div className="user-login-info">
                        <Link to="/"><img src="assets/img/core-img/user.svg" alt="" /></Link>
                    </div>

                    <div className="cart-area">
                        <Link to="/" id="essenceCartBtn"><img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar

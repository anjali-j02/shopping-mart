import React, { Fragment } from 'react'

const AddToCart = ({ Link }) => {
    return (
        <Fragment>
            <div className="cart-bg-overlay"></div>

            <div className="right-side-cart-area">
                <div className="cart-button">
                    <Link to="/" id="rightSideCart"><img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span></Link>
                </div>

                <div className="cart-content d-flex">
                    <div className="cart-list">
                        <div className="single-cart-item">
                            <Link to="/" className="product-image">
                                <img src="assets/img/product-img/product-1.jpg" className="cart-thumb" alt="" />

                                <div className="cart-item-desc">
                                    <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                                    <span className="badge">Mango</span>
                                    <h6>Button Through Strap Mini Dress</h6>
                                    <p className="size">Size: S</p>
                                    <p className="color">Color: Red</p>
                                    <p className="price">₹999.00</p>
                                </div>
                            </Link>
                        </div>

                        <div className="single-cart-item">
                            <Link to="/" className="product-image">
                                <img src="assets/img/product-img/product-2.jpg" className="cart-thumb" alt="" />

                                <div className="cart-item-desc">
                                    <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                                    <span className="badge">Mango</span>
                                    <h6>Button Through Strap Mini Dress</h6>
                                    <p className="size">Size: S</p>
                                    <p className="color">Color: Red</p>
                                    <p className="price">₹499.00</p>
                                </div>
                            </Link>
                        </div>

                        <div className="single-cart-item">
                            <Link to="/" className="product-image">
                                <img src="assets/img/product-img/product-3.jpg" className="cart-thumb" alt="" />

                                <div className="cart-item-desc">
                                    <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                                    <span className="badge">Mango</span>
                                    <h6>Button Through Strap Mini Dress</h6>
                                    <p className="size">Size: S</p>
                                    <p className="color">Color: Red</p>
                                    <p className="price">₹1,449.00</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="cart-amount-summary">
                        <h2>Summary</h2>
                        <ul className="summary-table">
                            <li><span>subtotal:</span> <span>₹2,199.00</span></li>
                            <li><span>delivery:</span> <span>Free</span></li>
                            <li><span>discount:</span> <span>-15%</span></li>
                            <li><span>total:</span> <span>₹1,299.00</span></li>
                        </ul>
                        <div className="checkout-btn mt-100">
                            <Link to="/" className="btn essence-btn">check out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AddToCart

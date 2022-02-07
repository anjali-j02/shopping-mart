import React from 'react'
import NavBar from '../../components/navbar/nav-bar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="app">

      <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">'
        <NavBar />

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

      <section className="welcome_area bg-img background-overlay" style={{ backgroundImage: "url(assets/img/bg-img/bg-1.jpg)" }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="hero-content">
                <h6>asoss</h6>
                <h2>New Collection</h2>
                <Link to="/" className="btn essence-btn">view collection</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="banner_item align-items-center" style={{ backgroundImage: "url(assets/images/banner_1.jpg)" }}>
                <div className="banner_category">
                  <Link to='/'>women's</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="banner_item align-items-center" style={{ backgroundImage: "url(assets/images/banner_2.jpg)" }}>
                <div className="banner_category">
                  <Link to='/'>accessories's</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="banner_item align-items-center" style={{ backgroundImage: "url(assets/images/banner_3.jpg)" }}>
                <div className="banner_category">
                  <Link to='/'>men's</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>

                <div className="product-item men">
                  <div className="product discount product_filter">
                    <div className="product_image">
                      <img src="assets/images/product_1.png" alt="" />
                    </div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><Link to='/'>Fujifilm X100T 16 MP Digital Camera (Silver)</Link></h6>
                      <div className="product_price">$520.00<span>$590.00</span></div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><Link to='/'>add to cart</Link></div>
                </div>

                <div className="product-item women">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src="assets/images/product_2.png" alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><Link to='/'>Samsung CF591 Series Curved 27-Inch FHD Monitor</Link></h6>
                      <div className="product_price">$610.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><Link to='/'>add to cart</Link></div>
                </div>

                <div className="product-item women">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src="assets/images/product_3.png" alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><Link to='/'>Blue Yeti USB Microphone Blackout Edition</Link></h6>
                      <div className="product_price">$120.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><Link to='/'>add to cart</Link></div>
                </div>

                <div className="product-item accessories">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src="assets/images/product_4.png" alt="" />
                    </div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_info">
                      <h6 className="product_name"><Link to='/'>DYMO LabelWriter 450 Turbo Thermal Label Printer</Link></h6>
                      <div className="product_price">$410.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><Link to='/'>add to cart</Link></div>
                </div>

                <div className="product-item women men">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src="assets/images/product_5.png" alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><Link to='/'>Pryma Headphones, Rose Gold & Grey</Link></h6>
                      <div className="product_price">$180.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><Link to='/'>add to cart</Link></div>
                </div>

                <div className="product-item accessories">
                  <div className="product discount product_filter">
                    <div className="product_image">
                      <img src="assets/images/product_6.png" alt="" />
                    </div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><Link to="/">Fujifilm X100T 16 MP Digital Camera (Silver)</Link></h6>
                      <div className="product_price">$520.00<span>$590.00</span></div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><Link to='/'>add to cart</Link></div>
                </div>

                <div className="product-item women">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src="assets/images/product_7.png" alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><Link to='/'>Samsung CF591 Series Curved 27-Inch FHD Monitor</Link></h6>
                      <div className="product_price">$610.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><Link to='/'>add to cart</Link></div>
                </div>

                <div className="product-item accessories">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src="assets/images/product_8.png" alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><Link to='/'>Blue Yeti USB Microphone Blackout Edition</Link></h6>
                      <div className="product_price">$120.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><Link to='/'>add to cart</Link></div>
                </div>

                <div className="product-item men">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src="assets/images/product_9.png" alt="" />
                    </div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_info">
                      <h6 className="product_name"><Link to='/'>DYMO LabelWriter 450 Turbo Thermal Label Printer</Link></h6>
                      <div className="product_price">$410.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><Link to='/'>add to cart</Link></div>
                </div>

                <div className="product-item men">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src="assets/images/product_10.png" alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><Link to='/'>Pryma Headphones, Rose Gold & Grey</Link></h6>
                      <div className="product_price">$180.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><Link to='/'>add to cart</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deal_ofthe_week">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="deal_ofthe_week_img">
                <img src="assets/images/deal_ofthe_week.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 text-right deal_ofthe_week_col">
              <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                <div className="section_title">
                  <h2>Deal Of The Week</h2>
                </div>

                <div className="red_button deal_ofthe_week_button"><Link to='/'>shop now</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="best_sellers">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>Best Sellers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="product_slider_container">
                <div className="owl-carousel owl-theme product_slider">

                  <div className="owl-item product_slider_item">
                    <div className="product-item">
                      <div className="product discount">
                        <div className="product_image">
                          <img src="assets/images/product_1.png" alt="" />
                        </div>
                        <div className="favorite favorite_left"></div>
                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                        <div className="product_info">
                          <h6 className="product_name"><Link to="/">Fujifilm X100T 16 MP Digital Camera (Silver)</Link></h6>
                          <div className="product_price">$520.00<span>$590.00</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item product_slider_item">
                    <div className="product-item women">
                      <div className="product">
                        <div className="product_image">
                          <img src="assets/images/product_2.png" alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                        <div className="product_info">
                          <h6 className="product_name"><Link to="/">Samsung CF591 Series Curved 27-Inch FHD Monitor</Link></h6>
                          <div className="product_price">$610.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item product_slider_item">
                    <div className="product-item women">
                      <div className="product">
                        <div className="product_image">
                          <img src="assets/images/product_3.png" alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_info">
                          <h6 className="product_name"><Link to="/">Blue Yeti USB Microphone Blackout Edition</Link></h6>
                          <div className="product_price">$120.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item product_slider_item">
                    <div className="product-item accessories">
                      <div className="product">
                        <div className="product_image">
                          <img src="assets/images/product_4.png" alt="" />
                        </div>
                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                        <div className="favorite favorite_left"></div>
                        <div className="product_info">
                          <h6 className="product_name"><Link to="/">DYMO LabelWriter 450 Turbo Thermal Label Printer</Link></h6>
                          <div className="product_price">$410.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item product_slider_item">
                    <div className="product-item women men">
                      <div className="product">
                        <div className="product_image">
                          <img src="assets/images/product_5.png" alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_info">
                          <h6 className="product_name"><Link to="/">Pryma Headphones, Rose Gold & Grey</Link></h6>
                          <div className="product_price">$180.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item product_slider_item">
                    <div className="product-item accessories">
                      <div className="product discount">
                        <div className="product_image">
                          <img src="assets/images/product_6.png" alt="" />
                        </div>
                        <div className="favorite favorite_left"></div>
                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                        <div className="product_info">
                          <h6 className="product_name"><Link to="/">Fujifilm X100T 16 MP Digital Camera (Silver)</Link></h6>
                          <div className="product_price">$520.00<span>$590.00</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item product_slider_item">
                    <div className="product-item women">
                      <div className="product">
                        <div className="product_image">
                          <img src="assets/images/product_7.png" alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_info">
                          <h6 className="product_name"><Link to="/">Samsung CF591 Series Curved 27-Inch FHD Monitor</Link></h6>
                          <div className="product_price">$610.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item product_slider_item">
                    <div className="product-item accessories">
                      <div className="product">
                        <div className="product_image">
                          <img src="assets/images/product_8.png" alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_info">
                          <h6 className="product_name"><Link to="/">Blue Yeti USB Microphone Blackout Edition</Link></h6>
                          <div className="product_price">$120.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item product_slider_item">
                    <div className="product-item men">
                      <div className="product">
                        <div className="product_image">
                          <img src="assets/images/product_9.png" alt="" />
                        </div>
                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                        <div className="favorite favorite_left"></div>
                        <div className="product_info">
                          <h6 className="product_name"><Link to="/">DYMO LabelWriter 450 Turbo Thermal Label Printer</Link></h6>
                          <div className="product_price">$410.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item product_slider_item">
                    <div className="product-item men">
                      <div className="product">
                        <div className="product_image">
                          <img src="assets/images/product_10.png" alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_info">
                          <h6 className="product_name"><Link to="/">Pryma Headphones, Rose Gold & Grey</Link></h6>
                          <div className="product_price">$180.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column">
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
                <div className="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column">
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="new_arrivals_area section-padding-80 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h2>Popular Products</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="popular-products-slides owl-carousel">

                <div className="single-product-wrapper">

                  <div className="product-img">
                    <img src="assets/img/product-img/product-1.jpg" alt="" />

                    <img className="hover-img" src="assets/img/product-img/product-2.jpg" alt="" />

                    <div className="product-favourite">
                      <Link to="/" className="favme fa fa-heart"></Link>
                    </div>
                  </div>

                  <div className="product-description">
                    <span>topshop</span>
                    <Link to="/">
                      <h6>Knot Front Mini Dress</h6>
                    </Link>
                    <p className="product-price">₹99.00</p>


                    <div className="hover-content">

                      <div className="add-to-cart-btn">
                        <Link to="/" className="btn essence-btn">Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-product-wrapper">

                  <div className="product-img">
                    <img src="assets/img/product-img/product-2.jpg" alt="" />

                    <img className="hover-img" src="assets/img/product-img/product-3.jpg" alt="" />

                    <div className="product-favourite">
                      <Link to="/" className="favme fa fa-heart"></Link>
                    </div>
                  </div>

                  <div className="product-description">
                    <span>topshop</span>
                    <Link to="/">
                      <h6>Poplin Displaced Wrap Dress</h6>
                    </Link>
                    <p className="product-price">₹799.00</p>


                    <div className="hover-content">

                      <div className="add-to-cart-btn">
                        <Link to="/" className="btn essence-btn">Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="single-product-wrapper">

                  <div className="product-img">
                    <img src="assets/img/product-img/product-3.jpg" alt="" />

                    <img className="hover-img" src="assets/img/product-img/product-4.jpg" alt="" />


                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>


                    <div className="product-favourite">
                      <Link to="/" className="favme fa fa-heart"></Link>
                    </div>
                  </div>

                  <div className="product-description">
                    <span>mango</span>
                    <Link to="/">
                      <h6>PETITE Crepe Wrap Mini Dress</h6>
                    </Link>
                    <p className="product-price"><span className="old-price">₹699.00</span> ₹599.00</p>


                    <div className="hover-content">

                      <div className="add-to-cart-btn">
                        <Link to="/" className="btn essence-btn">Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="single-product-wrapper">

                  <div className="product-img">
                    <img src="assets/img/product-img/product-4.jpg" alt="" />

                    <img className="hover-img" src="assets/img/product-img/product-5.jpg" alt="" />


                    <div className="product-badge new-badge">
                      <span>New</span>
                    </div>


                    <div className="product-favourite">
                      <Link to="/" className="favme fa fa-heart"></Link>
                    </div>
                  </div>

                  <div className="product-description">
                    <span>mango</span>
                    <Link to="/">
                      <h6>PETITE Belted Jumper Dress</h6>
                    </Link>
                    <p className="product-price">₹1499.00</p>


                    <div className="hover-content">

                      <div className="add-to-cart-btn">
                        <Link to="/" className="btn essence-btn">Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brands-area d-flex align-items-center justify-content-between">

        <div className="single-brands-logo">
          <img src="assets/img/core-img/brand1.png" alt="" />
        </div>

        <div className="single-brands-logo">
          <img src="assets/img/core-img/brand2.png" alt="" />
        </div>

        <div className="single-brands-logo">
          <img src="assets/img/core-img/brand3.png" alt="" />
        </div>

        <div className="single-brands-logo">
          <img src="assets/img/core-img/brand4.png" alt="" />
        </div>

        <div className="single-brands-logo">
          <img src="assets/img/core-img/brand5.png" alt="" />
        </div>

        <div className="single-brands-logo">
          <img src="assets/img/core-img/brand6.png" alt="" />
        </div>
      </div>

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
                    <li><Link to="/">Sew Your Tee</Link></li>
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
    </div>
  )
};

export default Home
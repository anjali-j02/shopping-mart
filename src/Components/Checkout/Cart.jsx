import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars-2';

import CartItem from './CartItem';

import '../../Styles/Cart.css';

const Cart = () => {
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue Shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="arrow" className="arrow-icon" />
          <p>7</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">7 </span>
          items in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars className="cart-items-container">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                <CartItem />
              ))}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            card total: <span> 2000₹ </span>
          </h3>
          <button>CheckOut</button>
          <button>Clear Cart</button>
        </div>
      </section>
    </>
  );
};

export default Cart;

import React from 'react';

const CartItem = () => {
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img
            src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>

        <div className="title">
          <h2>Samsung S21</h2>
          <p>Black Color 12GB 128GB</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"></i>
          <input type="text" placeholder="2" disabled />
          <i className="fas fa-plus add"></i>
        </div>
        <div className="price">
          <h3>2000rs</h3>
        </div>
        <div className="remove-item">
          <i className="fas fa-trash-alt remove"></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;

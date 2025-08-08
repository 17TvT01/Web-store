import React from 'react';

import './Cart.css';

function Cart({ 
  onClose, 
  onDineInOrder, 
  onTakeawayOrder, 
  cartItems, 
  onIncrease, 
  onDecrease, 
  onRemove 
}) {


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>🛒 Giỏ hàng món ăn</h2>
        <button onClick={onClose} className="close-icon-btn">&times;</button>
      </div>

      {cartItems.length === 0 ? (

        <p>Giỏ hàng đang trống.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>Giá: {item.price.toLocaleString()}₫</p>
                  <div className="quantity-controls">
                    <button onClick={() => onDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.id)}>+</button>
                  </div>
                </div>
                <button className="remove-button" onClick={() => onRemove(item.id)}>
                  X
                </button>

              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p><strong>Tổng cộng:</strong> {total.toLocaleString()}₫</p>
            <div className="order-options">
              <button className="order-button" onClick={onDineInOrder}>Sử dụng tại quán</button>
              <button className="order-button secondary" onClick={onTakeawayOrder}>Mang về</button>


            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

import React, { useState } from 'react';
import './TakeawayConfirmationModal.css';

function TakeawayConfirmationModal({ onConfirm, onCancel, cartItems }) {
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const packagingFee = 5000; // Phí đóng gói cố định
  const total = subtotal + packagingFee - discount;

  const handleApplyVoucher = () => {
    // Giả lập mã giảm giá
    if (voucherCode.toUpperCase() === 'GIAM10') {
      setDiscount(subtotal * 0.1); // Giảm 10%
    } else {
      alert('Mã giảm giá không hợp lệ!');
      setDiscount(0);
    }
  };

  return (
    <div className="modal confirmation-modal">
      <div className="modal-content">
        <button onClick={onCancel} className="close-icon-btn">&times;</button>
        <h2>Chi tiết thanh toán</h2>

        <div className="order-summary-list">
          <h3>Tóm tắt đơn hàng</h3>
          {cartItems.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>{(item.price * item.quantity).toLocaleString()}₫</span>
            </div>
          ))}
        </div>

        <div className="cost-details">
          <div className="cost-row">
            <span>Tạm tính</span>
            <span>{subtotal.toLocaleString()}₫</span>
          </div>
          <div className="cost-row">
            <span>Phí đóng gói</span>
            <span>{packagingFee.toLocaleString()}₫</span>
          </div>
          {discount > 0 && (
            <div className="cost-row discount">
              <span>Giảm giá</span>
              <span>- {discount.toLocaleString()}₫</span>
            </div>
          )}
          <div className="cost-row total">
            <span>Tổng cộng</span>
            <span>{total.toLocaleString()}₫</span>
          </div>
        </div>
        
        <div className="payment-method">
          <h3>Phương thức thanh toán</h3>
          <label>
            <input 
              type="radio" 
              name="payment" 
              value="cod" 
              checked={paymentMethod === 'cod'} 
              onChange={(e) => setPaymentMethod(e.target.value)}
            /> 
            Thanh toán khi nhận hàng (COD)
          </label>
          <label>
            <input 
              type="radio" 
              name="payment" 
              value="online" 
              checked={paymentMethod === 'online'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            /> 
            Thanh toán online (VNPAY, Momo...)
          </label>
        </div>

        <div className="voucher-section">
          <h3>Phiếu giảm giá</h3>
          <div className="voucher-input-group">
            <input 
              type="text" 
              placeholder="Nhập mã giảm giá" 
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
            />
            <button onClick={handleApplyVoucher}>Áp dụng</button>
          </div>
        </div>

        <div className="confirmation-buttons">
          <button onClick={() => onConfirm({ total, paymentMethod })} className="btn-confirm">
            Xác nhận thanh toán ({total.toLocaleString()}₫)
          </button>
        </div>
      </div>
    </div>
  );
}


export default TakeawayConfirmationModal;

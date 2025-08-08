import React from 'react';
import './DineInConfirmationModal.css';

function DineInConfirmationModal({ onConfirm, onCancel }) {
  return (
    <div className="modal confirmation-modal">
      <div className="modal-content">
        <button onClick={onCancel} className="close-icon-btn">&times;</button>
        <h2>Xác nhận thanh toán</h2>
        <p>Bạn có chắc chắn muốn thanh toán cho đơn hàng dùng tại quán?</p>
        <div className="confirmation-buttons">
          <button onClick={onConfirm} className="btn-confirm">Xác nhận</button>
          <button onClick={onCancel} className="btn-cancel">Hủy</button>
        </div>
      </div>
    </div>
  );
}

export default DineInConfirmationModal;

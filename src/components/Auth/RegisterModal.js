import React from 'react';
import './RegisterModal.css';

function RegisterModal({ onClose, onSwitchToLogin }) {
  return (
    <div className="modal register-modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-icon-btn">&times;</button>
        <h2>Đăng ký</h2>
        <input type="text" placeholder="Họ tên" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Mật khẩu" />
        <button className="btn-register">Đăng ký</button>
        <div className="switch-modal">
          Đã có tài khoản? <span className="switch-modal-link" onClick={onSwitchToLogin}>Đăng nhập</span>
        </div>
      </div>

    </div>
  );
}


export default RegisterModal;

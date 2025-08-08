import React from 'react';
import './LoginModal.css';

function LoginModal({ onClose, onSwitchToRegister }) {
  return (
    <div className="modal login-modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-icon-btn">&times;</button>
        <h2>Đăng nhập</h2>
        <input type="text" placeholder="Tên đăng nhập" />
        <input type="password" placeholder="Mật khẩu" />
        <button className="btn-login">Đăng nhập</button>
        <div className="separator">
          <span>HOẶC</span>
        </div>
        <button className="btn-social facebook">
          Đăng nhập bằng Facebook
        </button>
        <button className="btn-social google">
          Đăng nhập bằng Google
        </button>
        <div className="switch-modal">
          Chưa có tài khoản? <span className="switch-modal-link" onClick={onSwitchToRegister}>Đăng ký</span>
        </div>
      </div>

    </div>
  );
}


export default LoginModal;

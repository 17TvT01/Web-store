import React from 'react';
import './Notification.css'; // Đảm bảo bạn đã import file CSS này

function Notification({ onClose }) {
  return (
    <div className="notification">
      <div className="notification-header">
        <h2>Thông báo</h2>
        <button onClick={onClose} className="close-icon-btn">&times;</button>
      </div>

      <div className="notification-body">
        <p>Chưa có thông báo mới.</p>
      </div>
    </div>
  );
}

export default Notification;

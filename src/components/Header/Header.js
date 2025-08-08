import React, { useState } from 'react';
import './Header.css';
import { FaShoppingCart, FaBell, FaSearch } from 'react-icons/fa';

function Header({ onCartClick, onNotiClick, onLoginClick, onRegisterClick, onSearchSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn form tải lại trang
    if (query.trim()) { // Chỉ tìm kiếm nếu query không rỗng
      onSearchSubmit(query);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">🍜 Quán Ngon</h1>
      </div>

      <div className="header-center">
        <form className="search-container" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-box"
            placeholder="Tìm món ăn yêu thích..."
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-button" aria-label="Tìm kiếm">
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="header-right">
        <button className="icon-button" onClick={onCartClick} title="Giỏ hàng">
          <FaShoppingCart />
        </button>
        <button className="icon-button" onClick={onNotiClick} title="Thông báo">
          <FaBell />
        </button>
        <button className="auth-button secondary" onClick={onLoginClick}>Đăng nhập</button>
        <button className="auth-button primary" onClick={onRegisterClick}>Đăng ký</button>
      </div>
    </header>
  );
}

export default Header;

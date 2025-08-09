import React, { useState } from 'react';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Notification from './components/Notification/Notification';
import LoginModal from './components/Auth/LoginModal';
import RegisterModal from './components/Auth/RegisterModal';
import DineInConfirmationModal from './components/Confirmation/DineInConfirmationModal';
import TakeawayConfirmationModal from './components/Confirmation/TakeawayConfirmationModal';
import ProductList from './components/ProductList/ProductList';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showNoti, setShowNoti] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showDineInConfirm, setShowDineInConfirm] = useState(false);
  const [showTakeawayConfirm, setShowTakeawayConfirm] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Bánh mì đặc biệt',
      price: 25000,
      quantity: 2,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Trà sữa trân châu',
      price: 40000,
      quantity: 1,
      image: 'https://via.placeholder.com/80',
    },
  ]);

  const handleIncrease = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const handleDecrease = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
  };

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  const handleSwitchToRegister = () => {

    setShowLogin(false);
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleConfirmOrder = (type) => {
    // Logic to handle order confirmation
    console.log(`Order confirmed for: ${type}`);
    setShowDineInConfirm(false);
    setShowTakeawayConfirm(false);
    setShowCart(false); // Optionally close cart
  };

  return (


    <div className="App">
      <Header
        onCartClick={() => setShowCart(!showCart)}
        onNotiClick={() => setShowNoti(!showNoti)}
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      <ProductList />

      {/* Layout hiển thị tương ứng */}
      {showCart && <Cart 
        onClose={() => setShowCart(false)} 
        onDineInOrder={() => setShowDineInConfirm(true)}
        onTakeawayOrder={() => setShowTakeawayConfirm(true)}
        cartItems={cartItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />}

      {showNoti && <Notification onClose={() => setShowNoti(false)} />}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onSwitchToRegister={handleSwitchToRegister} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} onSwitchToLogin={handleSwitchToLogin} />}

      {showDineInConfirm && <DineInConfirmationModal 
        onConfirm={() => handleConfirmOrder('Dine-in')}
        onCancel={() => setShowDineInConfirm(false)}
      />}
      {showTakeawayConfirm && <TakeawayConfirmationModal 
        onConfirm={() => handleConfirmOrder('Takeaway')}
        onCancel={() => setShowTakeawayConfirm(false)}
        cartItems={cartItems}
      />}



    </div>
  );
}

export default App;

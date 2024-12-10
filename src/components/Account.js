import React, { useState } from 'react';
import '../styles/account.css';
import '../components/Header';
import '../components/Footer';

function Account() {
  const [activeSection, setActiveSection] = useState('accountInfo');
  const [userInfo, setUserInfo] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
  });
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Handle input changes for user info
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle save user info
  const handleSaveUserInfo = (e) => {
    e.preventDefault();
    setConfirmationMessage(`Thông tin đã lưu:\n
      - Họ tên: ${userInfo.name}\n
      - Ngày sinh: ${userInfo.dob}\n
      - Giới tính: ${userInfo.gender}\n
      - Địa chỉ: ${userInfo.address}\n
      - Số điện thoại: ${userInfo.phone}\n
      - Email: ${userInfo.email}`);
    alert(confirmationMessage);
  };

  // Thay đổi mật khẩu
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSavePassword = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setPasswordError('Mật khẩu nhập lại không khớp!');
    } else {
      setPasswordError('');
      alert('Mật khẩu đã được thay đổi thành công!');
    }
  };

  return (
    <div className="flex-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Tài khoản của tôi</h2>
        <div>
          <button
            onClick={() => setActiveSection('accountInfo')}
            className={activeSection === 'accountInfo' ? 'active' : ''}
          >
            Thông tin tài khoản
          </button>
          <button
            onClick={() => setActiveSection('orderManagement')}
            className={activeSection === 'orderManagement' ? 'active' : ''}
          >
            Quản lý đơn hàng
          </button>
          <button
            onClick={() => setActiveSection('changePassword')}
            className={activeSection === 'changePassword' ? 'active' : ''}
          >
            Đổi mật khẩu
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`main-content ${
          activeSection === 'changePassword' ? 'small' : 'large'
        }`}
      >
        {activeSection === 'accountInfo' && (
          <>
            <h2>Thông tin tài khoản</h2>
            <form onSubmit={handleSaveUserInfo}>
              <div className="form-group">
                <label>Họ tên</label>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Ngày sinh</label>
                <input
                  type="date"
                  name="dob"
                  value={userInfo.dob}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Giới tính</label>
                <input
                  type="text"
                  name="gender"
                  value={userInfo.gender}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="save">
                Lưu thông tin
              </button>
            </form>
          </>
        )}

        {activeSection === 'orderManagement' && (
          <>
            <h2>Quản lý đơn hàng</h2>
            <div className="order-buttons">
              <button>Tất cả đơn</button>
              <button>Đang xử lý</button>
              <button>Đang vận chuyển</button>
              <button>Đã giao</button>
              <button>Đã hủy</button>
            </div>
            <div className="order-content">
              <p>Bạn chưa có đơn hàng nào</p>
            </div>
          </>
        )}

        {activeSection === 'changePassword' && (
          <>
            <h2>Đổi mật khẩu</h2>
            <form onSubmit={handleSavePassword}>
              <div className="form-group">
                <label>Mật khẩu hiện tại</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwords.currentPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu mới</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <label>Nhập lại mật khẩu mới</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
              <button type="submit" className="save">
                Lưu thay đổi
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Account;

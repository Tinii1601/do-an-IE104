import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Account() {
  const [activeSection, setActiveSection] = useState('accountInfo');

  return (
    <>
      <Header />
      <div className="flex bg-[#FFF8F0] p-10 min-h-screen justify-center">
        {/* Sidebar */}
        <div className="bg-white p-4 rounded-lg shadow-md w-[380px] h-[290px] mr-8">
          <h2 className="font-semibold mb-4 text-lg">Tài khoản của tôi</h2>
          <div className="space-y-2">
            <button
              onClick={() => setActiveSection('accountInfo')}
              className={`block w-full text-left p-2 rounded-full ${activeSection === 'accountInfo' ? 'bg-gray-300' : 'bg-white border border-gray-300'
                } hover:bg-gray-100`}
            >
              Thông tin tài khoản
            </button>
            <button
              onClick={() => setActiveSection('orderManagement')}
              className={`block w-full text-left p-2 rounded-full ${activeSection === 'orderManagement' ? 'bg-gray-300' : 'bg-white border border-gray-300'
                } hover:bg-gray-100`}
            >
              Quản lý đơn hàng
            </button>
            <button
              onClick={() => setActiveSection('changePassword')}
              className={`block w-full text-left p-2 rounded-full ${activeSection === 'changePassword' ? 'bg-gray-300' : 'bg-white border border-gray-300'
                } hover:bg-gray-100`}
            >
              Đổi mật khẩu
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`flex flex-col bg-white p-8 rounded-lg shadow-md ${activeSection === 'changePassword' ? 'w-[1200px] h-[520px]' : 'w-[1200px] h-[830px]'
            }`}
        >
          {activeSection === 'accountInfo' && (
            <>
              <h2 className="text-2xl font-bold mb-6">Thông tin tài khoản</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Họ tên</label>
                  <input type="text" className="w-full border border-gray-300 rounded-full p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Ngày sinh</label>
                  <input type="date" className="w-full border border-gray-300 rounded-full p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Giới tính</label>
                  <input type="text" className="w-full border border-gray-300 rounded-full p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Địa chỉ</label>
                  <input type="text" className="w-full border border-gray-300 rounded-full p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                  <input type="text" className="w-full border border-gray-300 rounded-full p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full border border-gray-300 rounded-full p-2" />
                </div>
                <button type="submit" className="bg-gray-200 text-black py-2 px-4 rounded-full border border-gray-500 hover:bg-gray-300">
                  Lưu thông tin
                </button>
              </form>
            </>
          )}

          {activeSection === 'orderManagement' && (
            <>
              <h2 className="text-2xl font-bold mb-6">Quản lý đơn hàng</h2>
              <div className="flex space-x-4 mb-6">
                <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100">Tất cả đơn</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100">Đang xử lý</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100">Đang vận chuyển</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100">Đã giao</button>
                <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100">Đã hủy</button>
              </div>
              <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4">
                <p class="text-gray-800 text-opacity-70">Bạn chưa có đơn hàng nào</p>
              </div>
            </>
          )}

          {activeSection === 'changePassword' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Đổi mật khẩu</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Mật khẩu hiện tại</label>
                  <input type="password" className="w-full border border-gray-300 rounded-full p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Mật khẩu mới</label>
                  <input type="password" className="w-full border border-gray-300 rounded-full p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nhập lại mật khẩu mới</label>
                  <input type="password" className="w-full border border-gray-300 rounded-full p-2" />
                </div>
                <button type="submit" className="bg-gray-200 text-black py-2 px-4 rounded-full border border-gray-500 hover:bg-gray-300">
                  Lưu thay đổi
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;

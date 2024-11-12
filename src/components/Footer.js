import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-3 gap-3 bg-white px-32 py-6">
          <div>
            <p className="font-bold text-2xl">Về chúng tôi</p>
            <p className="pl-4">Giới thiệu về nhà sách</p>
            <p className="pl-4">Hệ thống nhà sách</p>
            <p className="pl-4">Điều khoản sử dụng</p>
            <p className="pl-4">Chính sách bảo mật</p>
            <p className="pl-4">Chính sách bán hàng</p>
            <p className="pl-4">Phương thức vận chuyển</p>
          </div>
          <div>
            <p className="font-bold text-2xl">Hỗ trợ khách hàng</p>
            <p className="pl-4">Các câu hỏi thường gặp</p>
            <p className="pl-4">Hướng dẫn mua hàng</p>
            <p className="pl-4">Chính sách đổi/trả hàng</p>
          </div>
          <div>
            <p className="font-bold text-2xl">Thông tin liên hệ</p>
            <p className="pl-4">Hotline: 1900xxxx</p>
            <p className="pl-4">Email: hotro@nhasach.com</p>
            <div className="flex space-x-2 pl-4">
              <img src={require("../assets/icons/facebook.png")} width="40px" />
              <img
                src={require("../assets/icons/messenger.png")}
                width="40px"
              />
              <img src={require("../assets/icons/zalo.jpeg")} width="40px" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;

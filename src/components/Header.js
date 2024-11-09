import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="Header_thong-tin-lien-lac">
          <p className="Header_thong-tin-lien-lac_kieu-chu">
            Hotline: 1900xxxx Email: hotro@nhasach.com
          </p>
          <div className="Header_thong-tin-lien-lac_icon-fb"></div>
          <div className="Header_thong-tin-lien-lac_icon-messenger"></div>
          <div className="Header_thong-tin-lien-lac_icon-zalo"></div>
        </div>
        <div className="H1">
          <div className="Header_logo"></div>
          <div className="Header_search">
            <div className="Header_search_icon"></div>
            <input type="text" placeholder="Tìm kiếm sản phẩm" />
          </div>
          <div className="Header_user">
            <div className="Header_user_icon"></div>
            <p>Tài khoản</p>
          </div>
          <div className="Header_cart">
            <div className="Header_cart_icon"></div>
            <p>Giỏ hàng</p>
          </div>
        </div>
      </>
    );
  }
}

export default Header;

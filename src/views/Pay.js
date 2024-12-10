import React, { useState, useCallback } from "react";
import "../styles/Pay-style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Pay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      discount: 0,
      products: [
        { name: "Thư Tình Hoàng Tử Bé", price: 105000, quantity: 1 },
        {
          name: "Siêu Trí Nhớ - Phương Pháp Và Các Bài Thực Hành Giúp Bạn Tối Ưu Trí Nhớ",
          price: 168000,
          quantity: 1,
        },
        {
          name: "Illustrated Special Edition - Khu Vườn Bí Mật",
          price: 199000,
          quantity: 2,
        },
      ],
    };
  }

  componentDidMount() {
    this.calculateTotal();
  }

  calculateTotal = () => {
    const total = this.state.products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    this.setState({ total });
  };

  handleDiscountChange = (event) => {
    const discountOption = event.target.value;
    const { total } = this.state;

    let discount = 0;
    if (discountOption.includes("k")) {
      discount = parseInt(discountOption) * 1000;
    } else if (discountOption.includes("%")) {
      discount = (total * parseInt(discountOption)) / 100;
    }

    this.setState({ discount });
  };

  handleBlur = (event) => {
    const input = event.target;
    const errorSpan = input.nextElementSibling;
    if (!input.value.trim()) {
      input.style.border = "2px solid red";
      if (errorSpan) {
        errorSpan.innerHTML = `Mục <b>${input.name}</b> không được để trống!!!!!`;
        errorSpan.style.color = "red";
      }
    }
  };

  handleFocus = (event) => {
    const input = event.target;
    const errorSpan = input.nextElementSibling;
    input.style.border = "2px solid black";
    if (errorSpan) {
      errorSpan.textContent = "";
    }
  };

  render() {
    const { total, discount, products } = this.state;
    const finalTotal = total - discount + 20000;

    return (
      <>
        <div className="relative z-20">
          <Header />
        </div>
        <div className="pay-container">
          <form>
            <div className="content">
              <h3>Địa chỉ giao hàng</h3>
              <div className="Nhap">
                <label>Họ tên người nhận</label>
                <div>
                  <input
                    type="text"
                    name="Họ tên người nhận"
                    required
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                  />
                  <span></span>
                </div>
                <label>Số điện thoại</label>
                <div>
                  <input
                    type="tel"
                    name="Số điện thoại"
                    required
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                  />
                  <span></span>
                </div>
                <label>Tỉnh/Thành phố</label>
                <div>
                  <input
                    type="text"
                    name="Tỉnh/Thành phố"
                    required
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                  />
                  <span></span>
                </div>
                <label>Phường/Xã</label>
                <div>
                  <input
                    type="text"
                    name="Phường/Xã"
                    required
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                  />
                  <span></span>
                </div>
                <label>Địa chỉ Nhập số nhà và tên đường</label>
                <div>
                  <input
                    type="text"
                    name="Địa chỉ(Nhập số nhà và tên đường"
                    required
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                  />
                  <span></span>
                </div>
              </div>
            </div>
            <div className="content">
              <h3>Phương thức thanh toán</h3>
              <input type="radio" name="pttt" />
              Thanh toán khi nhận hàng
              <br />
              <input type="radio" name="pttt" />
              Chuyển khoản qua ngân hàng
              <br />
              <input type="radio" name="pttt" />
              Ví MoMo
              <br />
              <input type="radio" name="pttt" />
              Thẻ visa / master / JCB
            </div>
            <div className="content">
              <h3>Mã khuyến mãi</h3>
              <div className="NhapMa">
                <label>Mã khuyến mãi</label>
                <select onChange={this.handleDiscountChange} id="MaKM">
                  <option value="">-- Không sử dụng mã --</option>
                  {total > 200000 && (
                    <>
                      <option value="10k">Giảm 10,000 VND</option>
                      <option value="8%">Giảm 8%</option>
                    </>
                  )}
                  {total > 500000 && (
                    <>
                      <option value="50k">Giảm 50,000 VND</option>
                      <option value="20%">Giảm 20%</option>
                    </>
                  )}
                  {total > 1000000 && (
                    <>
                      <option value="100k">Giảm 100,000 VND</option>
                      <option value="30%">Giảm 30%</option>
                    </>
                  )}
                </select>
              </div>
            </div>
            <div className="content">
              <h3>Kiểm tra lại đơn hàng</h3>
              <table id="donhang">
                <thead>
                  <tr>
                    <th>Tên sản phẩm</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="Total">
                <h6>Tổng thành tiền: {total} VND</h6>
                <h6>Giảm giá: -{discount} VND</h6>
                <h6>Phí vận hành: 20,000 VND</h6>
                <h6>Tổng thanh toán: {finalTotal} VND</h6>
                <input type="submit" value={"Xác nhận thanh toán"} />
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Pay;

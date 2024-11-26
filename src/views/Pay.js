import React from "react";
import "../styles/Pay-style.css";

class Pay extends React.Component {
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
    return (
      <>
        <div class="container">
          <form>
            <div class="content">
              <h3>Địa chỉ giaog hàng</h3>
              <div class="Nhap">
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
                <label>Địa chỉ(Nhập số nhà và tên đường</label>
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
            <div class="content">
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
            <div class="content">
              <h3>Mã khuyến mãi</h3>
              <div class="NhapMa">
                <label>Mã khuyến mãi</label>
                <input type="text" />
                <input type="button" value={"Xem thêm"} />
              </div>
            </div>
            <div class="content">
              <h3>Kiểm tra lại đơn hàng</h3>
              <table>
                <tr>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                </tr>
              </table>
              <div class="Total">
                <h6>Tổng thành tiền</h6>
                <h6>Phí vận hành</h6>
                <input type="submit" value={"Xác nhận thanh toán"} />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Pay;

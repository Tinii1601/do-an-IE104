import React, { useState, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Intro.css";

class Intro extends React.Component {
  render() {
    return (
      <>
        <div className="relative z-20">
          <Header />
        </div>
        <div className="container">
          <h1>Giới thiệu Nhà Sách</h1>
          <p>
            uit.com là trang thương mại điện tử của Nhà Sách UIT, hệ thống nhà
            sách thân thuộc của nhiều gia đình Việt kể từ nhà sách đầu tiên ra
            đời năm 2024 đến nay.
          </p>
          <p>
            Đến với không gian mua sắm trực tuyến uit.com, khách hàng có thể dễ
            dàng tìm thấy những cuốn sách hay, đa thể loại của nhiều nhà xuất
            bản, công ty sách trong và ngoài nước cùng nhiều dụng cụ học tập,
            văn phòng phẩm, quà lưu niệm, đồ chơi giáo dục chính hãng của những
            thương hiệu uy tín. Cùng tiêu chí không ngừng hoàn thiện, nâng cao
            chất lượng sản phẩm, dịch vụ, Nhà Sách Phương Nam cam kết mang đến
            cho khách hàng trải nghiệm mua sắm trực tuyến an toàn, tiện lợi:
            cách đặt hàng đơn giản, phương thức thanh toán đa dạng, dịch vụ chăm
            sóc khách hàng tận tình, chu đáo.
          </p>
          <h1>Giới thiệu các danh mục sản phẩm</h1>
          <ul className="list-cat">
            <li>
              Sách quốc văn: Ngoài danh mục sách đa dạng và phong phú của nhiều
              nhà xuất bản, công ty sách lớn nhỏ cả nước, UIT còn chủ động khai
              thác bản quyền và liên kết xuất bản hàng ngàn đầu sách hay và giá
              trị với thương hiệu Phương Nam Book, trong đó nhiều tựa được đánh
              giá cao và lọt vào danh mục bán chạy của các hệ thống phát hành
              sách lớn nhất Việt Nam.
            </li>
            <li>
              Sách ngoại văn: Nhà Sách Phương Nam chủ động chọn lọc và phát hành
              tại Việt Nam danh mục sách tiếng Anh đa dạng của những nhà xuất
              bản lớn trên thế giới như Penguin Random House, Hachette Livre,
              HarperCollins, Macmillan Publishers, Simon & Schuster,… Nhiều tựa
              chỉ có duy nhất tại Nhà Sách Phương Nam, nhiều tựa được phát hành
              cùng thời điểm ra mắt của sách tại Anh và Mỹ.
            </li>
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}

export default Intro;

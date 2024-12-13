import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Intro = () => {
  return (
    <>
      <div className="relative z-20">
        <Header />
      </div>
      <div className="w-4/5 bg-white p-6 mx-auto my-12 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold mb-5">Giới thiệu Nhà Sách</h1>
        <p className="mb-4">
          uit.com là trang thương mại điện tử của Nhà Sách UIT, hệ thống nhà
          sách thân thuộc của nhiều gia đình Việt kể từ nhà sách đầu tiên ra
          đời năm 2024 đến nay.
        </p>
        <p className="mb-4">
          Đến với không gian mua sắm trực tuyến uit.com, khách hàng có thể dễ
          dàng tìm thấy những cuốn sách hay, đa thể loại của nhiều nhà xuất
          bản, công ty sách trong và ngoài nước cùng nhiều dụng cụ học tập,
          văn phòng phẩm, quà lưu niệm, đồ chơi giáo dục chính hãng của những
          thương hiệu uy tín. Cùng tiêu chí không ngừng hoàn thiện, nâng cao
          chất lượng sản phẩm, dịch vụ, Nhà Sách UIT cam kết mang đến cho khách
          hàng trải nghiệm mua sắm trực tuyến an toàn, tiện lợi: cách đặt hàng
          đơn giản, phương thức thanh toán đa dạng, dịch vụ chăm sóc khách
          hàng tận tình, chu đáo.
        </p>
        <h1 className="text-3xl font-extrabold mb-5">Giới thiệu các danh mục sản phẩm</h1>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            <p className="flex items-start">
              <img
                src={require("../assets/icons/icon-cuon-sach.jpg")}
                alt="icon"
                className="w-5 h-5 mr-3"
              />
              Sách quốc văn: Ngoài danh mục sách đa dạng và phong phú của nhiều
              nhà xuất bản, công ty sách lớn nhỏ cả nước, UIT còn chủ động khai
              thác bản quyền và liên kết xuất bản hàng ngàn đầu sách hay và giá
              trị với thương hiệu UIT Book, trong đó nhiều tựa được đánh giá cao
              và lọt vào danh mục bán chạy của các hệ thống phát hành sách lớn
              nhất Việt Nam.
            </p>
          </li>
          <li className="mb-4">
            <p className="flex items-start">
              <img
                src={require("../assets/icons/icon-cuon-sach.jpg")}
                alt="icon"
                className="w-5 h-5 mr-3"
              />
              Sách ngoại văn: Nhà Sách UIT chủ động chọn lọc và phát hành tại Việt
              Nam danh mục sách tiếng Anh đa dạng của những nhà xuất bản lớn trên
              thế giới như Penguin Random House, Hachette Livre, HarperCollins,
              Macmillan Publishers, Simon & Schuster,… Nhiều tựa chỉ có duy nhất
              tại Nhà Sách UIT, nhiều tựa được phát hành cùng thời điểm ra mắt
              của sách tại Anh và Mỹ.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Intro;

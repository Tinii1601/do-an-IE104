import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReturnPolicy = () => {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto mt-8 p-5 bg-white border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-center text-xl font-bold mb-5 text-gray-800">Chính Sách Đổi Trả Hàng</h1>

        <div className="mb-5">
          <p className="text-gray-700">
            Để nâng cao chất lượng dịch vụ và trải nghiệm mua sắm của khách hàng, Nhà Sách Phương Nam chúng tôi có những chính sách phù hợp khi khách hàng có nhu cầu đổi/trả/hoàn tiền sản phẩm. Chúng tôi luôn coi trọng và bảo vệ quyền lợi của người tiêu dùng với mong muốn mang đến cho quý khách chất lượng phục vụ tốt nhất.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">*** Đối Với Khách Hàng Mua Online ***</h3>
          <p className="text-gray-700 font-bold">♥ Hướng dẫn các bước đổi trả hàng</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Vui lòng liên hệ hotline <strong>1900 6656</strong> hoặc gửi email về địa chỉ <a href="mailto:hotro@nhasachphuongnam.com" className="text-blue-600 underline">hotro@nhasachphuongnam.com</a> để thông báo yêu cầu đổi/trả hàng.</li>
            <li>Nhân viên chăm sóc khách hàng sẽ liên hệ với bạn để xác nhận, kiểm tra & tiếp nhận hàng được yêu cầu đổi/trả hàng (chỉ áp dụng đổi với các trường hợp đổi/trả hàng do lỗi xuất phát từ chúng tôi).</li>
            <li>Khi yêu cầu đổi trả được giải quyết, quý khách vui lòng gửi sản phẩm như hiện trạng khi nhận hàng ban đầu về địa chỉ văn phòng công ty Nhà Sách Phương Nam bao gồm sản phẩm và đầy đủ phụ kiện, giấy tờ chứng từ kèm theo (nếu có).</li>
          </ul>
          <p className="text-gray-700">
            <strong>Nhà Sách Phương Nam</strong> cam kết sẽ giao sản phẩm thay thế hoặc tiến hành hoàn tiền (trường hợp trả hàng) trong vòng 5-7 ngày tùy khu vực kể từ ngày xác nhận việc đổi trả hàng.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">*** Đối Với Khách Hàng Mua Tại Nhà Sách ***</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Đổi trả trong vòng 7 ngày kể từ ngày mua.</li>
            <li>Chỉ áp dụng đối với sản phẩm bị lỗi kỹ thuật.</li>
            <li>Sản phẩm đổi/trả phải kèm hóa đơn tính tiền hoặc hóa đơn VAT.</li>
            <li>Giá trị sản phẩm đổi bằng hoặc cao hơn giá trị sản phẩm đã mua.</li>
            <li>Sản phẩm phải còn mới, nguyên vẹn, không trầy xước, dơ, nứt gãy, và đầy đủ phụ kiện, bao bì, quà tặng khuyến mãi (nếu có).</li>
          </ul>
        </div>

        <div className="text-center my-5">
          <img
            src={require("../assets/icons/ChinhSachDoiTra.jpg")}
            alt="Chính Sách Đổi Trả"
            className="rounded-lg mx-auto"
          />
        </div>

        <div className="mb-5">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">♥ Các trường hợp được đổi trả hàng/hoàn tiền</h3>
          <p className="text-gray-700 font-bold">Trường hợp mua online:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Giao nhầm sản phẩm: tựa sách, hình thức bìa, giá tiền, v.v...</li>
            <li>Hàng hóa không đúng như mô tả trên website (màu sắc, kiểu dáng, chức năng) hoặc hàng hóa bị hư hỏng trong quá trình giao hàng.</li>
            <li>Đơn hàng đã thanh toán trước nhưng sản phẩm đã hết trên toàn bộ hệ thống Nhà Sách Phương Nam.</li>
          </ul>
          <p className="text-gray-700 font-bold">Trường hợp mua tại nhà sách:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Sản phẩm bị lỗi do in ấn, kỹ thuật.</li>
            <li>Phát hiện hàng giả, hàng nhái.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReturnPolicy;

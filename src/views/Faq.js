import React from "react";
import "../styles/Faq.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function FAQ() {
  return (
    <>
      <Header />
      <div className="faq-container">
        <h1>Các Câu Hỏi Thường Gặp</h1>
        <div className="faq-section">
          <h3>1. Tôi có thể tới tận nơi xem sản phẩm trước khi mua không?</h3>
          <p>
            Bạn có thể đến Nhà Sách Phương Nam để xem sản phẩm và trực tiếp mua hàng. Ngoài ra, bạn cũng có thể mua hàng trực tuyến tại website nhasachphuongnam.com để được giao hàng tận nơi, hoàn toàn tiện lợi.
          </p>
        </div>
        <div className="faq-section">
          <h3>2. Trường hợp đơn hàng của tôi có sản phẩm đã hết hàng thì sao?</h3>
          <p>
            Đối với trường hợp này, bộ phận Chăm Sóc Khách Hàng sẽ liên hệ với bạn để báo về tình trạng sản phẩm ngay khi có hàng trở lại.
          </p>
        </div>
        <div className="faq-section">
          <h3>3. Tôi muốn thêm/bớt sản phẩm, thay đổi địa chỉ giao hàng?</h3>
          <p>
            Khi đã đặt hàng thành công, quý khách có thể truy cập vào tài khoản, phần Quản lý đơn hàng hoặc kiểm tra email để kiểm tra lại thông tin đơn hàng.
          </p>
          <p>Trong trường hợp cần chỉnh sửa cho đơn hàng, quý khách có thể liên hệ với bộ phận hỗ trợ khách hàng bằng cách vào trang "Gửi yêu cầu" và cung cấp thông tin chi tiết, bao gồm:</p>
          <ul>
            <li>Mã số đơn hàng</li>
            <li>Tên sản phẩm/địa chỉ mới và thông tin cần chỉnh sửa</li>
          </ul>
          <p>
            Hoặc liên hệ qua Hotline: <strong>1900 6656</strong> để được hỗ trợ trực tiếp và nhanh nhất.
          </p>
        </div>
        <div className="faq-section">
          <h3>4. Tôi có thể hủy đơn hàng đã đặt được không?</h3>
          <p>
            Quý khách chỉ có thể hủy đơn hàng khi đơn hàng chưa được gọi xác nhận từ bộ phận chăm sóc khách hàng của nhasachphuongnam.com. Nếu không có nhu cầu nhận hàng, quý khách vui lòng tham khảo thêm chính sách đổi & trả hàng của chúng tôi.
          </p>
        </div>
        <div className="faq-section">
          <h3>5. Tôi có thể đặt dịch vụ gói & tặng quà được không?</h3>
          <p>
            Nhà Sách Phương Nam chúng tôi có cung cấp dịch vụ gói, tặng quà và gửi lời nhắn theo quà. Đối với dịch vụ này, quý khách buộc phải thanh toán hóa đơn mua hàng và phí gói quà trước khi chúng tôi thực hiện dịch vụ. Phí dịch vụ gói quà dao động từ 5.000 - 10.000đ và giấy gói ngẫu nhiên.
          </p>
        </div>
        <div className="faq-section">
          <h3>6. Tôi có thể yêu cầu viết hóa đơn VAT cho đơn hàng của mình không?</h3>
          <p>
            Nhà Sách Phương Nam chúng tôi có viết hóa đơn VAT theo yêu cầu của khách hàng.
          </p>
          <p>
            Lưu ý: hóa đơn chỉ được gửi sau khi đơn hàng đã thực hiện thành công (đã giao hàng & thu tiền).
          </p>
        </div>
        <div className="faq-section">
          <h3>7. Vì sao đơn hàng của tôi chưa tới?</h3>
          <p>
            Nếu như vì lý do nào đó đơn hàng của quý khách chưa được giao như đúng hẹn, vui lòng kiểm tra trạng thái đơn hàng trong trang Quản lý đơn hàng hoặc liên hệ với bộ phận Hỗ trợ khách hàng của chúng tôi để được hỗ trợ:
          </p>
          <p>
            [Hotline: <strong>1900 6656</strong>, Thứ 2 - Thứ 6: 8h - 16h30; Thứ 7: 8h - 12h, CN nghỉ]
          </p>
        </div>
        <div className="faq-section">
          <h3>8. Tôi ủy thác cho người khác nhận hàng và thanh toán giùm được không?</h3>
          <p>
            Quý khách có thể ủy thác cho người khác nhận hàng và thanh toán thay mình. Trong trường hợp này, người được ủy thác cần nêu đúng họ tên và số điện thoại người ủy thác. Người được ủy thác phải ký xác thực đã nhận đơn hàng thay.
          </p>
        </div>
        <div className="faq-section">
          <h3>9. Tôi có thể đổi hoặc trả hàng đã mua không?</h3>
          <p>
            Quý khách vui lòng kiểm tra kỹ hàng hóa trước khi ký xác nhận với nhân viên giao hàng. Trường hợp sản phẩm bị hư hỏng, không sử dụng được (lỗi do phía công ty), chúng tôi sẵn lòng đổi sản phẩm khác theo yêu cầu của khách hàng trong thời gian nhanh nhất tùy theo khu vực kể từ lúc nhận hàng lỗi. Để yêu cầu đổi sản phẩm khác, vui lòng gửi yêu cầu trong trang Quản lý đơn hàng hoặc liên hệ với bộ phận chăm sóc khách hàng của chúng tôi.
          </p>
          <p>
            Để thực hiện việc đổi hàng, quý khách vui lòng gửi hàng về địa chỉ công ty (940 Ba Tháng Hai, Phường 15 Quận 11, TP.HCM), hàng gửi về phải bảo đảm như hiện trạng ban đầu. Sau khi nhận được hàng quý khách gửi về, chúng tôi sẽ thực hiện gửi hàng thay thế cho quý khách. Quý khách sẽ không phải chịu chi phí nào khác.
          </p>
          <p>Chúng tôi sẽ không thực hiện việc đổi hàng trong trường hợp sản phẩm bị hư hỏng đến từ phía của quý khách.</p>
        </div>
        <div className="faq-section">
          <h3>10. Tôi muốn góp ý, phàn nàn về dịch vụ thì phải làm sao?</h3>
          <p>
            Chúng tôi luôn chào đón mọi góp ý, phàn nàn của quý khách để dịch vụ của chúng tôi ngày một hoàn thiện hơn. Quý khách có thể gửi mọi góp ý, khiếu nại của mình qua <strong>hotro@nhasachphuongnam.com</strong>, chúng tôi sẽ phản hồi trong thời gian sớm nhất.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;

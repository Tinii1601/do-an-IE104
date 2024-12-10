import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const supportItems = [
    { label: "Các câu hỏi thường gặp", link: "/faq" },
    { label: "Hướng dẫn mua hàng", link: "#" },
    { label: "Chính sách đổi/trả hàng", link: "/return-policy" },
  ];

  const aboutItems = [
    { label: "Giới thiệu về nhà sách", link: "/intro" },
    { label: "Hệ thống nhà sách", link: "/introsystem" },
    { label: "Điều khoản sử dụng", link: "#" },
    { label: "Chính sách bảo mật", link: "#" },
    { label: "Chính sách bán hàng", link: "#" },
    { label: "Phương thức vận chuyển", link: "#" },
  ];

  const contactInfo = [
    { label: "Hotline: 1900xxxx", icon: null },
    { label: "Email: hotro@nhasach.com", icon: null },
  ];

  const socialIcons = [
    {
      src: require("../assets/icons/facebook.png"),
      alt: "Facebook",
      width: "40px",
    },
    {
      src: require("../assets/icons/messenger.png"),
      alt: "Messenger",
      width: "40px",
    },
    { src: require("../assets/icons/zalo.png"), alt: "Zalo", width: "40px" },
  ];

  const renderList = (items) => (
    <div className="pl-4">
      {items.map((item, index) => (
        <p key={index}>
          {item.link ? (
            <Link to={item.link} className="text-blue-500 hover:underline">
              {item.label}
            </Link>
          ) : (
            item.label
          )}
        </p>
      ))}
    </div>
  );

  const renderContact = () => (
    <div className="pl-4">
      {contactInfo.map((item, index) => (
        <p key={index}>{item.label}</p>
      ))}
      <div className="flex space-x-2">
        {socialIcons.map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.alt} width={icon.width} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-3 gap-3 bg-white px-32 py-6">
      <div>
        <p className="font-bold text-xl">Về chúng tôi</p>
        {renderList(aboutItems)}
      </div>
      <div>
        <p className="font-bold text-xl">Hỗ trợ khách hàng</p>
        {renderList(supportItems)}
      </div>
      <div>
        <p className="font-bold text-xl">Thông tin liên hệ</p>
        {renderContact()}
      </div>
    </div>
  );
};

export default Footer;

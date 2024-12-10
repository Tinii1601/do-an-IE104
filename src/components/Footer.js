import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const supportItems = [
    "Các câu hỏi thường gặp",
    "Hướng dẫn mua hàng",
    "Chính sách đổi/trả hàng",
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
        <p key={index}>{item}</p>
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
        <div className="ml-4">
          <p className="cursor-pointer" onClick={() => { navigate('/intro') }}>Giới thiệu về nhà sách</p>
          <p className="cursor-pointer" onClick={() => { navigate('/introsystem') }}>Hệ thống nhà sách</p>
          <p>Điều khoản sử dụng</p>
          <p>Chính sách bảo mật</p>
          <p>Chính sách bán hàng</p>
          <p>Phương thức vận chuyển</p>
        </div>
      </div>
      <div>
        <p className="font-bold text-xl">Hỗ trợ khách hàng</p>
        <div className="ml-4">
          <p className="cursor-pointer" onClick={() => { navigate('') }}>Các câu hỏi thường gặp</p>
          <p className="cursor-pointer" onClick={() => { navigate('') }}>Hướng dẫn mua hàng</p>
          <p>Chính sách đổi/trả hàng</p>
        </div>
      </div>
      <div>
        <p className="font-bold text-xl">Thông tin liên hệ</p>
        {renderContact()}
      </div>
    </div>
  );
};

export default Footer;

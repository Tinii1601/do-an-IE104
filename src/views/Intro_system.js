import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/Intro_system.css"

class IntroSystem extends React.Component {
  render() {
    return (
      <>
        <div className="relative z-20">
          <Header />
        </div>
        <div class="container">
          <h1>Hệ thống Nhà sách UIT</h1>
          <table className="data-table" border={1}>
            <tr>
              <th>STT</th>
              <th>NHÀ SÁCH</th>
              <th>ĐỊA CHỈ</th>
              <th>EMAIL</th>
              <th>SĐT</th>
            </tr>
            <tr>
              <td>1</td>
              <td>UIT - Thủ Đức</td>
              <td>Tầng 3 - Vincom Plaza, 50 Lê Văn Việt, P. Hiệp Phú, TP. Thủ Đức, TP. HCM</td>
              <td>nslevanviet@gm.uit.edu.vn</td>
              <td>0915 050 940</td>
            </tr>
            <tr>
              <td>2</td>
              <td>UIT - Quận 1</td>
              <td>Tầng 4 - Saigon Centre, 65 Lê Lợi, P. Bến Nghé, Q.1, TP. HCM</td>
              <td>nsleloi@gm.uit.edu.vn</td>
              <td>0915 501 287</td>
            </tr>
            <tr>
              <td>3</td>
              <td>UIT - Phú Nhuận</td>
              <td>Tầng 2 - Co.opmart, 48 Hoa Sứ, P.7, Q. Phú Nhuận, TP. HCM</td>
              <td>nsrachmieu@gm.uit.edu.vn</td>
              <td>0914 129 286</td>
            </tr>
          </table>
        </div>
        <Footer />
      </>
    );
  }
}

export default IntroSystem;

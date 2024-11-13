import React from "react";
import "../styles/login-style.css";

class Login extends React.Component {
  render() {
    return (
      <>
        <div class="container">
          <a id="dangky" href="#" class="tab" onclick="XuatFormDK()">
            Đăng ký
          </a>
          <a id="dangnhap" href="#" class="tab" onclick="XuatFormDN()">
            Đăng nhập
          </a>
          <div id="Login" class="divForm">
            <form name="formLogin">
              <div class="Nhap">
                <label>Tên đăng nhập</label>
                <input type="text" />

                <label>Mật khẩu</label>
                <input type="password" name="" id="" />
              </div>
              <div class="submition">
                <input type="submit" value="Log In" />
              </div>
            </form>
          </div>
          <div id="Signin" class="divForm">
            <form name="formSignin">
              <div class="Nhap">
                <label>Tên đăng nhập</label>
                <div>
                  <input type="text" class="Username" />
                  <p class="Username"></p>
                </div>

                <label>Mật khẩu</label>
                <div>
                  <input type="password" name="" class="Password" />
                  <p class="Password"></p>
                </div>

                <label>Email</label>
                <div>
                  <input type="email" class="Email" />
                  <p class="Email"></p>
                </div>

                <label>Nghề nghiệp</label>
                <select name="" id="">
                  <option value="kysu">Kỹ sư</option>
                  <option value="gv">Giáo viên</option>
                  <option value="sv">Sinh viên</option>
                  <option value="khac">Khác</option>
                </select>

                <label>Tuổi</label>
                <input type="number" name="" id="" />

                <label>Giới tính</label>
                <div>
                  <input type="radio" name="Gender" id="" />
                  Nam
                  <input type="radio" name="Gender" />
                  Nữ
                </div>
              </div>
              <div class="submition">
                <input type="submit" value="Sign In" onclick="checkSignIn()" />
              </div>
            </form>
          </div>
        </div>
        {function XuatFormDK() {
          var signin = document.getElementById("Signin");
          var login = document.getElementById("Login");
          var linka = document.getElementsByClassName("tab");

          signin.style.display = "block";
          linka[0].style.backgroundColor = "blanchedalmond";

          login.style.display = "none";
          linka[1].style.backgroundColor = "gray";
        }}
        {function XuatFormDN() {
          var signin = document.getElementById("Signin");
          var login = document.getElementById("Login");
          var linka = document.getElementsByClassName("tab");

          signin.style.display = "none";
          linka[0].style.backgroundColor = "gray";

          login.style.display = "block";
          linka[1].style.backgroundColor = "blanchedalmond";
        }}
      </>
    );
  }
}

export default Login;

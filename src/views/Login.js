import React from "react";
import "../styles/login-style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const XuatFormDK = () => {
    const signin = document.getElementById("Signin");
    const login = document.getElementById("Login");
    const linka = document.getElementsByClassName("tab");

    signin.style.display = "block";
    linka[0].style.backgroundColor = "transparent";
    linka[0].style.border = "2px solid black";
    linka[0].style.borderRight = "none";

    login.style.display = "none";
    linka[1].style.backgroundColor = "gray";
    linka[1].style.border = "none";
  };

  const XuatFormDN = () => {
    const signin = document.getElementById("Signin");
    const login = document.getElementById("Login");
    const linka = document.getElementsByClassName("tab");

    signin.style.display = "none";
    linka[0].style.backgroundColor = "gray";
    linka[0].style.border = "none";

    login.style.display = "block";
    linka[1].style.backgroundColor = "transparent";
    linka[1].style.border = "2px solid black";
    linka[1].style.borderLeft = "none";
  };

  const handleBlur = (event) => {
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

  const handleFocus = (event) => {
    const input = event.target;
    const errorSpan = input.nextElementSibling;
    input.style.border = "2px solid black";
    if (errorSpan) {
      errorSpan.textContent = "";
    }
  };

  const handleLogin = () => {
    login();
    alert("Đăng nhập thành công!");
    navigate("/");
  };


  return (
    <>
      <Header />
      <div class="container">
        <div class="link">
          <a id="dangnhap" href="#" class="tab" onClick={XuatFormDN}>
            Đăng nhập
          </a>
          <a id="dangky" href="#" class="tab" onClick={XuatFormDK}>
            Đăng ký
          </a>
        </div>
        <div id="Login" class="divForm">
          <form name="formLogin">
            <div class="Nhap">
              <label>Tên đăng nhập</label>
              <br />
              <input
                type="text"
                name="Tên đăng nhập"
                required
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <span></span>
              <br />
              <label>Mật khẩu</label>
              <a href="#" class="forgot-password">
                Quên mật khẩu?
              </a>
              <br />
              <input
                type="password"
                name="Mật khẩu"
                id=""
                required
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <span></span>
            </div>
            <div class="submition">
              <input type="button" value="Đăng nhập" onClick={handleLogin} />
            </div>
          </form>
        </div>
        <div id="Signin" class="divForm">
          <form name="formSignin">
            <div class="Nhap">
              <label>Số điện thoại/Email</label>
              <br />
              <input
                type="text"
                class="Username"
                name="Tên đăng nhập"
                required
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <span></span>
              <br />
              <label>Mật khẩu</label>
              <br />
              <input
                type="password"
                name="Mật khẩu"
                class="Password"
                required
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <span></span>
              <br />
              <label>Nhập lại mật khẩu</label>
              <br />
              <input
                type="password"
                name="Nhập lại mật khẩu"
                class="Password"
                required
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <span></span>
            </div>
            <div class="submition">
              <input type="button" value="Đăng ký" onclick="checkSignIn()" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;

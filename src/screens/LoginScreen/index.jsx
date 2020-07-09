import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import _ from "lodash";
import "./Login.css";
import { formValid } from "./utils/Validate";
import HeaderLogin from "./component/Header";

// // main

function Article() {
  return (
    <>
      <Wrapper>
        <div style={intro1} className="content">
          <strong>Facebook giúp bạn kết nối và chia sẻ với mọi</strong>
          <br />
          <strong>người trong cuộc sống của bạn.</strong>
        </div>
        <div style={intro2} className="content">
          <strong>Đăng ký</strong>
        </div>
        <div style={img2} class="content">
          <img src="world.png" />
        </div>
        <div style={intro3} className="content">
          Nhanh chóng và dễ dàng.
        </div>
      </Wrapper>
    </>
  );
}

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(`
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("ERROR");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    console.log("Name: ", name);
    console.log("Value: ", value);

    switch (name) {
      case "firstName":
        formErrors.firstName = value.length < 3 ? "Ít nhất 3 kí tự" : "";
        break;

      case "lastName":
        formErrors.lastName = value.length < 3 ? "Ít nhất 3 kí tự" : "";
        break;

      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "Email không hợp lệ";
        break;

      case "password":
        formErrors.password = value.length < 6 ? "Phải có ít 6 kí tự" : "";
        break;

      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    return (
      <>
        <div id="form3" class="content">
          <div className="username">
            <div className="container">
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Họ"
                type="text"
                id="namebox"
                name="firstName"
                onChange={this.handleChange}
                noValidate
              />
              <div id="message1">
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
            </div>
          </div>
          <div className="email">
            <div className="container">
              <div>
                <input
                  className={formErrors.lastName.length > 0 ? "error" : null}
                  placeholder="Tên"
                  type="text"
                  id="namebox"
                  name="lastName"
                  onChange={this.handleChange}
                  noValidate
                />
              </div>
              <div id="message1">
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
            </div>
          </div>
          <div className="email">
            <div className="container">
              <div>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Số điện thoại hoặc email"
                  type="text"
                  id="mailbox"
                  name="email"
                  onChange={this.handleChange}
                  noValidate
                />
              </div>
              <div id="message1">
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
            </div>
          </div>
          <div className="password">
            <div className="container">
              <div>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Mật khẩu mới"
                  id="mailbox2"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  noValidate
                />
              </div>
              <div id="message1">
                {formErrors.password.length > 0 && (
                  <div className="errorMessage">{formErrors.password}</div>
                )}
              </div>
            </div>
          </div>
          <br />
          <br />
          Ngày sinh
          <br />
          <select name="day" id="selectday">
            {_.range(1, 30 + 1).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <select name="month" id="selectmonth">
            {_.range(1, 12 + 1).map((value) => (
              <option key={value} value={value}>
                {"Thang " + value}
              </option>
            ))}
          </select>
          <select name="year" id="selectday">
            {_.range(1970, 2020 + 1).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <br />
          <br />
          Giới tính
          <br />
          <input type="radio" name="sex" value="male" /> Nam{" "}
          <input type="radio" name="sex" value="female" /> Nữ{" "}
          <input type="radio" name="sex" value="female" /> Tùy Chỉnh
          <br />
          <br />
          <div id="form4">
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
            <a href="#">Điều khoản</a>, <a href="#">Chính sách dữ liệu</a> và{" "}
            <a href="#">Chính sách cookie của chúng tôi</a>. Bạn có thể nhận
            được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
          </div>
          <br />
          <br />
          <br />
          <div id="form5">
            <a href="#">Tạo Trang</a> dành cho người nổi tiếng, nhãn hiệu hoặc
            doanh nghiệp.
          </div>
        </div>
        <input type="submit" id="button2" value="Đăng Ký"></input>
      </>
    );
  }
}

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

//   footer

function Footer() {
  return (
    <>
      <div class="bodyfooter">
        <div id="footer" class="bodyfooter">
          Tiếng Việt
          <a href="#"> English (UK)</a>
          <a href="#">中文(台灣)</a>
          <a href="/home">日本語</a>
          <a href="#">한국어</a>
          <a href="#">ภาษาไทย</a>
          <a href="#">Français (France)</a>
          <a href="#">Español</a>
          <a href="#">Português (Brasil)</a>
          <a href="#">Deutsch</a>
          <a href="#">Italiano</a>
          <br />
          <hr />
          Leran more......
        </div>
      </div>
    </>
  );
}
class Login extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    this.state = {
      loggedIn: token !== null,
    };
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <HeaderLogin />
        <form onSubmit={this.handleSubmit} noValidate>
          <div class="content">
            <Article></Article>
            <Section></Section>
          </div>
        </form>
        <Footer></Footer>

        <footer></footer>
      </div>
    );
  }
}

const intro1 = {
  top: "40px",
  left: "100px",
  fontFamily: "verdana",
  fontSize: "25px",
  color: "#142170",
  height: "75px",
  width: "650px",
};
const intro2 = {
  top: "20px",
  left: "850px",
  fontFamily: "verdana",
  fontSize: "45px",
  color: "black",
  width: "500px",
  height: "60px",
};
const intro3 = {
  top: "85px",
  left: "850px",
  fontFamily: "verdana",
  fontSize: "20px",
  color: "black",
  height: "50px",
  width: "300px",
};
const img2 = {
  top: "150px",
  left: "100px",
  height: "250px",
  width: "550px",
};
const Wrapper = styled.div`
  .header {
    position: fixed;
    width: 100%;
    height: 100px;
    background: #3b5998;
    top: 0;
    left: 0;
    color: white;
    z-index: 7;
    font-family: verdana;
  }
  .content {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    height: 800px;
  }
`;
export default Login;

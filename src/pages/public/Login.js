import React from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';
import _ from 'lodash';
import './Login.css';

function HeaderImage() {
    return (
        <>
            <Wrapper>
                <div style={img1} className="header">
                    <img src="facebook.png" />
                </div>
            </Wrapper>
        </>
    );
}
const passRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,10}$/
);

class HeaderLogin extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true

        if (token == null) {
            loggedIn = false
        }

        this.state = {
            username: "",
            password: "",
            loggedIn,
            formErrors: {
                password: ""
            }
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        console.log("Name: ", name)
        console.log("Value: ", value)


        switch (name) {
            case "password":
                formErrors.password =
                    passRegex.test(value) ? "" : "Email không hợp lệ";
                // value.length < 6 ? "Phải có ít 6 kí tự" : "";
                break;

            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }

    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state
        if (username === "fis" && password === "Fis123456") {
            localStorage.setItem("token", "asdfghjkllkjhgfdsa")
            this.setState({
                loggedIn: true
            })
        }

        if (formValid(this.state)) {
            console.log(`
            Password: ${this.state.password}
      `);
        } else {
            console.error("ERROR");
        }
    }
    render() {
        const { formErrors } = this.state;
        if (this.state.loggedIn) {
            return <Redirect to="/home" />
        }
        return (
            <>
                <Flex>
                    <div className="container-1">
                        <div className="container-1-box"></div>
                        <div id="img1" className="container-1-box">
                            <img src="facebook.png" />
                        </div>
                        {/* <form onSubmit={this.submitForm}> */}
                        <div style={form1} className="container-1-box">Email hoặc điện thoại
                            <input
                                style={headerbox}
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                            /><br />
                        </div>
                        <div style={form1} className="container-1-box">
                            Password<br />
                            <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                style={headerbox}
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            /><br />
                                    Quên tài khoản?
                                    {formErrors.password.length > 0 && (
                                <div>{formErrors.password}</div>
                            )}
                        </div>
                        <div className="container-1-box">
                            <input style={submit1} type="submit" value="Đăng nhập" onSubmit={this.submitForm} />
                        </div>
                        {/* </form> */}
                    </div>
                </Flex>
            </>
        );
    }
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
                password: ""
            }
        }
    }

    handleSubmit = e => {
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
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        console.log("Name: ", name)
        console.log("Value: ", value)


        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "Ít nhất 3 kí tự" : "";
                break;

            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "Ít nhất 3 kí tự" : "";
                break;

            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "Email không hợp lệ";
                break;

            case "password":
                formErrors.password =
                    value.length < 6 ? "Phải có ít 6 kí tự" : "";
                break;

            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }
    render() {
        const { formErrors } = this.state;
        return (
            <>
                <Flex>
                    <div className="container-2">
                        <div className="container-2-box"></div>
                        <div className="container-2-box">
                            <div style={intro1} class=""><strong>Facebook giúp bạn kết nối và chia sẻ với mọi</strong><br />
                                <strong>người trong cuộc sống của bạn.</strong></div>
                            <div style={img2} class="" ><img src="world.png" /></div>
                        </div>
                        <div class="container-2-box">
                            <div style={intro2} class=""><strong>Đăng ký</strong></div>
                            <div style={intro3} class="">Nhanh chóng và dễ dàng.</div>
                            <div style={form3} class="">
                                <input
                                    placeholder="Họ"
                                    type="text"
                                    style={namebox}
                                    name="firstname"
                                />
                                <input
                                    placeholder="Tên"
                                    type="text"
                                    style={namebox}
                                    name="lastname"
                                />
                                <input
                                    placeholder="Số điện thoại hoặc email"
                                    type="text"
                                    style={namebox}
                                    name="email"
                                />
                                <input
                                    placeholder="Mật khẩu mới"
                                    style={namebox}
                                    type="password"
                                    name="password"
                                />
                                <br /><br />
                            Ngày sinh<br />
                                <select name="day" style={selectday}>
                                    {_.range(1, 30 + 1).map(value => <option key={value} value={value}>{value}</option>)}
                                </select>
                                <select name="month" style={selectmonth}>
                                    {_.range(1, 12 + 1).map(value => <option key={value} value={value}>{'Thang ' + value}</option>)}
                                </select>
                                <select name="year" style={selectday}>
                                    {_.range(1970, 2020 + 1).map(value => <option key={value} value={value}>{value}</option>)}
                                </select>
                                <br />
                                <br />
                    Giới tính<br />
                                <input type="radio" name="sex" value="male" /> Nam  <input type="radio" name="sex" value="female" /> Nữ <input type="radio" name="sex" value="female" /> Tùy Chỉnh<br /><br />
                                <div style={form4}>
                                    Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                                </div>
                                <div>
                                    <input type="submit" id="button2" value="Đăng Ký" />
                                </div>
                                <div style={form5} >
                                    Tạo Trang dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>
            </>
        );
    }
}

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });
    return valid;
};

//   footer

function Footer() {
    return (
        <>
            <div class="bodyfooter">
                <div id="footer" class="bodyfooter">
                    Tiếng Việt
                    <a href="#"> English (UK)</a>
                    <a href="#">中文(台灣)</a>
                    <a href="#">日本語</a>
                    <a href="#">한국어</a>
                    <a href="#">ภาษาไทย</a>
                    <a href="#">Français (France)</a>
                    <a href="#">Español</a>
                    <a href="#">Português (Brasil)</a>
                    <a href="#">Deutsch</a>
                    <a href="#">Italiano</a>
                    <br /><hr />Leran more......
                </div>
            </div>

        </>
    );
}
class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <HeaderLogin></HeaderLogin>
                </form>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div class="content">
                        {/* <Article></Article> */}
                        <Section></Section>
                    </div>
                </form>
                {/* <footer></footer> */}
            </div>
        );
    }
}

const Flex = styled.div`
@media (min-width: 700px) {
    .container-1 {
        display: flex;
        background: #3b5998;
        color: white;
        margin: 0px;
        align-items: center;
    }

.container-2{
    display:flex;
    background: #f3f4f8;
    margin: 0px;
    align-items: flex-start;
    height: 1000px;
    /*flex-direction: column;*/
  }
  .container-3{
    display:flex;
    background: white;
    margin: 0px;
    align-items: center;
    flex-direction: column;
  }

}

.container-1 div, .container-2 div, .container-3 div{
  padding:10px;
}


.container-1-box{
   /*flex-basis: 12;*/
}
.container-1-box:nth-of-type(1){
    flex-basis: 10%;
 }
  .container-1-box:nth-of-type(2){
    flex-basis: 45%;
 }
 .container-1-box:nth-of-type(3){
      flex-basis: 16%;
 }
  .container-1-box:nth-of-type(4){
    flex-basis: 16%;
 }

 .container-2-box:nth-of-type(1){
    flex-basis: 10%;
 }
  .container-2-box:nth-of-type(2){
    flex-basis: 45%;
 }
 .container-2-box:nth-of-type(3){
      flex-basis: 15%;
 }
`

const img1 = {
    height: '50px',
}
const form1 = {
    height: '60px',
    fontSize: '15px',
    width: '180px',
}
const headerbox = {
    width: '200px',
    height: '4px',
    background: 'white',
    padding: '10px',
    fontSize: '15px',
}
const intro1 = {
    fontFamily: 'verdana',
    fontSize: '25px',
    color: '#142170',
    height: '75px',
    width: '650px',
}
const intro2 = {
    fontFamily: 'verdana',
    fontSize: '45px',
    color: 'black',
    width: '500px',
    height: '60px',
}
const intro3 = {
    fontFamily: 'verdana',
    fontSize: '20px',
    color: 'black',
    height: '50px',
    width: '300px',
}
const img2 = {
    height: '250px',
    width: '550px',
}
const submit1 = {
    marginTop: '5px',
    background: '#4267b2',
    color: 'white',
    height: '25px',
    width: '80px',
    fontWeight: 'bold',
}
const form3 = {
    fontFamily: 'verdana',
    fontSize: '20px',
    color: '#142170',
    width: '500px',
    height: '495px',
}

const namebox = {
    marginTop: '15px',
    width: '300px',
    height: '20px',
    borderRadius: '5px/5px',
    background: 'white',
    padding: '15px',
    fontSize: '20px',
}

const form4 = {
    fontSize: '14px',
}

const form5 = {
    fontSize: '15px',
}

const selectday = {
    width: '70px',
    height: '30px',
    fontSize: '15px',
}
const selectmonth = {
    width: '80px',
    height: '30px',
    fontSize: '15px',
}


const Wrapper = styled.div`

`
export default Login;

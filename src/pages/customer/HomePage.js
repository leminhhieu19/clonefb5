import React from 'react';
import Header from './Header';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import styled from 'styled-components';
import { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import './HomePage.css';

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Header></Header>
                <HomeLeft></HomeLeft>
                <Main></Main>
                <HomeRight></HomeRight>
            </div>
        )
    }
}

function Main() {
    return (
        <div>
            <Wrapper>
                <div className="content">
                    <div style={img3} className="imgClass2">
                                <Link><img src="story.png" ></img></Link>
                            </div>
                    <div className="status">
                        <div className="wrapper2">
                            <div style={img3} className="imgClass" >
                                <img src="anhdaidien.png" />

                            </div>
                            <div>
                                <input placeholder="Hiếu ơi, Bạn đang nghĩ gì thế" type="text" id="searchbox" />
                            </div>
                        </div>
                        <hr />
                        <div className="wrapper">
                            <div style={profilearea5} className="btnstatus">
                                <a href="#"><img src="stream.png" /><span>Video trực tiếp</span></a>
                            </div>
                            <div style={profilearea5} className="btnstatus">
                                <a href="#"><img src="image.png" /><span>Ảnh/Video</span></a>
                            </div>
                            <div style={profilearea5} className="btnstatus1" >
                                <a href="#"><img src="icon.png" /><span>Cảm xúc/Hoạt động</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
.imgClass2{
    margin-top:20px;
    margin-left:430px;
}
.status {
    background-color: #242526;
    width: 500px;
    height: 125px;
    margin-top: 40px;
    top: 20px;
    margin-bottom: 20px;
    margin-left: 120px;
    border-radius: 15px/15px;
    font-size: 15px;
  }
  .content {
    background-color: #18191a;
    width: 1017px;
    height: 100%;
    top: 60px;
    left: 10px;
  }
  .wrapper2 {
    display: grid;
    grid-template-columns: 120px 170px;
  }
.wrapper {
    margin-left: 10px;
    display: grid;
    grid-template-columns: 170px 150px 170px;
}
  .btnstatus:hover {
    background-color: #303031;
    color: white;
    width: 140px;
  }
  
.btnstatus1:hover {
    background-color: #303031;
    color: white;
    width: 170px;
  }
  .wrapper2 {
    margin-left: 10px;
    display: grid;
    grid-template-columns: 50px 170px;
}
.wrapper {
    margin-left: 10px;
    display: grid;
    grid-template-columns: 170px 150px 170px;
}
#searchbox {
    color: antiquewhite;
    font-size: 15px;
    margin-top: 15px;
    width: 400px;
    height: 50px;
    background: #3a3b3c;
    padding: 5px;
    outline: none;
    outline-width: 0;
    border-radius: 20px/20px;
    background-position: 5px;
    background-repeat: no-repeat;
}
.imgClass {
    margin-top: 15px;
}
.status {
    background-color: #242526;
    width: 500px;
    height: 125px;
    margin-top: 60px;
    top: 20px;
    margin-bottom: 20px;
    margin-left: 420px;
    border-radius: 15px/15px;
}
`
const profilearea5 = {
    fontSize: '15px',
    marginTop: '10px',
}
const img3 = {
    // left: '20px',
    // height: '50px',
    // top: '5px',
}

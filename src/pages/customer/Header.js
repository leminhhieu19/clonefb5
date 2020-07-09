import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
function HeaderHome() {
    return (
        <div>
            <body>
                <Wrapper>
                    <header className="headerxxx">
                        <div id="img3" className="headerxxx">
                            <img src="logohomepage.png" />
                        </div>
                        <div style={searcharea} className="headerxxx">
                            <input placeholder="         Tìm kiếm trên Facebook" type="text" className="searchbox1" />
                        </div>
                        <div style={profilearea} className="headerxxx">
                            <a href="watch.html"><img src="home.png" /></a>
                        </div>

                        <div style={profilearea1} className="headerxxx">
                            <a href="market.html"><img src="watch.png" /></a>
                        </div>

                        <div style={profilearea2} className="headerxxx">
                            <a href="group.html"><img src="market.png" /></a>
                        </div>

                        <div style={profilearea3} className="headerxxx">
                            <a href="facebook.html"><img src="group.png" /></a>
                        </div>

                        <div style={profilearea4} className="headerxxx">
                            <a href="facebook.html"><img src="game.png" /></a>
                        </div>

                        <div style={profilearea4} className="headerxxx">
                            <a href="facebook.html"><img src="game.png" /></a>
                        </div>

                        <div style={profilearea10} className="headerxxx">
                            <Link to="/logout">Logout</Link>
                        </div>
                    </header>
                </Wrapper>
                
            </body>
        </div>
    );
}

const Wrapper = styled.div`
.headerxxx {
    color: aliceblue;
    position: fixed;
  width: 100%;
  height: 60px;
  background: #242526;
  top: 0;
  left: 0;
  color: white;
  z-index: 7;
}
.searchbox1 {
    font-size: 15px;
    top: 15px;
    width: 250px;
    height: 25px;
    background: #3a3b3c;
    padding: 5px;
    outline: none;
    outline-width: 0;
    border-radius: 20px/20px;
    background-image: url(/public/search.png);
    background-position: 5px;
    background-repeat: no-repeat;
  }
  .headerxxx a:hover{
      color #585858;
  }
`
const searcharea = {
    top: '10px',
    left: '75px',
    height: '40px',
}
const profilearea = {
    top: '0px',
    left: '395px',
    height: '40px',
}
const profilearea1 = {
    top: '0px',
    left: '505px',
    height: '40px',
}
const profilearea2 = {
    top: '0px',
    left: '615px',
    height: '40px',
}
const profilearea3 = {
    top: '0px',
    left: '725px',
    height: '40px',
}
const profilearea4 = {
    top: '0px',
    left: '835px',
    height: '40px',
}
const profilearea10 = {
    top: '15px',
    left: '1030px',
    height: '40px',
}
export default HeaderHome;
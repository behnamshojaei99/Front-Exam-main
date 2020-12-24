import React, { Component } from "react";
import  './MainHeader.css';
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd'
import Logo from "../Logo/logo"
import LMS from "./LmsQuit"
// import AnalogClock, { Themes } from 'react-analog-clock';
// import Clock from './Clock'


class Header extends Component {
       
    render() {
        const {Header} = Layout;
        return (
        <Header className="mainHeader " fixed>
            <Logo/>
            {/* <Clock renderHourMarks={true}
                renderMinuteHand={true}
                renderMinuteMarks={true}
                renderNumbers={false}
                renderSecondHand={true}/> */}
           {/* <Clock className="clock"/> */}
            {/* <Clock size={140} timeformat={"12hour"} hourformat={"roman"}/> */}
           {/* <AnalogClock style={{width:"100px", height:"100px"}} /> */}
           <LMS/>
           
        </Header>
        )
    }
}

export default Header;
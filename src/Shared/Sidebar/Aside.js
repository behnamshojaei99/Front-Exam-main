import React, { Component } from 'react'
import { Card, Col, Divider, Row , List , Avatar,  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import classes from './Aside.module.css';
import {Layout, Menu} from 'antd'
import { DashboardRounded } from '@material-ui/icons';
import './ClockCard.css'
import {
    Link
  } from "react-router-dom";


class Aside extends Component {
    
    onCollapse = () =>{
                 this.setState(prevState => ({
                    collapsed: !prevState.collapsed
               }))
            }


    render(){
        const {Sider} = Layout;
        const { SubMenu } = Menu;
        return(
            <Sider className= {classes.aside} theme="light" 
            >
            <Row>
                <Col span={24}>
                    <Card 
                    className={ classes.profileCard}
                    cover={    
                        <Avatar size={144} icon={<UserOutlined/>} 
                        className={classes.circle}/>}>
                    {/* <div className={classes.topContent}></div> */}
                    <div className={classes.content}>
                        <h2 style={{fontWeight:"bold"}}>استاد رمضانی</h2>
                        <span style={{fontWeight:"500",
                    borderBottom:"2px solid silver"}}>بیو  استاد</span>
                    </div>
                        
                        
                    </Card>
                </Col>
                <Col span={24}>
                <Menu style={{backgroundColor:" #f0f2f5" , marginTop:"20px"}} theme="light" mode="inline" defaultSelectedKeys={['1']}>
            
                <Menu.Item className={classes.asideItem} key="1" >
                    <Link  to="/recentExam">
                        آزمون های اخیر
                    </Link>
                </Menu.Item>
        
                <Menu.Item  className={classes.asideItem} key="2" >
                <Link to="/courses">
                    لیست دروس
                </Link>
                </Menu.Item>
            
            
                <Menu.Item  className={classes.asideItem} key="3" >
                    <Link to="/results">
                        مشاهده پاسخ ها
                    </Link>
                </Menu.Item>
    
                <Menu.Item  className={classes.asideItem} key="4" >
                    <Link to="/createExam"> 
                        ایجاد آزمون
                    </Link>
                </Menu.Item>
            
            
          </Menu>
                <div class="courses-container">
                    <div class="course">
                        <div class="course-preview">
                            
                        </div>
                        <div class="course-info">
                            <div class="progress-container">
                            
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="social-panel-container">
                    
                </div>
                
                </Col>
            </Row>
            
                
                
            </Sider>
            
        );
    }
}

export default Aside;
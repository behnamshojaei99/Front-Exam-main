import React, { Component } from 'react'
import { Card, Col, Divider, Row } from 'antd';
import 'antd/dist/antd.css';
import classes from './Aside.module.css';
import {Layout, Menu} from 'antd'



class Aside extends Component {

    render(){
        const {Sider} = Layout;
        const { SubMenu } = Menu;
        return(
            <Sider className= {classes.aside} theme="light">
            <Row>
                <Col span={24}>
                    <Divider className={classes.divider} orientation="center">اطلاعات دانشجو</Divider>
                    <Card 
                    className={classes.card}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" className={classes.circle} />}>
                    <div className={classes.content}>
                        <h2>بهنام شجاعی</h2>
                    </div>
                        
           
                        
                    </Card>
                </Col>
                <Col span={24}>
                <Divider className={classes.divider} orientation="center"  >لیست دروس</Divider>
                
                </Col>
            </Row>
            
                
                
            </Sider>
            
        );
    }
}

export default Aside;
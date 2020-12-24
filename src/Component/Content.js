import React, { Component } from 'react';
import {Layout} from 'antd';
import ColapseTable from './DataTable'
import str from './Strings'
import classes from './Content.module.css';
import date from './jDate';

class Content extends Component {

    
    render(){
        let time = new Date()
        const {Content} = Layout;
        return (
            <Content className={classes.content}>
                <div className={classes.header}>
                    <h1>سامانه آزمون</h1>
                    <date></date>
                </div>

                <ColapseTable headcells={str.STUDENTS_RECENT_EXAMS}  />
            </Content>
            
        )
    }
}

export default Content;